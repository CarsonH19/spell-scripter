import { createSlice } from "@reduxjs/toolkit";

const spellbookSlice = createSlice({
  name: "spellbook",
  initialState: {
    evocation: {
      novice: [
        {
          name: "Firebolt",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Frostbite",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Shock",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
      ],
      apprentice: [
        // {
        //   name: "",
        //   type: "",
        //   description: "",
        //   points: 0,
        //   max: 1,
        // },
        {
          name: "Smoldering Heart",
          type: "Buff",
          description: [
            "When casting spells that deal Fire damage, you have a 10% chance to inflict the Burning condition.",
            "When casting spells that deal Fire damage, you have a 15% chance to inflict the Burning condition.",
            "When casting spells that deal Fire damage, you have a 20% chance to inflict the Burning condition.",
          ],
          points: 0,
          max: 3,
        },
        {
          name: "Fireball",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Frigid Gaze",
          type: "Buff",
          description: [
            "When casting spells that deal Ice damage, you have a 8% chance to inflict the Chilled condition.",
            "When casting spells that deal Ice damage, you have a 12% chance to inflict the Chilled condition.",
            "When casting spells that deal Ice damage, you have a 16% chance to inflict the Chilled condition.",
          ],
          points: 0,
          max: 3,
        },
        {
          name: "Chain Lightning",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Charged Touch",
          type: "Buff",
          description: [
            "When casting spells that deal Lightning damage, you have a 6% chance to inflict the Stunned condition.",
            "When casting spells that deal Lightning damage, you have a 9% chance to inflict the Stunned condition.",
            "When casting spells that deal Lightning damage, you have a 12% chance to inflict the Stunned condition.",
          ],
          points: 0,
          max: 3,
        },
      ],
      adept: [
        {
          name: "Consuming Flames",
          type: "Buff",
          description: [
            "Enemies Burning from your spells are dealt 5 Fire damage each round.",
            "Enemies Burning from your spells are dealt 7 Fire damage each round.",
            "Enemies Burning from your spells are dealt 9 Fire damage each round.",
          ],
          points: 0,
          max: 3,
        },
        {
          name: "Blizzard",
          type: "Spell",
          // description: "",
          points: 0,
          max: 1,
        },
        {
          name: "Evoker",
          type: "Buff",
          description: [
            "The mana cost of all Evocation spells is reduced by 2MP",
            "The mana cost of all Evocation spells is reduced by 4MP",
            "The mana cost of all Evocation spells is reduced by 6MP",
          ],
          points: 0,
          max: 3,
        },
        {
          name: "Storm Sphere",
          type: "Spell",
          // description: "",
          points: 0,
          max: 1,
        },
        {
          name: "Deep Chill",
          type: "Buff",
          description: [
            "Enemies Chilled by your spells have their Agility reduced by 2",
            "Enemies Chilled by your spells have their Agility reduced by 3",
            "Enemies Chilled by your spells have their Agility reduced by 4",
          ],
          points: 0,
          max: 3,
        },
      ],
      expert: [
        {
          name: "Meteor",
          type: "Spell",
          // description: "",
          points: 0,
          max: 1,
        },
        // {
        //   name: "Tempest",
        //   type: "Spell",
        //   // description: "",
        //   points: 0,
        //   max: 1,
        // },
      ],
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
