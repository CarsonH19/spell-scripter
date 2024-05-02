import { combatActions } from "../store/combat-slice";

import store from "../store";

import CONDITIONS from "../data/conditions";
import updateStatTotals from "../store/stats-actions";
import { playerActions } from "../store/player-slice";
import conditionFunctions from "../util/condition-functions";

export default function changeStatusEffect(
  dispatch,
  target,
  change,
  statusEffect
) {
  // CHECK IF target is valid
  if (!target) {
    console.log("changeStatusEffect", target, change, statusEffect);
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

  console.log("STATUS", target);

  // Check if status effect already exists
  if (!checkCurrentStatusEffects(target, statusEffect) && change === "ADD") {
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
      dispatch(
        combatActions.updateStatusEffects({
          id: target.id,
          change,
          statusEffect,
        })
      );
    }
  } else if (
    checkCurrentStatusEffects(target, statusEffect) &&
    change === "ADD"
  ) {
    // If condition already exists reset its duration
    let reset;
    Object.keys(CONDITIONS).forEach((effectKey) => {
      const effect = CONDITIONS[effectKey];
      if (effect.name === statusEffect.name) {
        reset = effect.duration;
      }
    });

    console.log("STATUS", checkCurrentStatusEffects(target, statusEffect));

    dispatch(
      combatActions.updateStatusEffectDuration({
        id: target.id,
        name: statusEffect.name,
        change: "RESET",
        reset,
      })
    );
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

    return false;
  }
}

// Called within combatLoop
export function checkStatusEffect(dispatch, id, check) {
  const order = store.getState().combat.order;
  const index = order.findIndex((char) => char.id === id);
  const statusEffects = order[index].statusEffects;

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
          const snakeCaseItem = toSnakeCase(statusEffects[i].name);
          const conditionFunction = conditionFunctions[snakeCaseItem];
          if (conditionFunction) {
            conditionFunction(dispatch, order[index]);
          }
        }
      }
      break;
  }
}

function toSnakeCase(str) {
  return str.toUpperCase().replace(/\s+/g, "_");
}
