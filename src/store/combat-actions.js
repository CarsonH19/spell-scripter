import store from "./index";

import { changeHealth } from "./health-actions";
import castSpell from "../util/cast-spell";
import setTargetType from "../util/targeting";
import CONDITIONS from "../data/conditions";
import changeStatusEffect, {
  checkStatusEffect,
} from "./status-effect-actions.js";

import { uiActions } from "./ui-slice.js";
import { combatActions } from "./combat-slice.js";

import activateItem from "./item-actions.js";
import { dungeonActions } from "./dungeon-slice.js";

let playerActionResolver;
let targetResolver;
let selectResolver;

export default async function combatLoop(dispatch) {
  let order = store.getState().combat.order;
  console.log(order);

  // Iterate through the initiative order
  for (let i = 0; i < order.length; i++) {
    // get the updated values for player and enemies on each iteration
    let order = store.getState().combat.order;

    // If player dies the game is over
    const playerIndex = order.findIndex((char) => char.id === "Player");
    const player = order[playerIndex];

    const enemies = [];
    for (let i = 0; i < order.length; i++) {
      if (order[i].identifier === "ENEMY") {
        enemies.push(order[i]);
      }
    }

    let character = order[i];

    if (!character) {
      console.log("NO CHARACTER");
      continue;
    }

    // If all enemies, player, or current character is dead the loop will skip the combat logic
    // need to check if the character is alive
    if (
      enemies.length > 0 &&
      player.currentHealth >= 0 &&
      character.currentHealth >= 0
    ) {
      dispatch(
        combatActions.initiativeTracker({ id: character.id, change: "ADD" })
      );

      await delay(1000);
      
      // COMPLETE TASKS AT BEGINNING OF ROUND
      // Decrement existing status effect durations
      checkStatusEffect(dispatch, character.id, "DECREMENT");

      // Check for status effects with duration 0 and remove
      checkStatusEffect(dispatch, character.id, "REMOVE");

      // Check for status effects with functions and call
      checkStatusEffect(dispatch, character.id, "CALL");

      // call passive ability if available.
      // checkForPassiveAbility(character);

      if (order[i].identifier === "PLAYER") {
        console.log(`${order[i].name}'s turn!`);
        let action = false;

        while (!action) {
          const playerAction = await getPlayerAction();

          switch (playerAction) {
            case "CAST SPELL":
              {
                // choose a spell from spell list
                const selectedSpell = await select();

                // Restart the while loop allowing players to change actions
                if (selectedSpell === null) continue;
                await castSpell(dispatch, selectedSpell);
              }
              break;
            case "ATTACK":
              {
                const target = await getTarget("ENEMIES");
                const hit = rollToHit(player, target);

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
              break;
            case "USE ITEM":
              {
                console.log("USE ITEM");
                // choose a spell from spell list
                const selectedItem = await select();
                console.log(selectedItem);
                // Restart the while loop allowing players to change actions
                if (selectedItem === null) continue;
                await activateItem(dispatch, selectedItem);
              }
              break;
            case "FLEE":
              {
                // calculate average speed of enemies + modifier for each enemy
                // roll20 against the enemies
                // on success flee
                // endCombat
                // createNewRoom

              }
              break;
          }

          // Exit the while loop
          action = true;
        }
      }

      if (order[i].identifier === "HERO" || order[i].identifier === "ENEMY") {
        character.currentHealth > 0 && console.log(`${order[i].name}'s turn!`);

        await delay(2000);

        // check behavior to determine action
        const action = checkBehavior(character); // return a destructured object checking the action and target

        switch (action) {
          case "ATTACK":
            {
              // check behavior object to and call the correct target
              // create a singular targeting function with helper functions for each targeting behavior
              const target = randomTarget(character);
              const hit = rollToHit(character, target);
              // console.log("ATTACK", target, hit);
              if (hit) {
                changeStatusEffect(dispatch, target, "ADD", CONDITIONS.BURNING);
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
            changeStatusEffect(dispatch, character, "ADD", CONDITIONS.GUARD);
            break;
          case "ABILITY":
            break;
        }

      }
      await delay(2000);

      // COMPLETE TASKS AT END OF ROUND
      dispatch(combatActions.initiativeTracker({ change: "REMOVE" }));
    }
  }

  // Check if combat is over
  if (endCombat(dispatch)) {
    return; // exit the loop
  } else {
    await delay(2000);
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

export function rollToHit(attacker, target) {
  let bonus = attacker.stats.agility.hitChance;
  let defense = target.stats.agility.defense;

  const chanceToHit = roll20(bonus);

  if (chanceToHit > defense) {
    return true;
  } else {
    return false;
  }
}

// NEED TO INCORPORATE STRENGTH BONUS & SPELL POWER
export function calcDamage(source, spell, spellPower) {
  if (spell) {
    const damage =
      Math.floor(Math.random() * source.baseDamage) + 1 + spellPower;
    return damage;
  } else {
    const damage = Math.floor(Math.random() * source.stats.strength.attack) + 1;
    return damage;
  }
}

function roll20(bonus = 0) {
  return Math.floor(Math.random() * 21) + bonus;
}

// TEMPORARY TARGETING FOR HEROES & ENEMIES
function randomTarget(attacker) {
  const order = store.getState().combat.order;
  // const playerIndex = order.findIndex((char) => char.id === "Player");
  // const player = order[playerIndex];

  let targetGroup = [];
  if (attacker.identifier === "HERO" || attacker.identifier === "PLAYER") {
    for (let i = 0; i < order.length; i++) {
      if (order[i].identifier === "ENEMY") {
        targetGroup.push(order[i]);
      }
    }
    const randomIndex = Math.floor(Math.random() * targetGroup.length);
    return targetGroup[randomIndex];
  }

  if (attacker.identifier === "ENEMY") {
    for (let i = 0; i < order.length; i++) {
      if (order[i].identifier === "HERO" || order[i].identifier === "PLAYER") {
        targetGroup.push(order[i]);
      }
    }

    const randomIndex = Math.floor(Math.random() * targetGroup.length);
    return targetGroup[randomIndex];
  }
}

// =============================================================
//                          ABILITIES
// =============================================================

// call passive ability if available.
// checkForPassiveAbility(character);

// =============================================================
//                           BEHAVIOR
// =============================================================

function checkBehavior(character) {
  switch (character.behavior) {
    case "RANDOM":
      if (character.currentHealth > 30) {
        return "ATTACK";
      } else {
        return "ATTACK"; // later switch to guard
      }
  }
}

function endCombat(dispatch) {
  const order = store.getState().combat.order;

  const playerIndex = order.findIndex((char) => char.id === "Player");
  const player = order[playerIndex];

  const enemies = [];
  for (let i = 0; i < order.length; i++) {
    if (order[i].identifier === "ENEMY") {
      enemies.push(order[i]);
    }
  }

  if (player.currentHealth <= 0) {
    alert("You've died!");
    return true;
  }

  if (enemies.length <= 0) {
    dispatch(uiActions.toggle({ modal: "modalIsVisible" })); // set to true
    dispatch(
      uiActions.toggleModal({ modal: "roomSummaryModal", open: "OPEN" })
    ); // set to true
    return true;
  }

  return false;
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
