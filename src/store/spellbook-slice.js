import { createSlice } from "@reduxjs/toolkit";

const spellbookSlice = createSlice({
  name: "spellbook",
  initialState: {
    evocation: {
      novice: [
        {
          name: "Ember Spark",
          text: "Increases chance to cause the Burning condition when casting spells that deal Fire damage.",
          points: 2,
          max: 3,
        },
        {
          name: "Frost Touch",
          text: "Increases chance to cause the Chilled condition when casting spells that deal Ice damage.",
          points: 0,
          max: 3,
        },
        {
          name: "Thunder Clap",
          text: "Increases chance to cause the Stunned condition when casting spells that deal Lightning damage.",
          points: 0,
          max: 3,
        },
      ],
      apprentice: [],
      adept: [],
      expert: [],
    },
    abjuration: {
      novice: [],
      apprentice: [],
      adept: [],
      expert: [],
    },
    conjuration: {
      novice: [],
      apprentice: [],
      adept: [],
      expert: [],
    },
    restoration: {
      novice: [],
      apprentice: [],
      adept: [],
      expert: [],
    },
  },

  reducers: {
    expendPoint(state, action) {
      // expend a point to unlock a skill
    },
    resetSkillTree(state, action) {
      // Reset all points expended in a skill tree
    },
  },
});

export const spellbookActions = spellbookSlice.actions;

export default spellbookSlice;
