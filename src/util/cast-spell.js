import store from "../store";
import { getTarget, calcDamage } from "../store/combat-actions";

import { combatActions } from "../store/combat-slice";
import { logActions } from "../store/log-slice";
import { uiActions } from "../store/ui-slice";

import { changeHealth } from "../store/health-actions";
import changeStatusEffect, {
  checkCurrentStatusEffects,
} from "../store/status-effect-actions";

import { openModal } from "../store/ui-actions";
import CONDITIONS from "../data/conditions";
import { checkSkillPoints } from "./spellbook-util";
import statusEffectFunctions from "./status-effect-functions";
import { constructStats } from "./dungeon-util";
import updateStatTotals from "../store/stats-actions";

let quickTimeEventResolver;

export default async function castSpell(dispatch, spell) {
  const manaCost = calculateManaCost(spell);
  dispatch(combatActions.updateMana({ value: manaCost, change: "REMOVE" }));

  openModal(dispatch, "quickTimeEventModal");

  const getQuickTimeEventResult = await getResult();

  if (!getQuickTimeEventResult) {
    return;
  }

  dispatch(uiActions.changeUi({ element: "modalIsVisible", visible: false }));

  const order = store.getState().combat.order;
  const enemies = order.filter((char) => char.identifier === "ENEMY");
  const playerIndex = order.findIndex((char) => char.id === "Player");
  const player = order[playerIndex];

  let target;

  // SKILL - Arcane Shield - Add temp. HP
  const arcaneShield = checkSkillPoints("Arcane Shield");
  if (arcaneShield) {
    const arcaneShieldFunction = statusEffectFunctions["ARCANE_SHIELD"];
    arcaneShieldFunction(dispatch, spell, player, "ADD", null);
  }

  // check for spell target type & select a target if applicable
  switch (spell.spellTarget) {
    case "ENEMY": // single enemy targeted
      {
        if (spell.spellType === "HIT") {
          dispatch(
            logActions.updateLogs({
              change: "ADD",
              text: `Choose an enemy!`,
            })
          );

          target = await getTarget("ENEMIES");

          const damage = calcDamage(
            player,
            spell,
            player.stats.arcana.spellPower
          );

          if (spell.name === "Chain Lightning") {
            castChainLightning(dispatch, target, damage);
          } else {
            // Firebolt - Frostbite - Shock
            changeHealth(dispatch, target, "DAMAGE", damage, spell.damageType);
          }
        }

        if (spell.spellType === "DEBUFF") {
          if (spell.name === "Dispel Magic") {
            let buffs = [];
            for (let i = 0; i < target.statusEffects.length; i++) {
              if (target.statusEffects[i].type === "BUFF") {
                buffs.push([target.statusEffects[i].type]);
              }
            }

            if (buffs.length > 0) {
              const randomIndex = Math.floor(Math.random() * buffs.length);
              const statusEffect = buffs[randomIndex];
              changeStatusEffect(dispatch, target, "REMOVE", statusEffect);
            }
          }
        }
      }

      break;
    case "ALLY": // single ally targeted
      {
        dispatch(
          logActions.updateLogs({
            change: "ADD",
            text: `Choose a hero!`,
          })
        );

        if (spell.spellType === "HEAL") {
          target = await getTarget("ALLIES");
          // console.log("Target: ", target);
          let healValue = spell.healValue;
          healValue += player.stats.arcana.spellPower;
          changeHealth(dispatch, target, "HEAL", healValue, null);
        }

        if (spell.spellType === "BUFF") {
          target = await getTarget("ALLIES");
          const statusEffect = spell.statusEffect;

          // SKILL - Dual Casting
          const points = checkSkillPoints("Dual Casting");

          if (
            (spell.school === "Novice Abjuration" ||
              spell.school === "Apprentice Abjuration") &&
            points > 1
          ) {
            const chance = points * 0.333;
            const number = Math.random();

            if (chance > number - 0.01) {
              const order = store.getState().combat.order;
              const allies = order.filter((ally) => ally.id !== target.id);
              const index = Math.floor(Math.random() * allies.length);
              changeStatusEffect(dispatch, allies[index], "ADD", statusEffect);
            }
          }

          changeStatusEffect(dispatch, target, "ADD", statusEffect);
        }
      }
      break;
    case "ENEMIES":
      {
        if (spell.spellType === "HIT") {
          const damage = calcDamage(
            player,
            spell,
            player.stats.arcana.spellPower
          );

          if (spell.name === "Fireball") {
            castFireball(dispatch, enemies, damage);
          }

          if (spell.name === "Meteor") {
            castMeteor(dispatch, enemies, damage);
          }
        }

        if (spell.spellType === "DEBUFF") {
          if (spell.name === "Blizzard") {
            castBlizzard(dispatch, enemies);
          }
        }
      }
      break;
    case "ALLIES": // all allies including the player targeted
      break;

    case "SELF": // only the player is targeted
      if (spell.name === "Storm Sphere") {
        castStormSphere(dispatch, player);
      }
      break;
    case "ALL": // all characters in initiative are targeted
      break;

    case "CONJURE":
      {
        if (spell.spellType === "SUMMON") {
          const baseStats = constructStats(spell.summon.stats);
          let summon = {
            ...spell.summon,
            stats: baseStats,
            damageDisplay: "",
          };

          dispatch(combatActions.addCharacter({ character: summon }));
          updateStatTotals(dispatch, summon.id);
          dispatch(
            combatActions.updateHealth({
              id: summon.id,
              change: "HEAL",
              value: 999,
            })
          );
        }
      }
      break;

    default:
      return;
  }

  console.log("CAST SPELL END");
}

