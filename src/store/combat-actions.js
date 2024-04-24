import store from "./index";

import { changeHealth, checkForEnemyDeath } from "./health-actions";

let playerActionResolver;
let targetResolver;

export default async function combatLoop(dispatch) {
  const order = store.getState().initiative.order;

  for (let i = 0; i < order.length; i++) {
    if (order[i].identifier === "PLAYER") {
      console.log(`${order[i].name}'s turn!`);

      const playerAction = await getPlayerAction();

      switch (playerAction) {
        case "ATTACK":
          {
            const target = await getTarget(); // TEMPORARY: returns enemy object
            const hit = rollToHit(order[i], target);

            if (hit) {
              const damage = calcDamage(order[i]); // use state player obj?!?
              changeHealth(dispatch, target, "DAMAGE", damage, null);
              console.log(`${order[i].name} attacked ${target.name}`);
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
      console.log(`${order[i].name}'s turn!`);

      // check behavior to determine action
      const action = checkBehavior(order[i]);

      switch (action) {
        case "ATTACK":
          {
            // check behavior to choose a target
            const target = randomTarget(order[i]); // returns enemy object

            const hit = rollToHit(order[i], target);
            if (hit) {
              const damage = calcDamage(order[i]); // use state player obj?!?
              changeHealth(dispatch, target, "DAMAGE", damage, null);
              console.log(`${order[i].name} attacked ${target.name}`);
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

    // Check if combat is over
    if (endCombat()) {
      return; // exit the loop
    } else {
      await delay(2000);
      console.log("Next round started!");
      combatLoop(dispatch); // continue the loop
    }
  }
}

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

export async function getTarget() {
  return new Promise((resolve) => {
    targetResolver = resolve;
  });
}

export function setTarget(id) {
  if (targetResolver) {
    targetResolver(id);
    targetResolver = null;
  }
}

function calcDamage(character) {
  const damage = Math.floor(Math.random() * character.attack) + 1;
  return damage;
}

function rollToHit(attacker, target) {
  const chanceToHit = roll20(attacker.agility); // NOTE: may need to update agility with chanceToHit in the future.
  if (chanceToHit > target.defense) {
    return true;
  } else {
    return false;
  }
}

function roll20(bonus = 0) {
  return Math.floor(Math.random() * 21) + bonus;
}

function checkBehavior(character) {
  // character is the initiative obj which need to be switched to the objects within the heroes/enemies state arrays to check stats
  let characters;

  if (character.identifier === "HERO") {
    characters = store.getState().hero.party;
  } else {
    characters = store.getState().dungeon.contents.enemies;
  }

  const findCharacterById = (array, id) => {
    return array.find((char) => char.id === id);
  };

  const updatedCharacter = findCharacterById(characters, character.id);
  switch (updatedCharacter.behavior) {
    case "RANDOM":
      if (updatedCharacter.currentHealth > 30) {
        return "ATTACK";
      } else {
        return "ATTACK"; // later switch to guard
      }
  }
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// TEMP
function randomTarget(attacker) {
  let array;
  if (attacker.identifier === "HERO") {
    array = store.getState().dungeon.contents.enemies;
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  if (attacker.identifier === "ENEMY") {
    array = store.getState().hero.party;
    let player = Math.floor(Math.random() * array.length + 1);

    if (player === array.length) {
      return store.getState().player;
    }

    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
}

function endCombat() {
  const player = store.getState().player;
  const enemies = store.getState().dungeon.contents.enemies;

  console.log(enemies.length);

  if (player.currentHealth <= 0) {
    alert("You've died!");
    return true;
  }

  if (enemies.length === 0) {
    console.log("cleared");
    alert("Room Cleared!");
    return true;
  }

  return false;
}
