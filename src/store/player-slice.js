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
    updateSpellList(state, action) {
      state.spellList = action.payload;
    },
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice;
