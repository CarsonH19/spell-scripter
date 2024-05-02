import { createSlice } from "@reduxjs/toolkit";

const combatSlice = createSlice({
  name: "combat",
  initialState: { order: [], highlightedCharacter: null },
  reducers: {
    setInitiative(state, action) {
      const heroes = action.payload.heroes;
      const enemies = action.payload.enemies;
      const player = action.payload.player;

      const all = [...heroes, ...enemies, player];

      const charactersWithInitiative = all.map((character) => ({
        character,
        initiative:
          Math.floor(Math.random() * 11) + character.stats.agility.speed,
      })); // NOTE: May want to change agility for a specific speed stat

      charactersWithInitiative.sort((a, b) => b.initiative - a.initiative);

      const initiativeOrder = charactersWithInitiative.map(
        (character) => character.character
      );

      state.order = initiativeOrder;
    },
    highlightCharacter(state, action) {
      state.highlightedCharacter = action.payload;
    },
    clearHighlight(state) {
      state.highlightedCharacter = null;
    },
    removeCharacter(state, action) {
      const character = action.payload.character;

      const characterIndex = state.order.findIndex(
        (char) => char.id === character.id
      );

      if (characterIndex !== -1) {
        // Remove the enemy if it exists
        state.order.splice(characterIndex, 1);
      }
    },
    addCharacter(state, action) {
      const character = action.payload.character;

      // NOTE: add logic to check if character already exists
      state.order.push(character);
    },
    updateStats(state, action) {
      // Locate character
      const id = action.payload.id;

      const findCharacterById = (id) => {
        const characters = state.order;
        return characters.find((char) => char.id === id);
      };

      const character = findCharacterById(id);

      // Strength
      character.stats.strength.totalStrength = action.payload.totalStrength;
      character.stats.strength.maxHealth = action.payload.maxHealth;
      character.stats.strength.attack = action.payload.attack;

      // Check if current HP is greater than max HP
      if (character.currentHealth > character.stats.strength.maxHealth) {
        character.currentHealth = character.stats.strength.maxHealth;
      }

      // Agility
      character.stats.agility.totalAgility = action.payload.totalAgility;
      character.stats.agility.defense = action.payload.defense;
      character.stats.agility.speed = action.payload.speed;
      character.stats.agility.hitChance = action.payload.hitChance;

      // Arcana
      character.stats.arcana.totalArcana = action.payload.totalArcana;
      character.stats.arcana.spellPower = action.payload.spellPower;
      character.stats.arcana.maxMana = action.payload.maxMana;
    },
    updateHealth(state, action) {
      const change = action.payload.change;
      const value = action.payload.value;

      // Locate character
      const id = action.payload.id;

      const findCharacterById = (id) => {
        const characters = state.order;
        return characters.find((char) => char.id === id);
      };

      const character = findCharacterById(id);

      if (change === "DAMAGE") {
        character.currentHealth -= value;

        // Prevents Falling Below 0
        if (character.currentHealth < 0) {
          character.currentHealth = 0;
        }
      }

      if (change === "HEAL") {
        character.currentHealth += value;

        // Prevents Healing Above Max
        if (character.currentHealth > character.stats.strength.maxHealth) {
          character.currentHealth = character.stats.strength.maxHealth;
        }
      }
    },
    updateStatusEffects(state, action) {
      const change = action.payload.change;
      const statusEffect = action.payload.statusEffect;

      // Locate character
      const id = action.payload.id;

      const findCharacterById = (id) => {
        const characters = state.order;
        return characters.find((char) => char.id === id);
      };

      const character = findCharacterById(id);

      switch (change) {
        case "ADD":
          character.statusEffects.push(statusEffect);
          break;
        case "REMOVE":
          {
            const statusIndex = character.statusEffects.findIndex(
              (effect) => effect.name === statusEffect.name
            );

            if (statusIndex !== -1) {
              character.statusEffects.splice(statusIndex, 1);
            }
          }
          break;
      }
    },
    updateStatusEffectDuration(state, action) {
      // Locate character
      const id = action.payload.id;
      const findCharacterById = (id) => {
        const characters = state.order;
        return characters.find((char) => char.id === id);
      };
      const character = findCharacterById(id);

      // Locate Status Effect
      const name = action.payload.name;
      const findStatusEffectById = (name) => {
        return character.statusEffects.find((effect) => effect.name === name);
      };
      const statusEffect = findStatusEffectById(name);

      if (!statusEffect) console.log("MISSING EFFECT!");

      const change = action.payload.change;
      switch (change) {
        case "DECREMENT":
          statusEffect.duration--;
          break;

        case "RESET": {
          const reset = action.payload.reset;
          statusEffect.duration = reset;
        }
      }
    },
  },
});

export const combatActions = combatSlice.actions;

export default combatSlice;
