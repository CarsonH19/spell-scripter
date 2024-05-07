import { createNewRoom } from "./dungeon-util";
import { changeHealth } from "../store/health-actions";

import store from "../store/index";

function roll20(bonus = 0) {
  return Math.floor(Math.random() * 21) + bonus;
}

const eventFunctions = {
  DUNGEON_ENTRANCE_ENTER: (dispatch) => {
    createNewRoom(dispatch);
  },
  SPIKE_WALLS: (dispatch, text) => {
    const order = store.getState().combat.order;

    for (let i = 0; i < order.length; i++) {
      let success;

      if (order[i].identifier === "PLAYER" && text === "Strength") {
        // Use players choice stat
        success = trapSuccessChance(order[i], 12, "STRENGTH");
      } else if (order[i].identifier === "PLAYER" && text === "Agility") {
        success = trapSuccessChance(order[i], 12, "AGILITY");
      } else {
        // Heroes choose their highest stat
        success = trapSuccessChance(order[i], 12);
      }

      if (!success) {
        changeHealth(dispatch, order[i], "DAMAGE", 15);
      }

      console.log("SUCCESS", success);
    }
  },
};

function trapSuccessChance(character, difficulty, stat) {
  const stats = character.stats;
  let highestStat;

  if (stat && stat === "STRENGTH") {
    highestStat = stats.strength.totalStrength;
  } else if (stat && stat === "AGILITY") {
    highestStat = stats.agility.totalAgility;
  } else {
    Math.max(stats.strength.totalStrength, stats.agility.totalAgility);
  }

  const successChance = roll20(highestStat);

  if (successChance > difficulty) {
    return true;
  } else {
    return false;
  }
}

// SPIKE_WALLS_STRENGTH: (dispatch, text) => {
//   const order = store.getState().combat.order;

//   for (let i = 0; i < order.length; i++) {
//     const stats = order[i].stats;

//     let highestStat = Math.max(stats.strength.totalStrength, stats.agility.totalAgility);
//     console.log(highestStat);
//     if (order[i].identifier === "PLAYER") {
//       if (text === "Strength") {
//         highestStat = stats.totalStrength;
//       } else if (text === "Agility") {
//         highestStat = stats.totalAgility;
//       }
//     }

//     const successChance = roll20(highestStat);

//     if (successChance > 10) {
//       console.log("SUCCESS", order[i]);
//     } else {
//       console.log("FAILURE", order[i]);
//       changeHealth(dispatch, order[i], "DAMAGE", 15);
//     }
//   }
// },

export default eventFunctions;
