import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
  name: "hero",
  initialState: { party: [] },
  reducers: {
    updateParty(state, action) {
      state.party = action.payload;
    },
    updateHealth(state, action) {
      const id = action.payload.id;
      const change = action.payload.change;
      const value = action.payload.value;

      const findHeroById = (id) => {
        const heroes = state.party;
        return heroes.find((hero) => hero.id === id);
      };

      const hero = findHeroById(id);

      if (change === "DAMAGE") {
        hero.currentHealth -= value;
      }

      if (change === "HEAL") {
        hero.currentHealth += value;
      }
    },
  },
});

export const heroActions = heroSlice.actions;

export default heroSlice;
