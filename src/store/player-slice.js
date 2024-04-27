import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    name: "Carson",
    id: "Player",
    identifier: "PLAYER",
    image: "",
    level: 1,
    currentHealth: 75,
    currentMana: 50,
    currentExp: 0,
    expToNextLevel: 100,
    stats: {
      baseStrength: 1,
      strength: {
        totalStrength: 1,
        attack: 10,
        maxHealth: 100,
      },
      baseAgility: 2,
      agility: {
        totalAgility: 2,
        defense: 10,
        speed: 0,
        hitChance: 2,
      },
      baseArcana: 3,
      arcana: {
        totalArcana: 3,
        spellPower: 0,
        maxMana: 50,
      },
    },
    weaknesses: [],
    resistances: [],
    immunities: [],
    spellList: [],
    statusEffects: [],
  },
  reducers: {
    updateStats(state, action) {
      // Strength
      console.log(action.payload.totalStrength);
      state.stats.strength.totalStrength = action.payload.totalStrength;
      state.stats.strength.maxHealth = action.payload.maxHealth;
      state.stats.strength.attack = action.payload.attack;

      // Check if current HP is greater than max HP
      if (state.currentHealth > state.stats.strength.maxHealth) {
        state.currentHealth = state.stats.strength.maxHealth;
      }

      // Agility
      state.stats.agility.totalAgility = action.payload.totalAgility;
      state.stats.agility.defense = action.payload.defense;
      state.stats.agility.speed = action.payload.speed;
      state.stats.agility.hitChance = action.payload.hitChance;

      // Arcana
      state.stats.arcana.totalArcana = action.payload.totalArcana;
      state.stats.arcana.spellPower = action.payload.spellPower;
      state.stats.arcana.maxMana = action.payload.maxMana;
    },
    updateHealth(state, action) {
      const change = action.payload.change;
      const value = action.payload.value;

      if (change === "DAMAGE") {
        state.currentHealth -= value;
      }

      // Prevents Falling Below 0
      if (state.currentHealth < 0) {
        state.currentHealth = 0;
      }

      if (change === "HEAL") {
        state.currentHealth += value;
      }

      // Prevents Healing Above Max
      if (state.currentHealth > state.maxHealth) {
        state.currentHealth = state.maxHealth;
      }
    },
    updateStatusEffects(state, action) {
      const change = action.payload.change;
      const statusEffect = action.payload.statusEffect;

      switch (change) {
        case "ADD":
          state.statusEffects.push(statusEffect);
          break;
        case "REMOVE":
          {
            const statusIndex = state.statusEffects.findIndex(
              (effect) => effect.name === statusEffect.name
            );

            if (statusIndex !== -1) {
              state.statusEffects.splice(statusIndex, 1);
            }
          }
          break;
      }
    },
    updateSpellList(state, action) {
      state.spellList = action.payload;
    },
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice;
