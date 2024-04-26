import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    name: "Carson",
    id: "Player",
    identifier: 'PLAYER',
    image: "",
    level: 1,
    currentHealth: 75,
    maxHealth: 100,
    attack: 10,
    defense: 0,
    currentMana: 50,
    maxMana: 60,
    currentExp: 0,
    expToNextLevel: 100,
    stats: {
      strength: 1,
      agility: 2,
      faith: 3,
      arcana: 4,
    },
    weaknesses: [],
    resistances: [],
    immunities: [],
    spellList: [],
  },
  reducers: {
    updateHealth(state, action) {
      const change = action.payload.change;
      const value = action.payload.value;

      if (change === "DAMAGE") {
        state.currentHealth -= value;
      }

      if (change === "HEAL") {
        state.currentHealth += value;
      }
    },
    updateSpellList(state, action) {
      state.spellList = action.payload;
    }
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice;
