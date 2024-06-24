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
    cooldown: 3,
    reset: 3,
    focus: "HIGHEST_HEALTH",
    function: "HOLY_SMITE",
  },
  abilityB: {
    cooldown: 9,
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
    cooldown: 3,
    reset: 3,
    focus: "LOWEST_HEALTH",
    function: "VENOM_STRIKE",
  },
  abilityB: {
    cooldown: 9,
    reset: 9,
    focus: "ENEMIES",
    function: "SMOKE_BOMB",
  },
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
  level: 6,
  currentHealth: 0,
  stats: {
    baseStrength: 0,
    baseAgility: 1,
    baseArcana: 2,
  },
  behavior: "ASTUTE",
  passive: {
    when: "DURING_COMBAT",
    function: "BURNING_DEVOTION",
  },
  abilityA: {
    cooldown: 0,
    reset: 4,
    focus: "HEROES",
    function: "CLEANSING_FLAME",
  },
  abilityB: {
    cooldown: 0,
    reset: 20,
    focus: "LOWEST_HEALTH",
    function: "UNDYING_FLAME",
  },
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
