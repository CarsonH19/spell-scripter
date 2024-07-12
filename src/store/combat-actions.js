import store from "./index";

import { changeHealth } from "./health-actions";
import castSpell from "../util/cast-spell";
import setTargetType from "../util/targeting";
import CONDITIONS from "../data/conditions";
import changeStatusEffect, {
  checkCurrentStatusEffects,
  checkStatusEffect,
} from "./status-effect-actions.js";

import { uiActions } from "./ui-slice.js";
import combatSlice, { combatActions } from "./combat-slice.js";
import { logActions } from "./log-slice.js";

import activateItem from "./item-actions.js";

import {
  checkBehaviorAction,
  checkBehaviorAttackTarget,
} from "../util/behaviors.js";

import {
  decrementAbilityCooldowns,
  useAbility,
} from "../util/ability-functions.js";

import { checkForPassiveAbility } from "../util/passive-functions.js";
import statusEffectFunctions from "../util/status-effect-functions.js";
import { openModal } from "./ui-actions.js";

import updateStatTotals from "./stats-actions.js";
import Character from "../components/GameWindow/BottomContent/Character.jsx";

let playerActionResolver;
let targetResolver;
let selectResolver;

export default async function combatLoop(dispatch) {
  // Iterate through all characters and call passive abilities before combat
  // NOTE: Passives will be called on each round of combat.
  let order = store.getState().combat.order;
  const dungeon = store.getState().dungeon;
  console.log(dungeon);

  for (let i = 0; i < order.length; i++) {
    checkForPassiveAbility(dispatch, order[i], "BEFORE_COMBAT");
  }

  // Iterate through the initiative order simulating a round of combat.
  for (let i = 0; i < order.length; i++) {
    // get the updated values for player and enemies on each iteration
    let order = store.getState().combat.order;

    // If player dies the game is over
    const playerIndex = order.findIndex((char) => char.id === "Player");
    const player = order[playerIndex];

    const enemies = [];
    console.log(enemies);
    for (let i = 0; i < order.length; i++) {
      if (order[i].identifier === "ENEMY") {
        enemies.push(order[i]);
      }
    }

    let characterCheck = order[i];
    if (!characterCheck) continue;
    // Check status effect that call functions at the start of the character's turn
    checkStatusEffect(dispatch, order[i].id, "CALL");
    order = store.getState().combat.order;
    let character = order.find((char) => char.id === characterCheck.id);

    await delay(1000);

    // If all enemies, player, or current character is dead the loop will skip the combat logic
    // need to check if the character is alive
    if (
      enemies.length > 0 &&
      player.currentHealth >= 0 &&
      character.currentHealth > 0
    ) {
      dispatch(
        combatActions.initiativeTracker({ id: character.id, change: "ADD" })
      );

      await delay(1000);

      // COMPLETE TASKS AT BEGINNING OF ROUND
      // STATUS EFFECT - Stunned - Target can't take actions
      const isStunned = checkCurrentStatusEffects(character, "Stunned");
      if (isStunned) {
        continue;
      }
      // Check for status effects with duration 0 or and remove
      checkStatusEffect(dispatch, character.id, "REMOVE");
      // Decrement Status Effects
      checkStatusEffect(dispatch, character.id, "DECREMENT", "ROUND");

      if (order[i].identifier === "PLAYER") {
        let action = false;

        while (!action) {
          let playerAction;
          // STATUS EFFECT - Restrained
          if (checkCurrentStatusEffects(player, "Restrained")) {
            playerAction = "GUARD";
          } else {
            playerAction = await getPlayerAction();
          }

          switch (playerAction) {
            case "CAST SPELL":
              {
                // choose a spell from spell list
                const selectedSpell = await select();

                if (selectedSpell === null) continue;

                if (selectedSpell) {
                  // Restart the while loop allowing players to change actions
                  await castSpell(dispatch, selectedSpell);
                }

                console.log("PASSED")                

              }
              break;
            case "ATTACK":
              {
                dispatch(
                  logActions.updateLogs({
                    change: "ADD",
                    text: `Choose a target!`,
                  })
                );

                const target = await getTarget("ENEMIES");
                const hit = rollToHit(dispatch, player, target);

                if (hit) {
                  const damage = calcDamage(player);
                  changeHealth(dispatch, target, "DAMAGE", damage, null);
                } else {
                  // Attack Missed!
                  dispatch(
                    combatActions.updateDamageDisplay({
                      id: target.id,
                      value: "Miss!",
                    })
                  );
                }
              }
              break;
            case "GUARD":
              changeStatusEffect(dispatch, player, "ADD", CONDITIONS.GUARD);

              dispatch(
                logActions.updateLogs({
                  change: "ADD",
                  text: `Guarding!`,
                })
              );
              break;
            case "USE ITEM":
              {
                // choose a spell from spell list
                const selectedItem = await select();
                // Restart the while loop allowing players to change actions
                if (selectedItem === null) continue;
                await activateItem(dispatch, selectedItem);
              }
              break;
          }

          // Exit the while loop
          action = true;
        }
      }

      if (order[i].identifier === "HERO" || order[i].identifier === "ENEMY") {
        character.currentHealth > 0 && console.log("TURN", order[i]);
        order = store.getState().combat.order;
        const enemies = order.some((enemy) => enemy.identifier === "ENEMY");
        if (!enemies) continue;

        await delay(1000);

        let action;

        // STATUS EFFECT - Restrained
        if (checkCurrentStatusEffects(character, "Restrained")) {
          action = "GUARD";
        } else {
          action = checkBehaviorAction(character);
        }

        // console.log("ACTION", action);

        switch (action) {
          case "ATTACK":
            {
              const target = checkBehaviorAttackTarget(character);

              dispatch(
                logActions.updateLogs({
                  change: "ADD",
                  text: `${character.name} attacks ${target.name}!`,
                })
              );

              const hit = rollToHit(dispatch, character, target);
              if (hit) {
                // PASSIVE - Liheth
                checkForPassiveAbility(
                  dispatch,
                  order[i],
                  "DURING_COMBAT",
                  target
                );

                const damage = calcDamage(character);
                // Create a new slice property to show the attack outcome
                changeHealth(dispatch, target, "DAMAGE", damage, null);
              } else {
                // Attack Missed!
                dispatch(
                  combatActions.updateDamageDisplay({
                    id: target.id,
                    value: "Miss!",
                  })
                );
              }
            }
            break;
          case "GUARD":
            // Adds the Guarding condition to the characters active status effects
            changeStatusEffect(dispatch, character, "ADD", CONDITIONS.GUARD);
            break;
          case "ABILITY":
            // Function: checks which ability (A or B), checks focus to find target, dispatches actions to perform ability
            useAbility(dispatch, character);
            break;
        }
      }
      await delay(1000);

      // COMPLETE TASKS AT END OF ROUND
      dispatch(combatActions.initiativeTracker({ change: "REMOVE" }));

      // Reduce the characters cooldowns
      decrementAbilityCooldowns(dispatch, character);
    }
  }

  await delay(1000);

  // Check if combat is over
  if (endCombat(dispatch)) {
    // COMPLETE TASKS AT THE END OF COMBAT
    dispatch(combatActions.initiativeTracker({ change: "REMOVE" }));

    // Check if effect durations are rounds/actions and remove them from player & heroes
    for (let i = 0; i < order.length; i++) {
      if (order[i].identifier === "HERO" || order[i].identifier === "PLAYER")
        checkStatusEffect(dispatch, order[i].id, "END");
    }
    return; // exit the loop
  } else {
    await delay(2000);
    // COMPLETE TASKS AT THE END OF THE ROUND
    combatLoop(dispatch); // continue the loop
  }
}

