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
    // if condition exists & has the stack property, increment the stack
    if ("stack" in statusEffect) {
      // Find status effect stack in current combat order
      const order = store.getState().combat.order;
      const character = order.find((char) => char.id === target.id);
      const currentEffect = character.statusEffects.find(
        (effect) => effect.name === statusEffect.name
      );
      
      // Remove status effect
      dispatch(
        combatActions.updateStatusEffects({
          id: target.id,
          change: "REMOVE",
          statusEffect,
        })
      );

      console.log("CURRENT", currentEffect);

      // Update stack manually in status effect
      let updatedStatusEffect = {
        ...statusEffect,
        stack: currentEffect.stack + 1,
        duration: statusEffect.reset,
        get effect() {
          return [`Agility -${this.stack}`];
        },
        get stats() {
          return {
            agility: {
              agilityChange: -1 * this.stack,
            },
          };
        },
      };

      console.log(updatedStatusEffect);

      // Add updated status effect
      dispatch(
        combatActions.updateStatusEffects({
          id: target.id,
          change: "ADD",
          statusEffect: updatedStatusEffect,
        })
      );

      // If condition already exists and has a reset property, reset its duration
    } else if ("reset" in statusEffect) {
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
export function checkStatusEffect(dispatch, id, check, type) {
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
        if (
          statusEffects[i].duration &&
          statusEffects[i].durationType === type
        ) {
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
