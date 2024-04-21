import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    name: "Carson",
    image: "",
    level: 1,
    currentHealth: 75,
    maxHealth: 100,
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
  },
  reducers: {
    updateStats(state, action) {},
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice;
