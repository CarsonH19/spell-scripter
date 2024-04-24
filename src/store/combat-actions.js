import store from "./index";

import changeHealth from "./health-actions";

// import { playerActions } from "../../store/player-slice";
// import { heroActions } from "../../store/hero-slice";
// import { dungeonActions } from "./dungeon-slice";

let playerActionResolver;
let targetResolver;

export default async function combatLoop(dispatch) {
  const order = store.getState().initiative.order;

  for (let i = 0; i < order.length; i++) {
    if (order[i].identifier === "PLAYER") {
      console.log(`${order[i].name}'s turn!`);

      console.log("Choose an action!");
      const playerAction = await getPlayerAction();

      switch (playerAction) {
        case "ATTACK":
          {
            // choose target
            const target = await getTarget(); // TEMPORARY: returns enemy object
            // roll to hit
            const hit = rollToHit(order[i], target);
            if (hit) {
              const damage = calcDamage(order[i]); // use state player obj?!?
              changeHealth(dispatch, target, "DAMAGE", damage, null);
              console.log(`${order[i].name} Dealt: ${damage} Damage`);
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

      const action = checkBehavior(order[i]);

      switch (action) {
        case "ATTACK":
          {
            // check behavior to choose a target
            const target = randomTarget(order[i]); // returns enemy object
            // roll to hit
            const hit = rollToHit(order[i], target);
            if (hit) {
              const damage = calcDamage(order[i]); // use state player obj?!?
              changeHealth(dispatch, target, "DAMAGE", damage, null);
              console.log(`${order[i].name} Dealt: ${damage} Damage`);
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

  console.log(order);
  await delay(2000);
  console.log("Next round started!");
  combatLoop(dispatch);

  // check for endCombat()
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
