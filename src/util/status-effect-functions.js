import store from "../store/index";
import { changeHealth } from "../store/health-actions";
import { checkSkillPoints } from "./spellbook-util";
import { combatActions } from "../store/combat-slice";
import { checkForDeath } from "../store/health-actions";

// These functions are called when a target has the status effect

const statusEffectFunctions = {
  BURNING: (dispatch, target) => {
    let damage = 3;
    // SKILL - Consuming Flames - Increases Burning damage
    const skillPoints = checkSkillPoints("Consuming Flames");
    for (let i = 0; i < skillPoints; i++) {
      damage += 2;
    }
    changeHealth(dispatch, target, "DAMAGE", damage);
  },
  STORM_SPHERE: (dispatch, target) => {
    const spellPower = store.getState().player.stats.arcana.spellPower;
    const damage = Math.round(spellPower / 2);
    changeHealth(dispatch, target, "DAMAGE", damage);
  },
  ARCANE_SHIELD: (dispatch, spell, player, change, damage) => {
    const statusEffect = player.statusEffects.find(
      (effect) => effect.name === "Arcane Shield"
    );
    let health = statusEffect.currentHealth;
    // Remove status effect
    dispatch(
      combatActions.updateStatusEffects({
        id: "Player",
        change: "REMOVE",
        statusEffect,
      })
    );
    switch (change) {
      case "ADD":
        {
          if (spell.school === "Novice Abjuration") {
            health += 4;
          } else if (spell.school === "Apprentice Abjuration") {
            health += 8;
          } else if (spell.school === "Adept Abjuration") {
            health += 12;
          } else if (spell.school === "Expert Abjuration") {
            health += 16;
          }
        }
        break;
      case "REMOVE":
        {
          health -= damage;
          if (damage > health) {
            const value = Math.round(damage - health);
            dispatch(
              combatActions.updateDamageDisplay({
                id: "Player",
                value,
              })
            );
            dispatch(
              combatActions.updateHealth({
                id: "Player",
                change: "DAMAGE",
                value,
              })
            );
            checkForDeath(dispatch, "Player");
          }
        }
        break;
    }
    // Prevent exceeding max HP
    if (health > statusEffect.maxHealth) {
      health = statusEffect.maxHealth;
    }
    // Prevent falling below 0HP
    if (health < 0 && damage) {
      health = 0;
    }
    // Update object manually
    const updatedArcaneShield = {
      ...statusEffect,
      currentHealth: Math.round(health),
      get effect() {
        return [`${this.currentHealth}/${this.maxHealth}HP`];
      },
    };
    // Add updated status effect
    dispatch(
      combatActions.updateStatusEffects({
        id: "Player",
        change: "ADD",
        statusEffect: updatedArcaneShield,
      })
    );
  },
};

export default statusEffectFunctions;
