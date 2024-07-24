import store from "./index";

import { combatActions } from "./combat-slice";
import { playerActions } from "./player-slice";
import { checkSkillPoints } from "../util/spellbook-util";
import changeStatusEffect, {
  checkCurrentStatusEffects,
} from "./status-effect-actions";
import { checkIfAttuned } from "../util/item-functions";

export default function updateStatTotals(dispatch, id) {
  let character;
  let sliceActions;

  // Check if player is on dashboard or in dungeon
  const dashboard = store.getState().ui.dashboardIsVisible;
  if (dashboard) {
    character = store.getState().player;
    sliceActions = playerActions;
  } else {
    const findCharacterById = (id) => {
      const characters = store.getState().combat.order;
      return characters.find((char) => char.id === id);
    };

    character = findCharacterById(id);
    sliceActions = combatActions;
  }

  let totalStrength = character.stats.baseStrength;
  let maxHealth = 0;
  let healthRegen = 0;
  let attack = 0;

  let totalAgility = character.stats.baseAgility;
  let defense = 0;
  let speed = 0;
  let hitChance = 0;

  let totalArcana = character.stats.baseArcana;
  let maxMana = 0;
  let manaRegen = 0;
  let spellPower = 0;

  // Misc. Variables
  let guard = null;

  // Adding stat changes from Items & Status Effects
  if (character.statusEffects.length > 0) {
    for (let i = 0; i < character.statusEffects.length; i++) {
      const item = character.statusEffects[i];

      // Update Stats
      if ("stats" in item) {
        // Strength
        if (item.stats && item.stats.strength) {
          totalStrength += item.stats.strength.strengthChange || 0;
          maxHealth += item.stats.strength.maxHealth || 0;
          healthRegen += item.stats.strength.healthRegen || 0;
          attack += item.stats.strength.attack || 0;
        }

        // Agility
        if (item.stats && item.stats.agility) {
          totalAgility += item.stats.agility.agilityChange || 0;
          defense += item.stats.agility.defense || 0;
          speed += item.stats.agility.speed || 0;
          hitChance += item.stats.agility.hitChance || 0;
        }

        // Arcana
        if (item.stats && item.stats.arcana) {
          totalArcana += item.stats.arcana.arcanaChange || 0;
          maxMana += item.stats.arcana.maxMana || 0;
          manaRegen += item.stats.arcana.manaRegen || 0;
          spellPower += item.stats.arcana.spellPower || 0;
        }
      }

      // Update Guarding
      if (item.name === "Guarding") {
        guard = "GUARDING";
      }
    }
  }

  // Strength
  if (totalStrength < 0) totalStrength = 0;

  maxHealth += calculateMaxHealth(character, totalStrength);
  healthRegen += calculateHealthRegen(totalStrength);
  attack += calculateAttackBonus(character, totalStrength);

  // Agility
  if (totalAgility < 0) totalAgility = 0;

  defense += calculateDefense(guard, totalAgility);
  speed += calculateSpeed(totalAgility);
  hitChance += calculateHitChance(totalAgility);

  // Arcana
  if (totalArcana < 0) totalArcana = 0;
  maxMana += calculateMaxMana(character, totalArcana);
  manaRegen += calculateManaRegen(totalArcana);
  spellPower += calculateSpellPower(character, totalArcana);

  if (healthRegen < 0) {
    healthRegen = 0;
  }

  if (manaRegen < 0) {
    manaRegen = 0;
  }

  if (spellPower < 0) {
    spellPower = 0;
  }

  if ("summon" in character) {
    // SKILL - Summoned Dexterity
    const summonedDexterity = checkSkillPoints("Summoned Dexterity");
    if (summonedDexterity) {
      for (let i = 0; i < summonedDexterity; i++) {
        speed++;
        hitChance++;
      }
    }

    // SKILL - Summoned Might
    const summonedMight = checkSkillPoints("Summoned Might");
    if (summonedMight) {
      for (let i = 0; i < summonedMight; i++) {
        attack += 2;
      }
    }

    // SKILL - Summoned Resilience
    const summonedResilience = checkSkillPoints("Summoned Resilience");
    if (summonedResilience) {
      for (let i = 0; i < summonedResilience; i++) {
        maxHealth += 10;
      }
    }
  }

  // Check for diseased condition
  if (checkCurrentStatusEffects(character, "Diseased")) {
    const diseased = character.statusEffects.find(
      (effect) => effect.name === "Diseased"
    );
    const lostMaxHP = ((diseased.stack * 20) / 100) * maxHealth;
    maxHealth = maxHealth - lostMaxHP;
  }

  dispatch(
    sliceActions.updateStats({
      id: character.id,
      totalStrength,
      maxHealth,
      healthRegen,
      attack,
      totalAgility,
      defense,
      speed,
      hitChance,
      totalArcana,
      maxMana,
      manaRegen,
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
    let baseHealth;
    let strengthBonusHealth;
    let maxHealth;

    if (character.identifier === "PLAYER") {
      baseHealth = 10 * character.level + 30;
    } else {
      baseHealth = 10 * character.level;
    }

    strengthBonusHealth = totalStrength * 10;
    maxHealth = baseHealth + strengthBonusHealth;
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

  function calculateHealthRegen(totalStrength) {
    let healthRegen = totalStrength * 2;

    if (healthRegen < 0) {
      healthRegen = 0;
    }

    return healthRegen;
  }

  function calculateAttackBonus(character, totalStrength) {
    let baseAttack;
    let strengthBonusAttack = totalStrength * 2;
    let totalAttack;

    if (character.identifier === "PLAYER") {
      baseAttack = character.level * 2 + 5;
    } else {
      baseAttack = character.level * 2 + 1;
    }

    totalAttack = baseAttack + strengthBonusAttack;

    return totalAttack;
  }

  // ===============================
  //           Agility => Hit Chance / Speed (Initiative/Flee Chance) / Defense
  // ===============================

  function calculateHitChance(totalAgility) {
    // +1 per agility / d20 roll + hitChance
    const hitChance = totalAgility;

    return hitChance;
  }

  function calculateDefense(guard, totalAgility) {
    // Base defense of 8
    let defense = 8 + totalAgility;

    // Guarding (+50% defense)
    if (guard) {
      defense = Math.round(defense * 1.5);
    }

    return defense;
  }

  function calculateSpeed(totalAgility) {
    // +1 per agility / d20 roll + speed
    const speed = totalAgility;

    return speed;
  }

  // ===============================
  //            ARCANA => Spell Power +2 / Max Mana
  // ===============================

  function calculateMaxMana(character, totalArcana) {
    let baseMana;
    let arcanaBonusMana;
    let maxMana;

    if (character.identifier === "PLAYER") {
      baseMana = 5 * character.level + 20;
    } else if (totalArcana > 0) {
      baseMana = 5 * character.level;
    } else {
      baseMana = 0;
    }

    arcanaBonusMana = totalArcana * 10;
    maxMana = baseMana + arcanaBonusMana;

    return maxMana;
  }

  function calculateManaRegen(totalArcana) {
    let manaRegen = totalArcana * 2;

    if (manaRegen < 0) {
      manaRegen = 0;
    }

    return manaRegen;
  }

  function calculateSpellPower(character, totalArcana) {
    let basePower;
    let arcanaBonusPower;
    let totalSpellPower;

    if (character.identifier === "PLAYER") {
      basePower = character.level * 2 + 3;
    } else if (totalArcana > 0) {
      basePower = character.level * 2;
    } else {
      basePower = 0;
    }

    arcanaBonusPower = totalArcana * 2;
    totalSpellPower = basePower + arcanaBonusPower;

    return totalSpellPower;
  }
}
