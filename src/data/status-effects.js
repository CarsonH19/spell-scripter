import { combatActions } from "../store/combat-slice";

import store from "../store";

import updateStatTotals from "../store/stats-actions";

const STATUS_EFFECTS = {
  POISONED: {
    name: "Poisoned",
    detail: "CONDITION",
    image: "",
    description: "You take damage on the start of each of your turns",
    duration: 3,
    stats: {
      strength: {
        strengthChange: -1,
      },
      agility: {
        agilityChange: -2,
      },
    },
  },
  GUARD: {
    name: "Guarding",
    detail: "",
    image: "",
    description: "Defense +50%",
    duration: 2, // Is immediately decremented so it must be set to 2
    stats: {},
  },
};

export default STATUS_EFFECTS;

export function changeStatusEffect(dispatch, target, change, statusEffect) {
  // update target slice
  const order = store.getState().combat.order;
  const index = order.findIndex((char) => char.id === target.id);
  target = order[index];

  // Check if status effect already exists
  if (!checkCurrentStatusEffects(target, statusEffect) && change === "ADD") {
    dispatch(
      combatActions.updateStatusEffects({
        id: target.id,
        change,
        statusEffect,
      })
    );

    console.log(`${target.name} is ${statusEffect.name}!`);
  } else if (
    checkCurrentStatusEffects(target, statusEffect) &&
    change === "ADD"
  ) {
    // If status effect already exists reset the duration
    let reset;
    Object.keys(STATUS_EFFECTS).forEach((effectKey) => {
      const effect = STATUS_EFFECTS[effectKey];
      if (effect.name === statusEffect.name) {
        reset = effect.duration;
      }
    });

    console.log("RESET", reset);

    dispatch(
      combatActions.updateStatusEffectDuration({
        id: target.id,
        name: statusEffect.name,
        change: "RESET",
        reset,
      })
    );

    console.log("Status Effect Target", target);
  }

  updateStatTotals(dispatch, target.id);
  return false;

  // Checks to see if the target already has the status effect
  function checkCurrentStatusEffects(target, statusEffect) {
    if (target.statusEffects.length > 0) {
      const statusIndex = target.statusEffects.findIndex(
        (effect) => effect.name === statusEffect.name
      );
      if (statusIndex !== -1) {
        return true;
      }
    }
  }
}
