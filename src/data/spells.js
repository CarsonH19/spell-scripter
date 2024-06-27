import store from "../store/index";

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
      spellTarget: "ENEMIES",
      spellType: "DEBUFF",
      damageType: DAMAGE_TYPES.ICE,
      baseDamage: 0,
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
      spellTarget: "SELF",
      spellType: "BUFF",
      damageType: DAMAGE_TYPES.LIGHTNING,
      baseDamage: 16,
      manaCost: 30,
    },
    {
      name: "Meteor",
      school: `Expert Evocation`,
      image: "",
      spellTarget: "ENEMIES",
      spellType: "BUFF",
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
      spellTarget: "ALLY",
      spellType: "BUFF",
      statusEffect: {
        name: "Death Ward",
        display: true,
        image: "",
        description:
          "If the target falls below 0HP, it instead retains 1HP and the spell ends.",
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
      spellTarget: "ENEMY",
      spellType: "DEBUFF",
      manaCost: 10,
    },
    {
      name: "Ward From Evil",
      school: "Apprentice Abjuration",
      image: "",
      spellTarget: "ALLY",
      spellType: "BUFF",
      manaCost: 10,
    },
    {
      name: "Stone Skin",
      school: "Apprentice Abjuration",
      image: "",
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
        stats: {},
      },
      manaCost: 10,
    },
    {
      name: "Shell",
      school: "Adept Abjuration",
      image: "",
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
      spellTarget: "ALLY",
      spellType: "BUFF",
      statusEffect: {
        name: "Steel Skin",
        display: true,
        image: "",
        description: "The target's skin gains the durability of steel.",
        effect: ["Defense +3"],
        durationType: "ROUND",
        duration: 3,
        stats: {},
      },
      manaCost: 10,
    },
    {
      name: "Invulnerability",
      school: "Expert Abjuration",
      image: "",
      spellTarget: "ALLY",
      spellType: "BUFF",
      statusEffect: {
        name: "Stone Skinn",
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
