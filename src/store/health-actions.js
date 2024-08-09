import store from "./index";
import { combatActions } from "./combat-slice";
import { uiActions } from "./ui-slice";
import { dungeonActions } from "./dungeon-slice";

import loot from "../util/loot";
import changeStatusEffect, {
  checkCurrentStatusEffects,
} from "./status-effect-actions";
import CONDITIONS from "../data/conditions";

import { checkSkillPoints } from "../util/spellbook-util";
import statusEffectFunctions from "../util/status-effect-functions";
import progressActiveQuests from "../util/quest-util";
import { checkIfAttuned } from "../util/item-functions";
import updateStatTotals from "./stats-actions";
import playSoundEffect from "../util/audio-util";

export async function changeHealth(
  dispatch,
  target,
  change,
  value = 0,
  damageType = null,
  display
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
    const skillPoints = checkSkillPoints("Frozen Solid");
    let multiplier = 1;

    for (let i = 0; i < chilled.stack; i++) {
      for (let j = 0; j < skillPoints; j++) {
        multiplier += 0.03;
      }
    }

    value = value * multiplier;
  }

  if (change === "DAMAGE") {
    // Weaknesses
    for (let i = 0; i < target.weaknesses.length; i++) {
      if (target.weaknesses[i] === damageType) {
        value = value * 1.5;
      }
    }

    // Resistances
    for (let i = 0; i < target.resistances.length; i++) {
      if (target.resistances[i] === damageType) {
        value = value * 0.5;
      }
    }

    // SKILL - Arcane Shield - Remove temp. HP
    const arcaneShield = checkSkillPoints("Arcane Shield");
    if (arcaneShield && target.id === "Player") {
      const arcaneShieldFunction = statusEffectFunctions["ARCANE_SHIELD"];
      arcaneShieldFunction(dispatch, null, target, "REMOVE", value);
      return;
    }
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

  // SPELL - Death Ward
  if (
    checkCurrentStatusEffects(target, "Death Ward") &&
    value > target.currentHealth
  ) {
    dispatch(combatActions.updateHealth({ id, change: "REPLACE", value: 1 }));
    changeStatusEffect(dispatch, target, "REMOVE", { name: "Death Ward" });
    return;
  }

  // SPELL - Barrier & Shell
  if (
    checkCurrentStatusEffects(target, "Barrier") ||
    checkCurrentStatusEffects(target, "Shell")
  ) {
    value = value * 0.5;
    changeStatusEffect(dispatch, target, "REMOVE", { name: "Barrier" });
  }

  // SPELL - Invulnerability
  if (checkCurrentStatusEffects(target, "Invulnerability")) {
    value = value * 0;
  }

  // ITEM - Wraithbane
  // Check for the Incorporeal condition
  if (
    checkCurrentStatusEffects(target, "Incorporeal") &&
    !checkIfAttuned(dispatch, "Wraithbane") &&
    damageType === null &&
    change === "DAMAGE"
  ) {
    value = value / 2;
  }

  value = Math.round(value);

  // Change damageType to lower case to style the damage/health
  if (damageType) {
    const lowercase = damageType.toLowerCase();
    console.log(lowercase);

    dispatch(
      combatActions.updateDamageDisplay({
        id,
        content: { item: value, style: `${lowercase}-damage` },
      })
    );
  }

  // Standard damage number style
  if (!damageType) {
    dispatch(
      combatActions.updateDamageDisplay({
        id,
        content: { item: value, style: "damage" },
      })
    );
  }

  dispatch(combatActions.updateHealth({ id, change, value }));
  updateStatTotals(dispatch, target.id);
  await checkForDeath(dispatch, id);
}

// NOTE: Use this function to remove/end passive effects if a character is defeated
export async function checkForDeath(dispatch, id) {
  const order = store.getState().combat.order;
  // const ui = store.getState().ui;

  let character = order.find((char) => char.id === id);

  // Check for player death
  if (character.currentHealth <= 0 && character.id === "Player") {
    dispatch(
      combatActions.updateHealth({
        id: character.id,
        change: "HEAL",
        value: 999,
      })
    );
    dispatch(
      uiActions.changeUi({ element: "continueIsVisible", visible: false })
    );
    dispatch(
      uiActions.changeUi({ element: "dashboardIsVisible", visible: true })
    );
    dispatch(
      uiActions.changeUi({ element: "gameWindowIsVisible", visible: true })
    );
  }

  // Only Enemies
  if (character.currentHealth <= 0 && character.identifier === "ENEMY") {
    // Check for quest progression from defeating foes
    progressActiveQuests(dispatch, "SLAY");

    // Check defeated enemy for loot & add them to dungeon-slice
    loot(dispatch, character);

    // ITEM - Bloodstone
    checkIfAttuned(dispatch, "Bloodstone", character);
  }

  // Enemies & Heroes
  if (character.currentHealth <= 0 && character.identifier !== "PLAYER") {
    // Death Audio
    if (character.audio) playSoundEffect(...character.audio.death);
    // Check if enemy should be added to dungeon-slice for roomSummaryModal "Enemies Defeated"
    if (character.identifier === "ENEMY") {
      const dungeonEnemies = store.getState().dungeon.contents.enemies;
      const isEnemyInDungeonSlice = dungeonEnemies.find(
        (char) => char.id === character.id
      );
      if (!isEnemyInDungeonSlice) {
        console.log("ENEMY ADDED TO DUNGEON SLICE", character);
        dispatch(
          dungeonActions.addEnemy({
            change: "ADD",
            enemy: character,
          })
        );
      }
    }
  }
}

// // Check which status effects should be displayed when they are added
// function checkForDamageDisplay(dispatch, target, statusEffect) {
//   let updateDispatch;
//   let styledItem;

//   if (
//     statusEffect.name === "Burned" ||
//     statusEffect.name === "Chilled" ||
//     statusEffect.name === "Stunned" ||
//     statusEffect.name === "Poisoned" ||
//     statusEffect.name === "Diseased" ||
//     statusEffect.name === "Haunted" ||
//     statusEffect.name === "Cursed" ||
//     statusEffect.name === "Withered" ||
//     statusEffect.name === "Restrained"
//   ) {
//     updateDispatch = true;
//   }

//   if (updateDispatch) {
//     styledItem = statusEffect.name.toLowerCase();
//     dispatch(
//       combatActions.updateDamageDisplay({
//         id: target.id,
//         content: { item: statusEffect.name, style: styledItem },
//       })
//     );
//   }
// }
