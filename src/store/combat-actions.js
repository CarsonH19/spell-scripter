import store from "./index";

import { changeHealth } from "./health-actions";
import castSpell from "../util/cast-spell";
import setTargetType from "../util/targeting";
import CONDITIONS from "../data/conditions";
import changeStatusEffect, {
  checkCurrentStatusEffects,
  callStatusEffect,
  checkStatusEffect,
} from "./status-effect-actions.js";

import { combatActions } from "./combat-slice.js";
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
import checkForDialogue, { getDialogue } from "../util/dialogue-util.js";
import { checkIfAttuned } from "../util/item-functions.js";
import playAudio from "../util/audio-util.js";
import playSoundEffect from "../util/audio-util.js";

let playerActionResolver;
let targetResolver;
let selectResolver;

export default async function combatLoop(dispatch) {
  // Iterate through all characters and call passive abilities before combat
  // NOTE: Passives will be called on each round of combat.
  let order = store.getState().combat.order;
  const dungeon = store.getState().dungeon;
  console.log("DUNGEON", dungeon);

  // START OF THE ROUND
  // Passive Abilities
  // Clear Narrative
  handleCallTiming(dispatch, "START_OF_ROUND");

  // Iterate through the initiative order simulating a round of combat.
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

    let characterCheck = order[i];
    if (!characterCheck) continue;

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

      // START OF THE TURN
      // Check & call status effects with functions on the character's turn
      // Check for status effect decrement or removal
      handleCallTiming(dispatch, "START_OF_TURN", character);

      // STATUS EFFECT - Stunned - Skip target's turn
      if (checkCurrentStatusEffects(character, "Stunned")) continue;

      if (order[i].identifier === "PLAYER") {
        let action = false;

        while (!action) {
          let playerAction;

          // STATUS EFFECT - Restrained
          checkCurrentStatusEffects(player, "Restrained")
            ? (playerAction = "GUARD")
            : (playerAction = await getPlayerAction());

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
                attack(dispatch, character, target);
              }
              break;
            case "GUARD":
              changeStatusEffect(dispatch, player, "ADD", CONDITIONS.GUARD);

              playSoundEffect(false, "guard", "eventShield", 0.6);

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
        checkCurrentStatusEffects(character, "Restrained")
          ? (action = "GUARD")
          : (action = checkBehaviorAction(character));

        switch (action) {
          case "ATTACK":
            {
              const target = checkBehaviorAttackTarget(character);
              attack(dispatch, character, target);
            }
            break;
          case "GUARD":
            // Adds the Guarding condition to the character's active status effects
            changeStatusEffect(dispatch, character, "ADD", CONDITIONS.GUARD);

            playSoundEffect(false, "guard", "eventShield", 0.6);

            dispatch(
              logActions.updateLogs({
                change: "ADD",
                text: `${character.name} guards!`,
              })
            );
            break;
          case "ABILITY":
            // Function: checks which ability (A or B), checks focus to find target, dispatches actions to perform ability
            useAbility(dispatch, character);
            break;
        }
      }

      await delay(1000);

      // END OF TURN
      handleCallTiming(dispatch, "END_OF_TURN", character);
    }
  }

  await delay(1000);

  // Check if combat is over
  const combatEnded = await endCombat(dispatch);

  if (combatEnded) {
    // AFTER COMBAT
    handleCallTiming(dispatch, "AFTER_COMBAT");

    // exit the loop
    return;
  } else {
    await delay(2000);
    handleCallTiming(dispatch, "END_OF_ROUND");

    // continue the loop
    combatLoop(dispatch);
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

  let chanceToHit = roll20(bonus);

  // ITEM - Spirit Veil Cloak
  if (target.id === "Player") {
    chanceToHit -= checkIfAttuned(dispatch, "Spirit Veil Cloak");
  }

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

async function endCombat(dispatch) {
  const order = store.getState().combat.order;

  const enemies = [];
  for (let i = 0; i < order.length; i++) {
    if (order[i].identifier === "ENEMY") {
      enemies.push(order[i]);
    }
  }

  if (enemies.length <= 0) {
    await checkForDialogue(dispatch, "after");
    openModal(dispatch, "roomSummaryModal");
    return true;
  }

  return false;
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// =============================================================
//                       START COMBAT
// =============================================================

export async function startCombat(dispatch) {
  const order = store.getState().combat.order;
  // Check status effects that call functions before combat
  for (let i = 0; i < order.length; i++) {
    callStatusEffect(dispatch, order[i], "BEFORE COMBAT");
  }

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

  await delay(1000);

  dispatch(logActions.updateLogs({ change: "CLEAR" }));
  dispatch(logActions.updateLogs({ change: "PAUSE" }));

  dispatch(
    logActions.updateLogs({
      change: "ADD",
      text: `Encounter!`,
    })
  );

  for (let i = 0; i < room.contents.enemies.length; i++) {
    console.log(...room.contents.enemies[i].audio.spawn);
    playSoundEffect(...room.contents.enemies[i].audio.spawn);
  }

  await delay(4000);

  // Clear Narrative
  dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
  dispatch(logActions.updateLogs({ change: "CLEAR" }));

  combatLoop(dispatch);
}

// =============================================================
//                      HANDLE TIMING
// =============================================================

async function handleCallTiming(dispatch, timing, character) {
  const order = store.getState().combat.order;

  switch (timing) {
    case "START_OF_ROUND":
      {
        // Call all passive abilities that apply "START_OF_ROUND"
        // Passives are called at the start of each round
        for (let i = 0; i < order.length; i++) {
          checkForPassiveAbility(dispatch, order[i], "START_OF_ROUND");
        }

        // Clear Narrative
        dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
        dispatch(logActions.updateLogs({ change: "CLEAR" }));

        // ITEM - Sunstone
        checkIfAttuned(dispatch, "Sunstone");
      }
      break;
    case "START_OF_TURN":
      {
        // Check status effects that call functions at the start of the character's turn
        callStatusEffect(dispatch, character, "START TURN");

        // Check for status effects with duration 0 or and remove
        checkStatusEffect(dispatch, character.id, "REMOVE");

        // Decrement Status Effects
        checkStatusEffect(dispatch, character.id, "DECREMENT", "ROUND");
      }
      break;
    case "END_OF_TURN":
      // Check status effects that call functions at the end of the character's turn
      callStatusEffect(dispatch, character, "END TURN");

      // Reduce the characters cooldowns
      decrementAbilityCooldowns(dispatch, character);
      break;
    case "END_OF_ROUND":
      break;
    case "AFTER_COMBAT":
      // Set isCharacterTurn to null
      dispatch(combatActions.initiativeTracker({ change: "REMOVE" }));

      // Check if effect durations are rounds/actions and remove them from player & heroes
      for (let i = 0; i < order.length; i++) {
        if (
          order[i].identifier === "HERO" ||
          order[i].identifier === "PLAYER"
        ) {
          checkStatusEffect(dispatch, order[i].id, "END");
        }
      }
      break;
  }
}

function attack(dispatch, character, target) {
  const hit = rollToHit(dispatch, character, target);
  // console.log("HIT", hit);

  dispatch(
    logActions.updateLogs({
      change: "ADD",
      text: `${character.name} attacks ${target.name}!`,
    })
  );

  if (hit) {
    // Attack audio
    if (character.audio) playSoundEffect(...character.audio.attack);

    // PASSIVE - Liheth
    checkForPassiveAbility(dispatch, character, "DURING_COMBAT", target);

    let damage = calcDamage(character);

    if (character.id === "Player") {
      // ITEM - Ritual Blade - +3 Attack to humanoid & beasts
      damage += checkIfAttuned(dispatch, "Ritual Blade", target);
      // ITEM - Revenant's Rage
      damage += checkIfAttuned(dispatch, "Revenants Rage");
    }

    if (target.id === "Player") {
      // ITEM - Cursed Mirror
      checkIfAttuned(dispatch, "Cursed Mirror", character, damage);
    }

    // console.log("DAMAGE", damage);

    // Create a new slice property to show the attack outcome
    changeHealth(dispatch, target, "DAMAGE", damage, null);
  } else {
    // Missed audio
    if (character.audio) playSoundEffect(false, "miss", "swordSwingWhoosh");

    // Attack Missed!
    dispatch(
      combatActions.updateDamageDisplay({
        id: target.id,
        value: "Miss!",
      })
    );
  }
}
