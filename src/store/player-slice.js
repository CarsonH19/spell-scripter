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
  },
  reducers: {
    updateStats(state, action) {
      // Updates Base Stats (HP/Mana/Attack/Defense/Strength/Agility/Arcana)
      state.stats.strength.score = action.payload.totalStrength;
      state.stats.strength.maxHealth = action.payload.maxHealth;
      state.stats.strength.attack = action.payload.attack;

      // Check if current HP is greater than max HP
      if (state.currentHealth > state.stats.strength.maxHealth) {
        state.currentHealth = state.stats.strength.maxHealth;
      }

      state.stats.agility.score = action.payload.totalAgility;
      state.stats.agility.defense = action.payload.defense;
      state.stats.agility.speed = action.payload.speed;
      state.stats.agility.hitChance = action.payload.hitChance;

      state.stats.arcana.score = action.payload.totalArcana;
      state.stats.arcana.spellPower = action.payload.payload.spellPower;
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
    updateSpellList(state, action) {
      state.spellList = action.payload;
    },
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice;
