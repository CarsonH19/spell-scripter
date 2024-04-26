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

      // Prevents Falling Below 0
      if (hero.currentHealth < 0) {
        hero.currentHealth = 0;
      }

      if (change === "HEAL") {
        hero.currentHealth += value;
      }

      // Prevents Healing Above Max
      if (hero.currentHealth > hero.maxHealth) {
        hero.currentHealth = hero.maxHealth;
      }
    },
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
