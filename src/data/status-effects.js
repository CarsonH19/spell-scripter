import { combatActions } from "../store/combat-slice";

import updateStatTotals from "../store/stats-actions";

const STATUS_EFFECTS = {
  POISONED: {
    name: "Poisoned",
    detail: "CONDITION",
    image: "",
    status: "You take damage on the start of each of your turns",
    duration: null,
    stats: {
      strength: {
        strengthChange: -1,
      },
      agility: {
        agilityChange: -2,
      },
    },
    // function: () => {
    //   // // ITEM: Toxinweave Mask - Poison Immunity
    //   // const immune = isItemAttuned(TOXINWEAVE_MASK, null);
    //   // if (!immune && HEXBANE_BREW.statusDuration <= 0) {
    //   //   startStatusEffect(POISONED, length);
    //   // }
    // },
  },
  GUARD: {
    name: "Guarding",
    detail: "",
    image: "",
    status: "Defense +50%",
    duration: null,
    stats: {
      agility: {

      }
    },
    // function: () => {
    //   // // ITEM: Toxinweave Mask - Poison Immunity
    //   // const immune = isItemAttuned(TOXINWEAVE_MASK, null);
    //   // if (!immune && HEXBANE_BREW.statusDuration <= 0) {
    //   //   startStatusEffect(POISONED, length);
    //   // }
    // },
  },
};

export default STATUS_EFFECTS;

export function changeStatusEffect(dispatch, target, change, statusEffect) {
  // Check if status effect already exists
  if (!checkCurrentStatusEffects(target, statusEffect) && change === "ADD") {
    dispatch(
      combatActions.updateStatusEffects({
        id: target.id,
        change,
        statusEffect,
      })
    );

    console.log(`${target.name} has been ${statusEffect.name}!`);
  } else {
    // Reset duration / intensity of status effect
  }

  // Create "REMOVE" logic

  // TEMP TEST CODE
  // console.log("Stats Updated", target);
  // Objects passed through are not state updated objects!
  // If state is updated the objects passed as arguments are not updated!
  // To get the updated object you must pull from state again!
  updateStatTotals(dispatch, target.id);

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

  return false;
}