// =============================================================
//                     PLAYER ACTION SELECTION
// =============================================================

// Used to await which action the player wants to make on their turn
export async function getPlayerAction() {
  return new Promise((resolve) => {
    playerActionResolver = resolve;
  });
}

// Function to set player action in Action component
export function setPlayerAction(action) {
  if (playerActionResolver) {
    playerActionResolver(action);
    playerActionResolver = null;
  }
}

// =============================================================
//                     SELECT SPELL
// =============================================================

// Used to await which spell the player wants to cast
export async function select() {
  return new Promise((resolve) => {
    selectResolver = resolve;
  });
}

// Function to set the selected spell in the Spell component
export function setSelect(choice) {
  if (selectResolver) {
    selectResolver(choice);
    selectResolver = null;
  }
}

// =============================================================
//                    TARGETING
// =============================================================

export async function getTarget(targets) {
  setTargetType(targets);
  return new Promise((resolve) => {
    targetResolver = resolve;
  });
}

export function setTarget(object) {
  if (targetResolver) {
    targetResolver(object);
    targetResolver = null;
  }
}

// =============================================================
//                      ATTACK HANDLING
// =============================================================

export function rollToHit(dispatch, attacker, target) {
  let bonus = attacker.stats.agility.hitChance;
  let defense = target.stats.agility.defense;

  const chanceToHit = roll20(bonus);

  // STATUS EFFECT - Storm Shield
  if (checkCurrentStatusEffects(target, "Storm Sphere")) {
    const castStormShield = statusEffectFunctions["STORM_SPHERE"];
    castStormShield(dispatch, attacker);
  }

  if (chanceToHit > defense) {
    return true;
  } else {
    return false;
  }
}

export function calcDamage(character, spell, spellPower) {
  if (spell) {
    const damage =
      Math.floor(Math.random() * spell.baseDamage) + spellPower + 1;

    if (damage < spell.baseDamage) {
      return spell.baseDamage;
    }

    return damage;
  } else {
    const damage =
      Math.floor(Math.random() * character.stats.strength.attack) + 1;

    if (damage < Math.floor(character.stats.strength.attack / 2)) {
      return Math.floor(character.stats.strength.attack / 2);
    }

    return damage;
  }
}

function roll20(bonus = 0) {
  return Math.floor(Math.random() * 21) + bonus;
}

// =============================================================
//                       END COMBAT
// =============================================================

function endCombat(dispatch) {
  const order = store.getState().combat.order;

  const enemies = [];
  for (let i = 0; i < order.length; i++) {
    if (order[i].identifier === "ENEMY") {
      enemies.push(order[i]);
    }
  }

  if (enemies.length <= 0) {
    openModal(dispatch, "roomSummaryModal");
    return true;
  }

  return false;
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// STARTING COMBAT
export function startCombat(dispatch) {
  const room = store.getState().dungeon;
  const currentOrder = store.getState().combat.order;
  const characters = [...room.contents.enemies, ...currentOrder];
  dispatch(combatActions.setInitiative({ characters }));
  for (let i = 0; i < characters.length; i++) {
    updateStatTotals(dispatch, characters[i].id);

    if (characters[i].identifier === "ENEMY") {
      dispatch(
        combatActions.updateHealth({
          change: "HEAL",
          value: 999,
          id: characters[i].id,
        })
      );
    }
  }
  combatLoop(dispatch);
}
