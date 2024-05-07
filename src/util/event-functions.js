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
      const stats = order[i].stats;

      let highestStat = Math.max(stats.strength.totalStrength, stats.agility.totalAgility);
      console.log(highestStat);
      if (order[i].identifier === "PLAYER") {
        if (text === "Strength") {
          highestStat = stats.totalStrength;
        } else if (text === "Agility") {
          highestStat = stats.totalAgility;
        }
      }

      const successChance = roll20(highestStat);

      if (successChance > 10) {
        console.log("SUCCESS", order[i]);
      } else {
        console.log("FAILURE", order[i]);
        changeHealth(dispatch, order[i], "DAMAGE", 15);
      }
    }
  },
};

export default eventFunctions;
