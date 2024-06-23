import store from "./index";
import { combatActions } from "./combat-slice";
import { uiActions } from "./ui-slice";

import loot from "../util/loot";
import { checkCurrentStatusEffects } from "./status-effect-actions";

export function changeHealth(
  dispatch,
  target,
  change,
  value = 0,
  damageType = null
) {
  let id = target.id;

  // ABILITY - Siggurd B
  if (checkCurrentStatusEffects(target, "Divine Guardian")) {
    id = "Siggurd" ;
  }

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
  checkForDeath(dispatch, id);
}


// NOTE: Use this function to remove/end passive effects if a character is defeated
function checkForDeath(dispatch, id) {
  const order = store.getState().combat.order;
  const ui = store.getState().ui;

  let character = order.find((char) => char.id === id);

  // Check for player death
  if (character.currentHealth <= 0 && character.identifier === "PLAYER") {
    dispatch(
      combatActions.updateHealth({
        id: character.id,
        change: "HEAL",
        value: 999,
      })
    );

    if (ui.continueIsVisible) {
      dispatch(uiActions.toggle({ modal: "continueIsVisible" }));
    }

    dispatch(uiActions.toggle({ modal: "dashboardIsVisible" })); // true
    dispatch(uiActions.toggle({ modal: "gameWindowIsVisible" })); // false
  }

  if (character.currentHealth <= 0 && character.identifier === "ENEMY") {
    // Check defeated enemy for loot & add them to dungeon-slice
    console.log("LOOT IS CALLED");
    loot(dispatch, character);
  }

  if (character.currentHealth <= 0 && character.identifier !== "PLAYER") {
    // Removes defeated character
    setTimeout(() => {
      dispatch(combatActions.removeCharacter({ character }));
    }, 2000);
  }
}
