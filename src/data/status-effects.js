import { heroActions } from "../store/hero-slice";
import { playerActions } from "../store/player-slice";
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
};

export default STATUS_EFFECTS;

export function changeStatusEffect(dispatch, target, change, statusEffect) {
  // Check if status effect already exists
  if (!checkCurrentStatusEffects(target, statusEffect) && change === "ADD") {
    console.log("CALLED!");

    switch (target.identifier) {
      case "PLAYER":
        console.log(`You've been ${statusEffect.name}!`);
        dispatch(playerActions.updateStatusEffects({ change, statusEffect }));
        break;

      case "HERO":
        break;

      case "ENEMY":
        break;
    }
  } else {
    // reset status effect
    console.log("STATUS RESET!");
  }

  updateStatTotals(dispatch);

  function checkCurrentStatusEffects(target, statusEffect) {
    console.log(target);
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
