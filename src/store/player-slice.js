import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    name: "",
    image: "",
    level: 1,
    health: 100,
    mana: 60,
    experience: 0,
    stats: {
      strength: 1,
      dexterity: 2,
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
