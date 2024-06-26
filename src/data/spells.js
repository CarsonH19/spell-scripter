import store from "../store/index";
import { beast, knight, drake, golem } from "./summons";

// const spellPower = store.getState().player.stats.arcana.spellPower;

const DAMAGE_TYPES = {
  PHYSICAL: "PHYSICAL",
  FIRE: "FIRE",
  ICE: "ICE",
  LIGHTNING: "LIGHTNING",
  POISON: "POISON",
};

const SPELLS = {
  // =======================================
  //                EVOCATION
  // =======================================
  evocation: [
    {
      name: "Firebolt",
      school: `Novice Evocation`,
      image: "",
      castTime: "DURING COMBAT",
      spellTarget: "ENEMY",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.FIRE,
      baseDamage: 6,
      manaCost: 10,
    },
    {
      name: "Frostbite",
      school: `Novice Evocation`,
      image: "",
      castTime: "DURING COMBAT",
      spellTarget: "ENEMY",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.ICE,
      baseDamage: 8,
      manaCost: 10,
    },
    {
      name: "Shock",
      school: `Novice Evocation`,
      image: "",
      castTime: "DURING COMBAT",
      spellTarget: "ENEMY",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.LIGHTNING,
      baseDamage: 10,
      manaCost: 10,
    },
    {
      name: "Fireball",
      school: `Apprentice Evocation`,
      image: "",
      castTime: "DURING COMBAT",
      spellTarget: "ENEMIES",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.FIRE,
      baseDamage: 8,
      manaCost: 30,
    },
    {
      name: "Chain Lightning",
      school: `Apprentice Evocation`,
      image: "",
      castTime: "DURING COMBAT",
      spellTarget: "ENEMY",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.LIGHTNING,
      baseDamage: 16,
      manaCost: 10,
    },
    {
      name: "Blizzard",
      school: `Adept Evocation`,
      image: "",
      castTime: "DURING COMBAT",
      spellTarget: "ENEMIES",
      spellType: "DEBUFF",
      damageType: DAMAGE_TYPES.ICE,
      manaCost: 30,
    },
    // {
    //   name: "Immolate",
    //   school: `Adept Evocation`,
    //   image: "",
    //   spellTarget: "ENEMY",
    //   spellType: "HIT",
    //   damageType: DAMAGE_TYPES.FIRE,
    //   baseDamage: 30,
    //   manaCost: 10,
    // },
    {
      name: "Storm Sphere",
      school: `Adept Evocation`,
      image: "",
      castTime: "ANYTIME",
      spellTarget: "SELF",
      spellType: "BUFF",
      damageType: DAMAGE_TYPES.LIGHTNING,
      manaCost: 30,
    },
    {
      name: "Meteor",
      school: `Expert Evocation`,
      image: "",
      castTime: "DURING COMBAT",
      spellTarget: "ENEMIES",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.FIRE,
      baseDamage: 16,
      manaCost: 10,
    },
  ],
  // =======================================
  //                ABJURATION
  // =======================================
  abjuration: [
    {
      name: "Bark Skin",
      school: "Novice Abjuration",
      image: "",
      castTime: "ANYTIME",
      spellTarget: "ALLY",
      spellType: "BUFF",
      statusEffect: {
        name: "Bark Skin",
        display: true,
        image: "",
        description: "The target's skin gains the durability of bark.",
        effect: ["Defense +1"],
        durationType: "ROOM",
        duration: 3,
        stats: {
          agility: {
            defense: +1,
          },
        },
      },
      manaCost: 10,
    },
    {
      name: "Barrier",
      school: "Novice Abjuration",
      image: "",
      castTime: "ANYTIME",
      spellTarget: "ALLY",
      spellType: "BUFF",
      statusEffect: {
        name: "Barrier",
        display: true,
        image: "",
        description:
          "The next instance of damage received by the target will be halved.",
        effect: ["Damage -50%"],
        // durationType: "ROOM",
        // duration: 3,
        stats: {},
      },
      manaCost: 10,
    },
    {
      name: "Boundless",
      school: "Novice Abjuration",
      image: "",
      castTime: "ANYTIME",
      spellTarget: "ALLY",
      spellType: "BUFF",
      statusEffect: {
        name: "Boundless",
        display: true,
        image: "",
        description: "The target cannot be Restrained.",
        effect: ["Restrained Immunity"],
        durationType: "ROOM",
        duration: 3,
        stats: {},
      },
      manaCost: 10,
    },
    {
      name: "Death Ward",
      school: "Apprentice Abjuration",
      image: "",
      castTime: "ANYTIME",
      spellTarget: "ALLY",
      spellType: "BUFF",
      statusEffect: {
        name: "Death Ward",
        display: true,
        image: "",
        description:
          "If the target takes damage and would fall to 0HP, it instead retains 1HP and the spell ends.",
        effect: [""],
        // durationType: "INDEFINITE",
        // duration: 3,
        stats: {},
      },
      manaCost: 10,
    },
    {
      name: "Dispel Magic",
      school: "Apprentice Abjuration",
      image: "",
      castTime: "DURING COMBAT",
      spellTarget: "ENEMY",
      spellType: "DEBUFF",
      manaCost: 10,
    },
    {
      name: "Ward From Evil",
      school: "Apprentice Abjuration",
      image: "",
      castTime: "ANYTIME",
      spellTarget: "ALLY",
      spellType: "BUFF",
      manaCost: 10,
    },
    {
      name: "Stone Skin",
      school: "Apprentice Abjuration",
      image: "",
      castTime: "ANYTIME",
      spellTarget: "ALLY",
      spellType: "BUFF",
      statusEffect: {
        name: "Stone Skin",
        display: true,
        image: "",
        description: "The target's skin gains the durability of stone.",
        effect: ["Defense +2"],
        durationType: "ROOM",
        duration: 3,
        stats: {
          agility: {
            defense: +2,
          },
        },
      },
      manaCost: 10,
    },
    {
      name: "Shell",
      school: "Adept Abjuration",
      image: "",
      castTime: "DURING COMBAT",
      spellTarget: "ALLY",
      spellType: "BUFF",
      statusEffect: {
        name: "Shell",
        display: true,
        image: "",
        description:
          "All instances of damage received by the target will be halved.",
        effect: ["Damage -50%"],
        durationType: "ROUND",
        duration: 3,
        stats: {},
      },
      manaCost: 10,
    },
    {
      name: "Steel Skin",
      school: "Adept Abjuration",
      image: "",
      castTime: "ANYTIME",
      spellTarget: "ALLY",
      spellType: "BUFF",
      statusEffect: {
        name: "Steel Skin",
        display: true,
        image: "",
        description: "The target's skin gains the durability of steel.",
        effect: ["Defense +3"],
        durationType: "ROOM",
        duration: 3,
        stats: {
          agility: {
            defense: +3,
          },
        },
      },
      manaCost: 10,
    },
    {
      name: "Invulnerability",
      school: "Expert Abjuration",
      image: "",
      castTime: "DURING COMBAT",
      spellTarget: "ALLY",
      spellType: "BUFF",
      statusEffect: {
        name: "Invulnerability",
        display: true,
        image: "",
        description: "The target cannot be damaged.",
        effect: ["Damage -100%"],
        durationType: "ROUND",
        duration: 3,
        stats: {},
      },
      manaCost: 10,
    },
  ],
  // =======================================
  //              CONJURATION
  // =======================================
  conjuration: [
    {
      name: "Conjure Weapon",
      school: `Novice Conjuration`,
      image: "",
      castTime: "ANYTIME",
      spellTarget: "ALLY",
      spellType: "BUFF",
      statusEffect: {
        name: "Conjure Weapon",
        display: true,
        image: "",
        description: "The target has equipped a conjured magical weapon.",
        effect: ["+2 Attack"],
        durationType: "ROOM",
        duration: 3,
        stats: {
          strength: {
            attack: +2,
          },
        },
      },
      manaCost: 10,
    },
    {
      name: "Summon Beast",
      school: `Novice Conjuration`,
      image: "",
      castTime: "BEFORE COMBAT",
      spellTarget: "CONJURE",
      spellType: "SUMMON",
      summon: beast,
      manaCost: 10,
    },
    {
      name: "Conjure Feast",
      school: `Novice Conjuration`,
      image: "",
      castTime: "BEFORE COMBAT",
      spellTarget: "ALLIES",
      spellType: "BUFF",
      statusEffect: {
        name: "Conjure Feast",
        display: true,
        image: "",
        description: "The target is well fed.",
        effect: ["+4 HP Regeneration"],
        durationType: "ROOM",
        duration: 3,
        stats: {
          strength: {
            healthRegen: +4,
          },
        },
      },
      manaCost: 10,
    },
    {
      name: "Conjure Key",
      school: `Apprentice Conjuration`,
      image: "",
      castTime: "BEFORE COMBAT",
      spellTarget: "CONJURE",
      spellType: "ITEM",
      manaCost: 10,
    },
    
    {
      name: "Summon Knight",
      school: `Apprentice Conjuration`,
      image: "",
      castTime: "BEFORE COMBAT",
      spellTarget: "CONJURE",
      spellType: "SUMMON",
      summon: knight,
      manaCost: 10,
    },
    {
      name: "Summon Drake",
      school: `Adept Conjuration`,
      image: "",
      castTime: "BEFORE COMBAT",
      spellTarget: "CONJURE",
      spellType: "SUMMON",
      summon: drake,
      manaCost: 10,
    },
    {
      name: "Summon Golem",
      school: `Adept Conjuration`,
      image: "",
      castTime: "BEFORE COMBAT",
      spellTarget: "CONJURE",
      spellType: "SUMMON",
      summon: golem,
      manaCost: 10,
    },
    {
      name: "Conjure Portal",
      school: `Adept Conjuration`,
      image: "",
      castTime: "BEFORE COMBAT",
      spellTarget: "CONJURE",
      spellType: "SUMMON",
      manaCost: 10,
    },
    {
      name: "Summon Hero",
      school: `Expert Conjuration`,
      image: "",
      castTime: "BEFORE COMBAT",
      spellTarget: "CONJURE",
      spellType: "SUMMON",
      manaCost: 10,
    },
  ],
  // =======================================
  //             RESTORATION
  // =======================================
  restoration: [
    {
      name: "Lesser Heal",
      image: "",
      spellTarget: "ALLY",
      spellType: "HEAL",
      healValue: 10,
      manaCost: 10,
    },
  ],
};

export default SPELLS;
