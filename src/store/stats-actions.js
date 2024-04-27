import store from ".";
import { playerActions } from "./player-slice";

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

export default function updateStatTotals(dispatch) {
  const player = store.getState().player;

  let totalStrength = player.stats.baseStrength;
  let totalAgility = player.stats.baseAgility;
  let totalArcana = player.stats.baseArcana;

  // Strength
  if (totalStrength < 0) totalStrength = 0;

  let maxHealth = calculateMaxHealth();
  let attack = calculateAttackBonus();

  // Agility
  if (totalAgility < 0) totalAgility = 0;

  let defense = calculateDefense();
  let speed = calculateSpeed();
  let hitChance = calculateHitChance();

  // Arcana
  if (totalArcana < 0) totalArcana = 0;
  let maxMana = calculateMaxMana();
  let spellPower = calculateSpellPower();


  // Adding stat changes from Items & Status Effects
  for (const item of player.statusEffects) {
    // Strength
    if (item.stats.strength) {
      totalStrength += item.stats.strength.strengthChange || 0;
      maxHealth += item.stats.strength.maxHealth || 0;
      attack += item.stats.strength.attack || 0;
    }

    // Agility
    if (item.stats.agility) {
      totalAgility += item.stats.agility.agilityChange || 0;
      totalAgility += item.stats.agility.defense || 0;
      totalAgility += item.stats.agility.speed || 0;
      totalAgility += item.stats.agility.hitChance || 0;

    }

    // Arcana
    if (item.stats.arcana) {
      totalArcana += item.stats.arcana.arcanaChange || 0;
      totalArcana += item.stats.arcana.maxMana || 0;
      totalArcana += item.stats.arcana.spellPower || 0;
    }
  }

  dispatch(
    playerActions.updateStats({
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

  function calculateMaxHealth() {
    let baseHealth = 10 * player.level + 100;
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
    console.log(`maxHealth: ${maxHealth}`);
    return maxHealth;
  }

  function calculateAttackBonus() {
    let baseAttack = player.level * 2 + 8;
    let strengthBonusAttack = totalStrength * 2;
    let totalAttack = baseAttack + strengthBonusAttack;

    console.log(`totalAttack: ${totalAttack}`);
    return totalAttack;
  }

  // ===============================
  //           Agility => Hit Chance / Speed (Initiative/Flee Chance) / Defense
  // ===============================

  function calculateHitChance() {
    // +1 per agility
    const hitChance = totalAgility;

    console.log(`hitChance: ${hitChance}`);
    return hitChance;
  }

  function calculateDefense() {
    const defense = 10 + totalAgility;

    console.log(`defense: ${defense}`);
    return defense;
  }

  function calculateSpeed() {
    const speed = 10 + totalAgility;

    console.log(`speed: ${speed}`);
    return speed;
  }

  // ===============================
  //            ARCANA => Spell Power +2 / Max Mana
  // ===============================

  function calculateMaxMana() {
    let baseMana = 5 * player.level + 50;
    let arcanaBonusMana = totalArcana * 10;
    let maxMana = baseMana + arcanaBonusMana;

    console.log(`maxMana: ${maxMana}`);
    return maxMana;
  }

  function calculateSpellPower() {
    let basePower = player.level * 2 + 6;
    let arcanaBonusPower = totalArcana * 2;
    let totalSpellPower = basePower + arcanaBonusPower;

    console.log(`spellPower: ${totalSpellPower}`);
    return totalSpellPower;
  }

  console.log(totalStrength);
  console.log(totalAgility);
  console.log(totalArcana);

}
