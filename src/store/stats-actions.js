// ===============================
//            STATS
// ===============================

// let attunedItems = [];

// These are now handled in state
// export let statChanges = [];

// export function addStatChange(object) {
//   statChanges.push(object);
//   updateStatTotals();
// }

// export function removeStatChange(object) {
//   const index = statChanges.indexOf(object);
//   statChanges.splice(index, 1);
//   updateStatTotals();
// }

import store from "./index";
import { combatActions } from "./combat-slice";

export default function updateStatTotals(dispatch, id) {
  const findCharacterById = (id) => {
    const characters = store.getState().combat.order;
    return characters.find((char) => char.id === id);
  };

  const character = findCharacterById(id);

  let totalStrength = character.stats.baseStrength;
  let maxHealth = 0;
  let attack = 0;

  let totalAgility = character.stats.baseAgility;
  let defense = 0;
  let speed = 0;
  let hitChance = 0;

  let totalArcana = character.stats.baseArcana;
  let maxMana = 0;
  let spellPower = 0;

  // Misc. Variables
  let guard = null;

  // Adding stat changes from Items & Status Effects
  if (character.statusEffects.length > 0) {
    for (let i = 0; i < character.statusEffects.length; i++) {
      const item = character.statusEffects[i];
      // Strength
      if (item.stats.strength) {
        totalStrength += item.stats.strength.strengthChange || 0;
        maxHealth += item.stats.strength.maxHealth || 0;
        attack += item.stats.strength.attack || 0;
      }

      // Agility
      if (item.stats.agility) {
        totalAgility += item.stats.agility.agilityChange || 0;
        defense += item.stats.agility.defense || 0;
        speed += item.stats.agility.speed || 0;
        hitChance += item.stats.agility.hitChance || 0;
      }

      // Arcana
      if (item.stats.arcana) {
        totalArcana += item.stats.arcana.arcanaChange || 0;
        maxMana += item.stats.arcana.maxMana || 0;
        spellPower += item.stats.arcana.spellPower || 0;
      }

      if (character.statusEffects[i].name === "Guarding") {
        guard = "GUARDING";
      }
    }
  }

  // Strength
  if (totalStrength < 0) totalStrength = 0;

  maxHealth += calculateMaxHealth(character, totalStrength);
  attack += calculateAttackBonus(character, totalStrength);

  // Agility
  if (totalAgility < 0) totalAgility = 0;

  defense += calculateDefense(guard, totalAgility);
  speed += calculateSpeed(totalAgility);
  hitChance += calculateHitChance(totalAgility);

  // Arcana
  if (totalArcana < 0) totalArcana = 0;
  maxMana += calculateMaxMana(character, totalArcana);
  spellPower += calculateSpellPower(character, totalArcana);

  dispatch(
    combatActions.updateStats({
      id: character.id,
      totalStrength,
      maxHealth,
      attack,
      totalAgility,
      defense,
      speed,
      hitChance,
      totalArcana,
      maxMana,
      spellPower,
    })
  );

  // =============================================================
  //                     HELPER FUNCTIONS
  // =============================================================

  // ===============================
  //           STRENGTH => HP Bonus + 10 / Melee Attack +2
  // ===============================

  function calculateMaxHealth(character, totalStrength) {
    let baseHealth = 10 * character.level + 100;
    let strengthBonusHealth = totalStrength * 10;
    let maxHealth = baseHealth + strengthBonusHealth;

    // Checks for Diseased Condition
    // if (DISEASED.duration !== null) {
    //   playerMaxHealth = Math.round(playerMaxHealth * 0.8);
    // }

    // Sets Max Health at the Start
    // if (currentRoom === dungeonEntrance) {
    //   player.currentHealth = playerMaxHealth;
    // }

    // Determines health bar length based off max HP
    // playerDisplay.style.width = `${Math.round(playerMaxHealth / 10) + 20}vw`;
    return maxHealth;
  }

  function calculateAttackBonus(character, totalStrength) {
    let baseAttack = character.level * 2 + 8;
    let strengthBonusAttack = totalStrength * 2;
    let totalAttack = baseAttack + strengthBonusAttack;

    return totalAttack;
  }

  // ===============================
  //           Agility => Hit Chance / Speed (Initiative/Flee Chance) / Defense
  // ===============================

  function calculateHitChance(totalAgility) {
    // +1 per agility
    const hitChance = totalAgility;

    return hitChance;
  }

  function calculateDefense(guard, totalAgility) {
    let defense = 10 + totalAgility;

    // Guarding (+50% defense)
    if (guard) {
      defense = Math.round(defense * 1.5);
      console.log(defense);
    }
    return defense;
  }

  function calculateSpeed(totalAgility) {
    const speed = 10 + totalAgility;

    return speed;
  }

  // ===============================
  //            ARCANA => Spell Power +2 / Max Mana
  // ===============================

  function calculateMaxMana(character, totalArcana) {
    let baseMana = 5 * character.level + 50;
    let arcanaBonusMana = totalArcana * 10;
    let maxMana = baseMana + arcanaBonusMana;

    return maxMana;
  }

  function calculateSpellPower(character, totalArcana) {
    let basePower = character.level * 2 + 6;
    let arcanaBonusPower = totalArcana * 2;
    let totalSpellPower = basePower + arcanaBonusPower;

    return totalSpellPower;
  }
}
