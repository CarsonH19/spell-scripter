import { combatActions } from "../store/combat-slice";

import store from "../store";

import CONDITIONS from "../data/conditions";
import updateStatTotals from "../store/stats-actions";
import { playerActions } from "../store/player-slice";
import statusEffectFunctions from "../util/status-effect-functions";

export default function changeStatusEffect(
  dispatch,
  target,
  change,
  statusEffect
) {
  // CHECK IF target is valid
  if (!target) {
    return;
  }

  const dashboard = store.getState().ui.dashboardIsVisible;

  if (target.identifier === "PLAYER") {
    let player;
    if (!dashboard) {
      const order = store.getState().combat.order;
      player = order.find((char) => char.id === "Player");
    } else if (dashboard) {
      player = store.getState().player;
    }

    target = player;
  } else {
    const order = store.getState().combat.order;
    const index = order.findIndex((char) => char.id === target.id);
    target = order[index];
  }

  // Check if status effect already exists
  if (
    !checkCurrentStatusEffects(target, statusEffect.name) &&
    change === "ADD"
  ) {
    if (dashboard && target.identifier === "PLAYER") {
      // If the player is on the dashboard the player-slice object is updated
      dispatch(
        playerActions.updateStatusEffects({
          change,
          statusEffect,
        })
      );
    } else {
      // If the player is in a dungeon the combat-slice object is updated
      console.log("New Status Effect", statusEffect);
      console.log(target);
      console.log(change);
      dispatch(
        combatActions.updateStatusEffects({
          id: target.id,
          change,
          statusEffect,
        })
      );
    }
  } else if (
    checkCurrentStatusEffects(target, statusEffect.name) &&
    change === "ADD"
  ) {
    // If condition already exists and has a reset property, reset its duration
    if ("reset" in statusEffect) {
      dispatch(
        combatActions.updateStatusEffectDuration({
          id: target.id,
          name: statusEffect.name,
          change: "RESET",
          reset: statusEffect.reset,
        })
      );
    }
  } else if (change === "REMOVE") {
    // ADD player-slice reducer here
    if (dashboard) {
      dispatch(playerActions.updateStatusEffects({ change, statusEffect }));
    } else {
      dispatch(
        combatActions.updateStatusEffects({
          id: target.id,
          change,
          statusEffect,
        })
      );
    }
  }

  updateStatTotals(dispatch, target.id);
  return false;
}

// Checks to see if the target already has the status effect
export function checkCurrentStatusEffects(target, effectName) {
  if (target.statusEffects.length > 0) {
    const statusIndex = target.statusEffects.findIndex(
      (effect) => effect.name === effectName
    );
    if (statusIndex !== -1) {
      return true;
    }
  }

  return false;
}

// Called within combatLoop to handle status effect changes
export function checkStatusEffect(dispatch, id, check) {
  const order = store.getState().combat.order;
  const index = order.findIndex((char) => char.id === id);
  const statusEffects = order[index].statusEffects;

  console.log("statusEffects", statusEffects);
  switch (check) {
    case "REMOVE": // Check for removal
      for (let i = 0; i < statusEffects.length; i++) {
        if (statusEffects[i].duration <= 0) {
          dispatch(
            combatActions.updateStatusEffects({
              id,
              statusEffect: statusEffects[i],
              change: "REMOVE",
            })
          );
        }
      }

      updateStatTotals(dispatch, id);
      break;

    case "END": // End effects with round/action durations after combat
      for (let i = 0; i < statusEffects.length; i++) {
        if (
          statusEffects[i].durationType === "ROUND" ||
          statusEffects[i].durationType === "ACTION"
        ) {
          dispatch(
            combatActions.updateStatusEffects({
              id,
              statusEffect: statusEffects[i],
              change: "REMOVE",
            })
          );
        }
      }

      updateStatTotals(dispatch, id);
      break;

    case "DECREMENT": // Check for duration decrement
      for (let i = 0; i < statusEffects.length; i++) {
        if (statusEffects[i].duration) {
          dispatch(
            combatActions.updateStatusEffectDuration({
              id,
              name: statusEffects[i].name,
              change: "DECREMENT",
            })
          );
        }
      }
      break;

    case "CALL": // Check for status effect function call
      for (let i = 0; i < statusEffects.length; i++) {
        if (statusEffects[i].function) {
          const statusEffectFunction =
            statusEffectFunctions[statusEffects[i].function];
          if (statusEffectFunction) {
            statusEffectFunction(dispatch, order[index]);
          }
        }
      }
      break;
  }
}

// function toSnakeCase(str) {
//   return str.toUpperCase().replace(/\s+/g, "_");
// }
