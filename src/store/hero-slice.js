import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
  name: "hero",
  initialState: { party: [] },
  reducers: {
    changeParty(state, action) {
      const hero = action.payload.hero;
      const change = action.payload.change;

      const heroes = state.party;

      if (change === "ADD") {
        heroes.push(hero);
      }

      if (change === "REMOVE") {
        const heroIndex = state.party.findIndex((char) => char.id === hero.id);

        if (heroIndex !== -1) {
          // Remove the enemy if it exists
          heroes.splice(heroIndex, 1);
        }
      }
    },
  },
});

export const heroActions = heroSlice.actions;

export default heroSlice;
