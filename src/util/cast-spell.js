import store from "../store";
import { getTarget, rollToHit, calcDamage } from "../store/combat-actions";

import { combatActions } from "../store/combat-slice";
import { logActions } from "../store/log-slice";
import { uiActions } from "../store/ui-slice";

import { changeHealth } from "../store/health-actions";
import changeStatusEffect from "../store/status-effect-actions";

import { openQuickTimeEvent } from "../store/ui-actions";

let quickTimeEventResolver;

export default async function castSpell(dispatch, spell) {
  // Subtract spell's mana cost from player's current mana
  dispatch(
    combatActions.updateMana({ value: spell.manaCost, change: "REMOVE" })
  );

  openQuickTimeEvent(dispatch);
  const getQuickTimeEventResult = await getResult(); // true/false

  dispatch(uiActions.toggle({ modal: "modalIsVisible" })); // set to false

  if (!getQuickTimeEventResult) {
    return;
  }

  const order = store.getState().combat.order;

  const playerIndex = order.findIndex((char) => char.id === "Player");
  const player = order[playerIndex];

  let target;

  // check for spell target type & select a target if applicable
  switch (spell.spellTarget) {
    case "ENEMY": // single enemy targeted
      {
        if (spell.spellType === "HIT") {
          dispatch(
            logActions.updateLogs({
              change: "ADD",
              text: `Choose an enemy!`,
            })
          );

          target = await getTarget("ENEMIES");

          let damage = calcDamage(
            player,
            spell,
            player.stats.arcana.spellPower
          );

          changeHealth(dispatch, target, "DAMAGE", damage, null);
        }
        // spell.spellType === "SAVE"
      }
      break;
    case "ALLY": // single ally targeted
      {
        dispatch(
          logActions.updateLogs({
            change: "ADD",
            text: `Choose a hero!`,
          })
        );

        if (spell.spellType === "HEAL") {
          target = await getTarget("ALLIES");
          // console.log("Target: ", target);
          let healValue = spell.healValue;
          healValue += player.stats.arcana.spellPower;
          changeHealth(dispatch, target, "HEAL", healValue, null);
        }

        if (spell.spellType === "BUFF") {
          target = await getTarget("ALLIES");
          // console.log("Target: ", target);
          const statusEffect = spell.statusEffect;
          changeStatusEffect(dispatch, target, "ADD", statusEffect);
        }
      }
      break;
    case "ENEMIES": // all enemies targeted
      break;
    case "ALLIES": // all allies including the player targeted
      break;
    case "ALL": // all characters in initiative are targeted
      break;
  }
}

// choose a target
// check hit or save
// // roll20
// if spell hits call spell function / pass target as an argument
// dispatch changeHealth/changeStatus

// =============================================================
//                     QTE SUCCESS / FAILED
// =============================================================

// Used to await the result of the QTE
export async function getResult() {
  return new Promise((resolve) => {
    quickTimeEventResolver = resolve;
  });
}

// Function to set the QTE result in the QTE component
export function setResult(result) {
  if (quickTimeEventResolver) {
    quickTimeEventResolver(result);
    quickTimeEventResolver = null;
  }
}
