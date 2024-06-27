import store from "../store";
import { getTarget, rollToHit, calcDamage } from "../store/combat-actions";

import { combatActions } from "../store/combat-slice";
import { logActions } from "../store/log-slice";
import { uiActions } from "../store/ui-slice";

import { changeHealth } from "../store/health-actions";
import changeStatusEffect from "../store/status-effect-actions";

import { openQuickTimeEvent } from "../store/ui-actions";
import CONDITIONS from "../data/conditions";

let quickTimeEventResolver;

export default async function castSpell(dispatch, spell) {
  // Subtract spell's mana cost from player's current mana
  dispatch(
    combatActions.updateMana({ value: spell.manaCost, change: "REMOVE" })
  );

  openQuickTimeEvent(dispatch);
  const getQuickTimeEventResult = await getResult(); // true/false

  dispatch(uiActions.toggle({ modal: "modalIsVisible" })); // set to false

  if (!getQuickTimeEventResult) {
    return;
  }

  const order = store.getState().combat.order;
  const enemies = order.filter((char) => char.identifier === "ENEMY");
  const playerIndex = order.findIndex((char) => char.id === "Player");
  const player = order[playerIndex];

  let target;

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
            changeHealth(dispatch, target, "DAMAGE", damage, null);
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
          // console.log("Target: ", target);
          const statusEffect = spell.statusEffect;
          changeStatusEffect(dispatch, target, "ADD", statusEffect);
        }
      }
      break;
    case "ENEMIES":
      {
        const damage = calcDamage(
          player,
          spell,
          player.stats.arcana.spellPower
        );

        if (spell.spellType === "HIT") {
          if (spell.name === "Fireball") {
            castFireball(dispatch, enemies, damage);
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
  }
}

// =============================================================
//                     SPELL FUNCTIONS
// =============================================================
function castFireball(dispatch, enemies, damage) {
  for (let i = 0; i < enemies.length; i++) {
    changeHealth(dispatch, enemies[i], "DAMAGE", damage, null);
  }
}

function castChainLightning(dispatch, target, damage) {
  let chain = true;
  const order = store.getState().combat.order;
  const enemies = order.filter((char) => char.identifier === "ENEMY");
  const hitEnemies = [target.id];

  // Damage the initial target
  changeHealth(dispatch, target, "DAMAGE", damage, null);

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
        changeHealth(dispatch, newTarget, "DAMAGE", damage, null);
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
      `All enemies who Attack you for are dealt ${Math.round(
        spellPower / 2
      )} Lightning damage.`,
    ],
    durationType: "ROUND",
    duration: 5,
    reset: 5,
    stats: {},
    function: "STORM_SPHERE",
  };

  changeStatusEffect(dispatch, player, "ADD", STORM_SPHERE);
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
