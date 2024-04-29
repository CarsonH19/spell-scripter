import { createSlice } from "@reduxjs/toolkit";

const combatSlice = createSlice({
  name: "combat",
  initialState: { order: [], highlightedCharacter: null },
  reducers: {
    setInitiative(state, action) {
      const heroes = action.payload.heroes;
      const enemies = action.payload.enemies;
      const player = action.payload.player;

      const all = [...heroes, ...enemies, player];

      const charactersWithInitiative = all.map((character) => ({
        character,
        initiative: Math.floor(Math.random() * 11) + character.stats.speed,
      })); // NOTE: May want to change agility for a specific speed stat

      charactersWithInitiative.sort((a, b) => b.initiative - a.initiative);

      const initiativeOrder = charactersWithInitiative.map(
        (character) => character.character
      );

      state.order = initiativeOrder;
      // console.log(state);
    },
    highlightCharacter(state, action) {
      state.highlightedCharacter = action.payload;
    },
    clearHighlight(state) {
      state.highlightedCharacter = null;
    },
    removeCharacter(state, action) {
      const character = action.payload.character;

      const characterIndex = state.order.findIndex(
        (char) => char.id === character.id
      );

      if (characterIndex !== -1) {
        // Remove the enemy if it exists
        state.order.splice(characterIndex, 1);
      }
    },
  },
});

export const combatActions = combatSlice.actions;

export default combatSlice;
