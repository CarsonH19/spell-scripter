import { createSlice } from "@reduxjs/toolkit";

const enemySlice = createSlice({
  name: "enemy",
  initialState: {
    enemies: [],
  },
  reducers: {
    updateEnemies(state, action) {
      state.party = action.payload;
    },
    // addHero(state, action) {},
    // removeHero(state, action) {},
  },
});

export const enemyActions = enemySlice.actions;

export default enemySlice;
