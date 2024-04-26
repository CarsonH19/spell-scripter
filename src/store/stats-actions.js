import store from ".";
import { playerActions } from "./player-slice";

const player = store.getState().player;

// ===============================
//           STRENGTH => HP Bonus + 10 / Melee Attack +2
// ===============================

let baseStrength = player.stats.baseStrength;
let totalStrength = baseStrength;

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

  return maxHealth;
}

function calculateAttackBonus() {
  let baseAttack = player.level * 2 + 10;
  let strengthBonusAttack = totalStrength * 2;
  let totalAttack = baseAttack + strengthBonusAttack;

  return totalAttack;
}

// ===============================
//           Agility => Hit Chance / Speed (Initiative/Flee Chance) / Defense
// ===============================

let baseAgility;
let totalAgility = baseAgility;

function calculateHitChance(character) {
  // +1 per agility
  const hitChance = player.level + totalAgility;
  return hitChance;
}

function calculateDefense() {
  const defense = 10 + totalAgility;
  return defense;
}

function calculateSpeed() {
  const speed = 10 + totalAgility
  return speed;
}

// ===============================
//            FAITH => XP Gain Modifier / Item Find Chance
// ===============================
// let baseFaith = 3;
// let totalFaith = baseFaith;

// // Item Find Chance
// let itemFindChance;

// function calculateItemFindChance() {
//   itemFindChance = (totalFaith + 1) * 3;
//   itemFindChance += isItemAttuned(GRAVEROBBERS_SPADE, 0);
//   return Math.round(itemFindChance);
// }

// // Experience Modifier
// let experienceModifier;

// function calculateExperienceModifier() {
//   experienceModifier = totalFaith * 0.2 + 1;
//   return experienceModifier;
// }

// ===============================
//            ARCANA => Spell Power +2 / Mana Regen. / Max Mana
// ===============================
let baseArcana = 4;
let totalArcana = baseArcana;

// ===============================
//            STATS
// ===============================

// let attunedItems = [];

// let statChanges = [];

// function addStatChange(object) {
//   statChanges.push(object);
//   updateTotalStats();
// }

// function removeStatChange(object) {
//   const index = statChanges.indexOf(object);
//   statChanges.splice(index, 1);
//   updateTotalStats();
// }

function updateTotalStats(dispatch) {
  totalStrength = 0;
  totalAgility = 0;
  totalArcana = 0;

  // for (const item of statChanges) {
  //   if (item.stats) {
  //     totalStrength += item.stats.strength || 0;
  //     totalDexterity += item.stats.dexterity || 0;
  //     totalFaith += item.stats.faith || 0;
  //     totalAttack += item.stats.attack || 0;
  //   }
  // }

  // Strength
  totalStrength += baseStrength;
  if (totalStrength < 0) totalStrength = 0;

  let maxHealth = calculateMaxHealth();
  let attack = calculateAttackBonus();

  // Agility
  if (totalDexterity < 0) totalDexterity = 0;

  // Arcana

  // Attack

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
  // updatePlayerTrackers(); // dispatch => updatePlayerStats()
}
