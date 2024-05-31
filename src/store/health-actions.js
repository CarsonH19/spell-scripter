import store from "./index";
import { combatActions } from "./combat-slice";

import loot from "../util/loot";

export function changeHealth(
  dispatch,
  target,
  change,
  value = 0,
  damageType = null
) {
  const id = target.id;

  if (change === "DAMAGE") {
    for (let i = 0; i < target.weaknesses.length; i++) {
      if (target.weaknesses[i] === damageType) {
        value = value * 1.5;
      }
    }

    for (let i = 0; i < target.resistances.length; i++) {
      if (target.resistances[i] === damageType) {
        value = value * 0.5;
      }
    }

    // Only display damage
    dispatch(combatActions.updateDamageDisplay({ id, value }));
  }

  // if (change === "HEAL") {
  // currently not needed
  // }

  dispatch(combatActions.updateHealth({ id, change, value }));
  // updateStatTotals(dispatch, id);
  checkForDeath(dispatch, id);
}

function checkForDeath(dispatch, id) {
  const order = store.getState().combat.order;
  let character = order.find((char) => char.id === id);

  if (character.currentHealth <= 0) {
    // Check defeated enemy for loot & add them to dungeon-slice
    loot(dispatch, character);

    // Removes defeated character 
    setTimeout(() => {
      dispatch(combatActions.removeCharacter({ character }));
    }, 2000);
  }
}
