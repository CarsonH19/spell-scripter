import store from "./index";
import { combatActions } from "./combat-slice";
import { uiActions } from "./ui-slice";

import loot from "../util/loot";
import changeStatusEffect, {
  checkCurrentStatusEffects,
} from "./status-effect-actions";
import CONDITIONS from "../data/conditions";

import { checkSkillPoints } from "../util/spellbook-util";

export function changeHealth(
  dispatch,
  target,
  change,
  value = 0,
  damageType = null
) {
  let id = target.id;

  // ABILITY - Siggurd B - Divine Guardian
  if (checkCurrentStatusEffects(target, "Divine Guardian")) {
    id = "Siggurd";
  }

  // Damage Type Conditions
  if (damageType) {
    let chance = Math.random();
    if (damageType === "FIRE") {
      // SKILL - Smoldering Heart - Increase Burning chance
      const skillPoints = checkSkillPoints("Smoldering Heart");
      for (let i = 0; i < skillPoints; i++) {
        chance += 0.05;
      }

      console.log(chance);
      if (chance > 0.95) {
        changeStatusEffect(dispatch, target, "ADD", CONDITIONS.BURNING);
      }
    }

    if (damageType === "ICE") {
      // SKILL - Frigid Gaze - Increase Chilled chance
      const skillPoints = checkSkillPoints("Frigid Gaze");
      for (let i = 0; i < skillPoints; i++) {
        chance += 0.04;
      }

      if (chance > 0.96) {
        changeStatusEffect(dispatch, target, "ADD", CONDITIONS.CHILLED);
      }
    }

    if (damageType === "LIGHTNING") {
      // SKILL - Charged Touch - Increase Stunned chance
      const skillPoints = checkSkillPoints("Charged Touch");
      for (let i = 0; i < skillPoints; i++) {
        chance += 0.03;
      }

      if (chance > 0.97) {
        changeStatusEffect(dispatch, target, "ADD", CONDITIONS.STUNNED);
      }
    }
  }

  // SKILL - Frozen Solid - Extra damage when Chilled
  if (checkCurrentStatusEffects(target, "Chilled")) {
    const chilled = target.statusEffects.find(
      (effect) => effect.name === "Chilled"
    );
    console.log(value);
    const skillPoints = checkSkillPoints("Frozen Solid");
    let multiplier = 1;

    for (let i = 0; i < chilled.stack; i++) {
      for (let j = 0; j < skillPoints; j++) {
        multiplier += 0.03;
      }
    }

    value = value * multiplier;
    console.log(value);
  }

  // Weaknesses & Resistances
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

  // ABILITY - Liheth B - Undying Flames
  if (
    checkCurrentStatusEffects(target, "Undying Flame") &&
    value > target.currentHealth
  ) {
    const halfMax = target.stats.strength.maxHealth / 2;
    dispatch(
      combatActions.updateHealth({ id, change: "REPLACE", value: halfMax })
    );
    changeStatusEffect(dispatch, target, "REMOVE", { name: "Undying Flame" });
    return;
  }

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
