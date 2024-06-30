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
  TRAP: async (dispatch, stat) => {
    const order = store.getState().combat.order;
    const player = order.find((char) => char.id === "Player");
    const dungeon = store.getState().dungeon;
    let difficulty;
    let damage;

    if (dungeon.threat > 50) {
      difficulty = 20;
      damage = 40;
    } else if (dungeon.threat > 40) {
      difficulty = 18;
      damage = 30;
    } else if (dungeon.threat > 30) {
      difficulty = 16;
      damage = 20;
    } else if (dungeon.threat > 20) {
      difficulty = 14;
      damage = 15;
    } else if (dungeon.threat > 10) {
      difficulty = 12;
    } else {
      difficulty = 10;
      damage = 10;
    }

    const success = trapSuccessChance(player, difficulty, stat);

    if (!success) {
      changeHealth(dispatch, player, "DAMAGE", damage);
    }

    console.log("SUCCESS", success);

    await delay(4000);
    openModal(dispatch, "roomSummaryModal");
  },
};

function trapSuccessChance(player, difficulty, stat) {
  let playerChoice;

  if (stat === "(Strength)") {
    playerChoice = player.stats.strength.totalStrength;
  } else if (stat === "(Agility)") {
    playerChoice = player.stats.agility.totalAgility;
  } else if (stat === "(Arcana)") {
    // Add logic if player has the Arcana option
  }

  const successChance = roll20(playerChoice);

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
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
