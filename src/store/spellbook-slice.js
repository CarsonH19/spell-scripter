import { createSlice } from "@reduxjs/toolkit";

const spellbookSlice = createSlice({
  name: "spellbook",
  initialState: {
    evocation: {
      novice: [
        {
          name: "Firebolt",
          text: "Spell",
          // description: "",
          points: 0,
          max: 1,
        },
        {
          name: "Ember Flare",
          text: "Buff",
          description: "Increases chance to cause the Burning condition when casting spells that deal Fire damage.",
          points: 0,
          max: 2,
        },
        {
          name: "Frostbite",
          text: "Spell",
          // description: "",
          points: 0,
          max: 1,
        },
        {
          name: "Frost Touch",
          text: "Buff",
          description: "Increases chance to cause the Chilled condition when casting spells that deal Ice damage.",
          points: 0,
          max: 2,
        },
        {
          name: "Shock",
          text: "Spell",
          // description: "",
          points: 0,
          max: 1,
        },
        {
          name: "Static Field",
          text: "Buff",
          description: "Increases chance to cause the Stunned condition when casting spells that deal Lightning damage.",
          points: 0,
          max: 2,
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
      for (let expertise in state[school]) {
        const skill = state[school][expertise].find(
          (skill) => skill.name === name
        );

        if (skill && skill.points < skill.max) {
          skill.points = skill.points + 1;
          // return true; // used to verify point was spent and decrement masteryPoints in player-slice.js
        }
      }
    },
    resetSkillTree(state, action) {
      // Reset all points expended in a skill tree
      const { school } = action.payload;

      // Iterate over each expertise in the school object
      for (let expertise in state[school]) {
        // Iterate over each skill in the current expertise
        state[school][expertise].forEach((skill) => {
          skill.points = 0;
        });
      }
    },
  },
});

export const spellbookActions = spellbookSlice.actions;

export default spellbookSlice;
