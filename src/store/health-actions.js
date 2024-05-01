import store from "./index";
import { combatActions } from "./combat-slice";
import updateStatTotals from "./stats-actions";

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
        console.log(`Weakness Found!`);
      }
    }

    for (let i = 0; i < target.resistances.length; i++) {
      if (target.resistances[i] === damageType) {
        value = value * 0.5;
        console.log(`Resistance Found!`);
      }
    }
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
    dispatch(combatActions.removeCharacter({ character }));
    console.log(`${character.name} has died!`);
  }
}
