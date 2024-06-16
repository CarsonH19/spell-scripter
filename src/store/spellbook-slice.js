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
      // payloads are strings
      const { school, name } = action.payload;
      console.log(name);
      for (let expertise in state[school]) {
        const skill = state[school][expertise].find(
          (skill) => skill.name === name
        );
        console.log(skill);

        if (skill && skill.points < skill.max) {
          skill.points = skill.points + 1;
          // return true; // used to verify point was spent and decrement masteryPoints in player-slice.js
        }
      }
    },
    resetSkillTree(state, action) {
      // Reset all points expended in a skill tree
    },
  },
});

export const spellbookActions = spellbookSlice.actions;

export default spellbookSlice;
