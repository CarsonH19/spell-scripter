import { heroActions } from "./hero-slice";
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

import store from "./index";
import { dungeonActions } from "./dungeon-slice";

export default function updateStatTotals(dispatch, character) {
  if (character.identifier === "HERO") {
    const findHeroById = (id) => {
      const heroes = store.getState().hero.party;
      return heroes.find((hero) => hero.id === id);
    };

    const hero = findHeroById(character.id);
    character = hero;
  }

  if (character.identifier === "ENEMY") {
    const findEnemyById = (id) => {
      const enemies = store.getState().dungeon.contents.enemies;
      return enemies.find((enemy) => enemy.id === id);
    };

    const enemy = findEnemyById(character.id);
    character = enemy;
  }

  if (character.identifier === "PLAYER") {
    character = store.getState().player;
  }

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
    }
  }

  // Strength
  if (totalStrength < 0) totalStrength = 0;

  maxHealth += calculateMaxHealth(character, totalStrength);
  attack += calculateAttackBonus(character, totalStrength);

  // Agility
  if (totalAgility < 0) totalAgility = 0;

  defense += calculateDefense(totalAgility);
  speed += calculateSpeed(totalAgility);
  hitChance += calculateHitChance(totalAgility);

  // Arcana
  if (totalArcana < 0) totalArcana = 0;
  maxMana += calculateMaxMana(character, totalArcana);
  spellPower += calculateSpellPower(character, totalArcana);

  switch (character.identifier) {
    case "PLAYER":
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
      console.log("Player Stats Updated", character);
      break;
    case "HERO":
      dispatch(
        heroActions.updateStats({
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
      console.log("Hero Stats Updated", character);
      break;
    case "ENEMY":
      dispatch(
        dungeonActions.updateStats({
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
      break;
  }

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

  function calculateDefense(totalAgility) {
    const defense = 10 + totalAgility;

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
