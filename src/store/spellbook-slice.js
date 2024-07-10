import { createSlice } from "@reduxjs/toolkit";

const spellbookSlice = createSlice({
  name: "spellbook",
  initialState: {
    // =======================================
    //                EVOCATION
    // =======================================
    evocation: {
      novice: [
        {
          name: "Firebolt",
          image: "src/assets/images/spellbook/evocation/firebolt.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Frostbite",
          image: "src/assets/images/spellbook/evocation/frostbite.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Shock",
          image: "src/assets/images/spellbook/evocation/shock.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
      ],
      apprentice: [
        {
          name: "Smoldering Heart",
          image: "src/assets/images/spellbook/evocation/smoldering-heart.png",
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
          image: "src/assets/images/spellbook/evocation/fireball.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Frigid Gaze",
          image: "src/assets/images/spellbook/evocation/frigid-gaze.png",
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
          image: "src/assets/images/spellbook/evocation/chain-lightning.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Charged Touch",
          image: "src/assets/images/spellbook/evocation/charged-touch.png",
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
          image: "src/assets/images/spellbook/evocation/consuming-flames.png",
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
          image: "src/assets/images/spellbook/evocation/blizzard.png",
          type: "Spell",
          // description: "",
          points: 0,
          max: 1,
        },
        {
          name: "Evoker",
          image: "src/assets/images/spellbook/evocation/evoker.png",
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
          image: "src/assets/images/spellbook/evocation/storm-sphere.png",
          type: "Spell",
          // description: "",
          points: 0,
          max: 1,
        },
        {
          name: "Frozen Solid",
          image: "src/assets/images/spellbook/evocation/frozen-solid.png",
          type: "Buff",
          description: [
            "Enemies Chilled by your spells take 3% more damage from Attacks for each stack of Chilled they possess.",
            "Enemies Chilled by your spells take 6% more damage from Attacks for each stack of Chilled they possess.",
            "Enemies Chilled by your spells take 9% more damage from Attacks for each stack of Chilled they possess.",
          ],
          points: 0,
          max: 3,
        },
      ],
      expert: [
        {
          name: "Meteor",
          image: "src/assets/images/spellbook/evocation/meteor.png",
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
    // =======================================
    //                ABJURATION
    // =======================================
    abjuration: {
      novice: [
        {
          name: "Bark Skin",
          image: "src/assets/images/spellbook/abjuration/bark-skin.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Barrier",
          image: "src/assets/images/spellbook/abjuration/barrier.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Boundless",
          image: "src/assets/images/spellbook/abjuration/boundless.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
      ],
      apprentice: [
        {
          name: "Death Ward",
          image: "src/assets/images/spellbook/abjuration/death-ward.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Dispel Magic",
          image: "src/assets/images/spellbook/abjuration/dispel-magic.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Arcane Shield",
          image: "src/assets/images/spellbook/abjuration/arcane-shield.png",
          type: "Ability",
          description: [
            "Gain an Arcane Shield that shields absorbs damage. The shield gains temporary HP after each Alteration spell is cast up to a max of 18HP.",
            "Your Arcane Shield becomes more powerful and can gain a max of 27HP",
            "Your Arcane Shield becomes more powerful and can gain a max of 36HP",
          ],
          points: 0,
          max: 3,
        },
        {
          name: "Ward From Evil",
          image: "src/assets/images/spellbook/abjuration/ward-from-evil.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Stone Skin",
          image: "src/assets/images/spellbook/abjuration/stone-skin.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
      ],
      adept: [
        {
          name: "Shell",
          image: "src/assets/images/spellbook/abjuration/shell.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Improved Arcane Shield",
          image: "src/assets/images/spellbook/abjuration/improved-arcane-shield.png",
          type: "Ability",
          description: [
            "You enter each room with a minimum of 6HP in your Arcane Shield",
            "You enter each room with a minimum of 12HP in your Arcane Shield",
            "You enter each room with a minimum of 18HP in your Arcane Shield",
          ],
          points: 0,
          max: 3,
        },
        {
          name: "Abjurer",
          image: "src/assets/images/spellbook/abjuration/abjurer.png",
          type: "Buff",
          description: [
            "The mana cost of all Abjuration spells is reduced by 2MP",
            "The mana cost of all Abjuration spells is reduced by 4MP",
            "The mana cost of all Abjuration spells is reduced by 6MP",
          ],
          points: 0,
          max: 3,
        },
        {
          name: "Dual Casting",
          image: "src/assets/images/spellbook/abjuration/dual-casting.png",
          type: "Buff",
          description: [
            "When targeting an ally with a Novice or Apprentice Abjuration spell there is a 33% chance to target an additional random ally.",
            "When targeting an ally with a Novice or Apprentice  Abjuration spell there is a 66% chance to target an additional random ally.",
            "When targeting an ally with a Novice or Apprentice  Abjuration spell there is a 100% chance to target an additional random ally.",
          ],
          points: 0,
          max: 3,
        },
        {
          name: "Steel Skin",
          image: "src/assets/images/spellbook/abjuration/steel-skin.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
      ],
      expert: [
        {
          name: "Invulnerability",
          image: "src/assets/images/spellbook/abjuration/invulnerability.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
      ],
    },
    conjuration: {
      novice: [
        {
          name: "Conjure Weapon",
          image: "src/assets/images/spellbook/conjuration/conjure-weapon.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Summon Hound",
          image: "src/assets/images/spellbook/conjuration/summon-hound.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Conjure Feast",
          image: "src/assets/images/spellbook/conjuration/conjure-feast.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
      ],
      apprentice: [
        {
          name: "Conjure Key",
          image: "src/assets/images/spellbook/conjuration/conjure-key.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Summoned Resilience",
          image: "src/assets/images/spellbook/conjuration/summoned-resilience.png",
          type: "Buff",
          description: [
            "Increase the max HP of your summons by +10.",
            "Increase the max HP of your summons by +20.",
            "Increase the max HP of your summons by +30.",
          ],
          points: 0,
          max: 3,
        },
        {
          name: "Summoned Dexterity",
          image: "src/assets/images/spellbook/conjuration/summoned-dexterity.png",
          type: "Buff",
          description: [
            "Increase the Speed & Hit Chance of your summons by +1.",
            "Increase the Speed & Hit Chance of your summons by +2.",
            "Increase the Speed & Hit Chance of your summons by +3.",
          ],
          points: 0,
          max: 3,
        },
        {
          name: "Summon Knight",
          image: "src/assets/images/spellbook/conjuration/summon-knight.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
      ],
      adept: [
        {
          name: "Summon Drake",
          image: "src/assets/images/spellbook/conjuration/summon-drake.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Conjure Portal",
          image: "src/assets/images/spellbook/conjuration/conjure-portal.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
        {
          name: "Conjurer",
          image: "src/assets/images/spellbook/conjuration/conjurer.png",
          type: "Buff",
          description: [
            "The mana cost of all Conjuration spells is reduced by 2MP",
            "The mana cost of all Conjuration spells is reduced by 4MP",
            "The mana cost of all Conjuration spells is reduced by 6MP",
          ],
          points: 0,
          max: 3,
        },
        {
          name: "Summoned Might",
          image: "src/assets/images/spellbook/conjuration/summoned-might.png",
          type: "Buff",
          description: [
            "Increase the Attack of your summons by +2.",
            "Increase the Attack of your summons by +4.",
            "Increase the Attack of your summons by +6.",
            "Increase the Attack of your summons by +8.",
            "Increase the Attack of your summons by +10.",
          ],
          points: 0,
          max: 5,
        },
        {
          name: "Summon Golem",
          image: "src/assets/images/spellbook/conjuration/summon-stone-golem.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
      ],
      expert: [
        {
          name: "Summon Hero",
          image: "src/assets/images/spellbook/conjuration/summon-hero.png",
          type: "Spell",
          // description: spells-descriptions.js
          points: 0,
          max: 1,
        },
      ],
    },
    restoration: {
      novice: [],
      apprentice: [],
      adept: [],
      expert: [],
    },
    enchantment: {
      novice: [],
      apprentice: [],
      adept: [],
      expert: [],
    },
    necromancy: {
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
