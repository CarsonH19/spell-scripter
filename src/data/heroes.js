let heroes = [
  // PALADIN
  {
    name: "Siggurd",
    id: "Siggurd",
    unlocked: true,
    identifier: "HERO",
    image: "",
    // audio: {},
    level: 1,
    currentHealth: 0,
    stats: {
      baseStrength: 2,
      baseAgility: 0,
      baseArcana: 1,
    },
    behavior: "DOMINANT",
    passive: {
      type: "BEFORE_COMBAT",
      function: "RADIANT_AURA",
    },
    abilityA: {
      cooldown: 0,
      reset: 3,
      focus: "HIGHEST_HEALTH",
      function: "HOLY_SMITE",
    },
    weaknesses: [],
    resistances: [],
    immunities: [],
    statusEffects: [],
  },
  // ROGUE
  {
    name: "Riven",
    id: "Riven",
    unlocked: true,
    identifier: "HERO",
    image: "",
    // audio: {},
    level: 1,
    currentHealth: 0,
    stats: {
      baseStrength: 1,
      baseAgility: 2,
      baseArcana: 0,
    },
    weaknesses: [],
    resistances: [],
    immunities: [],
    behavior: "ERRATIC",
    statusEffects: [],
  },

  // PRIESTESS
  {
    name: "Liheth",
    id: "Liheth",
    unlocked: true,
    identifier: "HERO",
    image: "",
    level: 1,
    currentHealth: 0,
    stats: {
      baseStrength: 0,
      baseAgility: 1,
      baseArcana: 2,
    },
    behavior: "ASTUTE",
    // abilityA: {
    //   cooldown: 3,
    //   focus: "",
    //   function: "",
    // },
    weaknesses: [],
    resistances: [],
    immunities: [],
    statusEffects: [],
  },
];
// WARLOCK
// EVOKER
// RISEN

export default heroes;
