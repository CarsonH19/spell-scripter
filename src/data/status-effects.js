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
      }
    }
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
  // const id = target.id;

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

  updateStatTotals(dispatch);
}

// import updateStatTotals, { addStatChange, removeStatChange } from "../store/stats-actions";

// export const startStatusEffect = (statusEffect, length) => {
//   if (statusEffect.duration === null && statusEffect.statusDuration === null) {
//     startNewStatusEffect(statusEffect, length);
//   } else if (isDurationExtended(statusEffect, length)) {
//     extendStatusEffectDuration(statusEffect, length);
//   }
// };

// const startNewStatusEffect = (statusEffect, length) => {
//   statusEffect.statusDuration = roomCounter + length;
//   const duration = statusEffect.statusDuration - roomCounter;
//   const roomText = duration > 1 ? "Rooms" : "Room";
//   statusEffect.duration = `Duration: ${duration} ${roomText}`;

//   if (statusEffect.stats) {
//     addStatChange(statusEffect);
//   } else {
//     updateStatTotals();
//   }

//   // if (statusEffect.detail === "CONDITION") {
//   //   writeToLogStatusEffect(LOG_GAINED_CONDITION, "YES", statusEffect);
//   // }

//   setupStatusEffectInterval(statusEffect);
// };

// const isDurationExtended = (statusEffect, length) =>
//   length > statusEffect.statusDuration - roomCounter;

// const extendStatusEffectDuration = (statusEffect, length) => {
//   statusEffect.statusDuration = roomCounter + length;
//   statusEffect.duration = `Duration: ${
//     statusEffect.statusDuration - roomCounter
//   } Rooms`;
// };

// const setupStatusEffectInterval = (statusEffect) => {
//   const intervalId = setInterval(() => {
//     const duration = statusEffect.statusDuration - roomCounter;
//     const roomText = duration > 1 ? "Rooms" : "Room";
//     statusEffect.duration = `Duration: ${duration} ${roomText}`;
//   }, 2000);
// };

// const endStatusEffectInterval = (statusEffect, intervalId) => {
//   statusEffect.duration = null;
//   statusEffect.statusDuration = null;

//   // Checks for different Status Effects
//   if (statusEffect.stats) {
//     removeStatChange(statusEffect);
//   } else {
//     updateStatTotals();
//   }
// };
