// PALADIN
let siggurd = {
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
    when: "BEFORE_COMBAT",
    function: "RADIANT_AURA",
  },
  abilityA: {
    cooldown: 0,
    reset: 3,
    focus: "HIGHEST_HEALTH",
    function: "HOLY_SMITE",
  },
  abilityB: {
    cooldown: 0,
    reset: 9,
    focus: "HEROES",
    function: "DIVINE_GUARDIAN",
  },
  weaknesses: [],
  resistances: [],
  immunities: [],
  statusEffects: [],
};

// ROGUE
let riven = {
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
  behavior: "RUTHLESS",
  passive: {
    type: "OUTSIDE_COMBAT",
    function: "LOOT_SENSE",
  },
  abilityA: {
    cooldown: 0,
    reset: 3,
    focus: "LOWEST_HEALTH",
    function: "VENOM_STRIKE",
  },
  // abilityB: {
  //   cooldown: 0,
  //   reset: 9,
  //   focus: "LOWEST_HEALTH",
  //   function: "DIVINE_GUARDIAN",
  // },
  weaknesses: [],
  resistances: [],
  immunities: [],
  statusEffects: [],
};

// PRIESTESS
let liheth = {
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
};

// WARLOCK
// EVOKER
// RISEN

let heroes = [siggurd, riven, liheth];

export default heroes;
