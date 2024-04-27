import store from ".";
import { playerActions } from "./player-slice";

// ===============================
//            STATS
// ===============================

// let attunedItems = [];

// let statChanges = [];

// function addStatChange(object) {
//   statChanges.push(object);
//   updateStatTotals();
// }

// function removeStatChange(object) {
//   const index = statChanges.indexOf(object);
//   statChanges.splice(index, 1);
//   updateStatTotals();
// }

export default function updateStatTotals(dispatch) {
  const player = store.getState().player;

  let totalStrength = player.stats.baseStrength;
  let totalAgility = player.stats.baseAgility;
  let totalArcana = player.stats.baseArcana;

  // for (const item of statChanges) {
  //   if (item.stats) {
  //     totalStrength += item.stats.strength || 0;
  //     totalAgility += item.stats.agility || 0;
  //     totalAttack += item.stats.attack || 0;
  //   }
  // }

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
