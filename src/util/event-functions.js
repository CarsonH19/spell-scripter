import { createNewRoom } from "./dungeon-util";
import { changeHealth } from "../store/health-actions";

import { uiActions } from "../store/ui-slice";

import store from "../store/index";
import { openModal } from "../store/ui-actions";

// Each event will determine what dispatches & narrations to call, as well as when the event is over and the room summary modal should be called

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

    openModal(dispatch, "roomSummaryModal");
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

export default eventFunctions;

function roll20(bonus = 0) {
  return Math.floor(Math.random() * 21) + bonus;
}
