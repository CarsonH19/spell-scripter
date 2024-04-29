import store from "./index";

import { changeHealth } from "./health-actions";
import castSpell from "../util/cast-spell";

import setTargetType from "../util/targeting";
import STATUS_EFFECTS, { changeStatusEffect } from "../data/status-effects";

let playerActionResolver;
let targetResolver;
let spellResolver;

export default async function combatLoop(dispatch) {
  const order = store.getState().combat.order;
  console.log(order);

  // Iterate through the initiative order
  for (let i = 0; i < order.length; i++) {
    // get the updated values for player and enemies on each iteration
    const order = store.getState().combat.order;

    const playerIndex = order.findIndex((char) => char.id === "Player");
    const player = order[playerIndex];

    const enemies = [];
    for (let i = 0; i < order.length; i++) {
      if (order[i].identifier === "ENEMY") {
        enemies.push(order[i]);
      }
    }

    const character = order[i];

    // If all enemies, player, or current character is dead the loop will skip the combat logic
    // need to check if the character is alive
    if (
      enemies.length > 0 &&
      player.currentHealth >= 0 &&
      character.currentHealth >= 0
    ) {
      if (order[i].identifier === "PLAYER") {
        console.log(`${order[i].name}'s turn!`);

        const playerAction = await getPlayerAction();

        switch (playerAction) {
          case "CAST SPELL":
            {
              // choose a spell from spell list
              const selectedSpell = await selectSpell();
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
              }
            }
            break;
          case "GUARD":
            break;
          case "ITEM":
            break;
          case "FLEE":
            break;
        }
      }

      if (order[i].identifier === "HERO" || order[i].identifier === "ENEMY") {
        character.currentHealth > 0 && console.log(`${order[i].name}'s turn!`);

        // check behavior to determine action
        const action = checkBehavior(character);

        switch (action) {
          case "ATTACK":
            {
              // check behavior to choose a target
              const target = randomTarget(character);
              const hit = rollToHit(character, target);
              console.log("ATTACK", target, hit);
              if (hit) {
                const damage = calcDamage(character); // use state player obj?!?
                changeHealth(dispatch, target, "DAMAGE", damage, null);

                // Testing Status Effects
                changeStatusEffect(
                  dispatch,
                  target,
                  "ADD",
                  STATUS_EFFECTS.POISONED
                );
              }
            }
            break;
          case "GUARD":
            break;
          case "ABILITY":
            break;
        }
      }

      await delay(2000);
    }
  }

  // Check if combat is over
  if (endCombat()) {
    return; // exit the loop
  } else {
    await delay(2000);
    console.log("Next round started!");
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
export async function selectSpell() {
  return new Promise((resolve) => {
    spellResolver = resolve;
  });
}

// Function to set the selected spell in the Spell component
export function setSpell(spell) {
  if (spellResolver) {
    spellResolver(spell);
    spellResolver = null;
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
export function calcDamage(source, spell) {
  if (spell) {
    const damage = Math.floor(Math.random() * source.baseDamage) + 1;
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
//                INITIATIVE OBJECT => SLICE OBJECT
// =============================================================

// function findCharacterObject(character) {
//   // character is the initiative obj which need to be switched to the objects within the heroes/enemies state arrays to check stats

//   if (character.identifier !== "PLAYER") {
//     let characters;

//     if (character.identifier === "HERO") {
//       characters = store.getState().hero.party;
//     } else if (character.identifier === "ENEMY") {
//       characters = store.getState().dungeon.contents.enemies;
//     }

//     const findCharacterById = (array, character) => {
//       const foundCharacter = array.find((char) => char.id === character.id);
//       // If the character is dead it won't appear in the initiative-slice array. So a new object is returned with zero health signaling the character died and skipping its turn.
//       return foundCharacter !== undefined
//         ? foundCharacter
//         : { name: character.name, currentHealth: 0 };
//     };

//     const updatedCharacter = findCharacterById(characters, character);
//     return updatedCharacter;
//   } else {
//     return store.getState().player;
//   }
// }

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

function endCombat() {
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
    alert("Room Cleared!");
    return true;
  }

  return false;
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