// =============================================================
//                     SPELL FUNCTIONS
// =============================================================
function castFireball(dispatch, enemies, damage) {
  for (let i = 0; i < enemies.length; i++) {
    changeHealth(dispatch, enemies[i], "DAMAGE", damage, "FIRE");
  }
}

function castChainLightning(dispatch, target, damage) {
  let chain = true;
  const order = store.getState().combat.order;
  const enemies = order.filter((char) => char.identifier === "ENEMY");
  const hitEnemies = [target.id];

  // Damage the initial target
  changeHealth(dispatch, target, "DAMAGE", damage, "LIGHTNING");

  while (chain) {
    const chainChance = Math.random();
    if (chainChance < 0.5) {
      chain = false;
    } else {
      // Filter out the already hit enemies to find new targets
      const remainingEnemies = enemies.filter(
        (enemy) => !hitEnemies.includes(enemy.id)
      );

      if (remainingEnemies.length === 0) {
        chain = false;
      } else {
        console.log("CHAIN");
        // Select a new target randomly from the remaining enemies
        const newTarget =
          remainingEnemies[Math.floor(Math.random() * remainingEnemies.length)];
        // Damage the new target
        changeHealth(dispatch, newTarget, "DAMAGE", damage, "LIGHTNING");
        // Add the new target to the list of hit enemies
        hitEnemies.push(newTarget.id);
      }
    }
  }
}

function castBlizzard(dispatch, enemies) {
  for (let i = 0; i < enemies.length; i++) {
    changeStatusEffect(dispatch, enemies[i], "ADD", CONDITIONS.CHILLED);
  }
}

function castStormSphere(dispatch, player) {
  const spellPower = store.getState().player.stats.arcana.spellPower;

  const STORM_SPHERE = {
    name: "Storm Sphere",
    display: true,
    image: "",
    type: "BUFF",
    // description: "",
    effect: [
      `All enemies who Attack you are dealt ${Math.round(
        spellPower / 2
      )} Lightning damage.`,
    ],
    durationType: "ROOM",
    duration: 1,
    reset: 1,
    stats: {},
    function: "STORM_SPHERE",
  };

  changeStatusEffect(dispatch, player, "ADD", STORM_SPHERE);
}

function castMeteor(dispatch, enemies, damage) {
  for (let i = 0; i < enemies.length; i++) {
    changeHealth(dispatch, enemies[i], "DAMAGE", damage, "FIRE");
    changeStatusEffect(dispatch, enemies[i], "ADD", CONDITIONS.BURNING);
  }
}

function calculateManaCost(spell) {
  let manaCost = spell.manaCost;
  const evoker = checkSkillPoints("Evoker");
  const abjurer = checkSkillPoints("Abjurer");

  const evocation = [
    "Novice Evocation",
    "Apprentice Evocation",
    "Adept Evocation",
    "Expert Evocation",
  ];

  const abjuration = [
    "Novice Abjuration",
    "Apprentice Abjuration",
    "Adept Abjuration",
    "Expert Abjuration",
  ];

  if (evoker && evocation.includes(spell.school)) {
    manaCost -= evoker * 2;
  }

  if (abjurer && abjuration.includes(spell.school)) {
    manaCost -= abjurer * 2;
  }

  return manaCost;
}

// =============================================================
//                     QTE SUCCESS / FAILED
// =============================================================

// Used to await the result of the QTE
export async function getResult() {
  return new Promise((resolve) => {
    quickTimeEventResolver = resolve;
  });
}

// Function to set the QTE result in the QTE component
export function setResult(result) {
  if (quickTimeEventResolver) {
    quickTimeEventResolver(result);
    quickTimeEventResolver = null;
  }
}
