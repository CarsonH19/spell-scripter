import store from "./index";

import changeHealth from "./health-actions";

// import { playerActions } from "../../store/player-slice";
// import { heroActions } from "../../store/hero-slice";
// import { dungeonActions } from "./dungeon-slice";

let playerActionResolver;
let targetResolver;

export default async function combatLoop(dispatch) {
  // get the initiative order

  // NOTE as battle progresses I may need to get the objects directly from the respected states so that all the data on the objects are up to date. If not, then stat updates may not be maintained throughout combat !!!!
  const order = store.getState().initiative.order;

  // start combat and iterate through each character in the initiative
  for (let i = 0; i < order.length; i++) {
    //  Check if Character health is above 1, else skip it
    // call the respected function to make an attack for the respected turn
    if (order[i].identifier === "PLAYER") {
      // Await player response
      console.log("Choose an action!");
      const playerAction = await getPlayerAction();
      console.log(`Player Chose: ${playerAction}`);

      switch (playerAction) {
        case "ATTACK":
          {
            // choose target
            console.log("Choose a target!");
            const target = await getTarget(); // returns enemy object
            console.log("Target: " + target);
            // roll to hit
            const hit = rollToHit(order[i], target);
            if (hit) {
              const damage = calcDamage(order[i]); // use state player obj?!?
              changeHealth(dispatch, target, "DAMAGE", damage, null);
              console.log(`Damage: ${damage}`)
            } else {
              console.log("Attack missed");
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
      // Handle response
      // dispatch to correct slice
    }

    if (order[i].identifier === "HERO") {
      // Await hero response
      // Handle response
      // dispatch to correct slice
    }

    if (order[i].identifier === "ENEMY") {
      // Await enemy response
      // Handle response
      // dispatch to correct slice
    }
  }

  // check for endCombat() continue until player dies, flees, or all enemies are defeated
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

// // function makeAttack() {

// // }

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



