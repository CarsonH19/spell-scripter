const PALADIN = {
  name: "Siggurd",
  id: "Siggurd",
  identifier: "HERO",
  image: "",
  // audio: {},
  level: 1,
  currentHealth: 50,
  currentMana: 50,
  currentExp: 0,
  expToNextLevel: 100,
  stats: {
    baseStrength: 3,
    strength: {
      totalStrength: 1,
      attack: 10,
      maxHealth: 100,
    },
    baseAgility: 2,
    agility: {
      totalAgility: 2,
      defense: 10,
      speed: 0,
      hitChance: 2,
    },
    baseArcana: 3,
    arcana: {
      totalArcana: 3,
      spellPower: 0,
      maxMana: 50,
    },
  },
  weaknesses: [],
  resistances: [],
  immunities: [],
  behavior: "RANDOM",
  statusEffects: [],
};

// ROGUE
const ROGUE = {
  name: "Riven",
  id: "Riven",
  identifier: "HERO",
  image: "",
  // audio: {},
  level: 1,
  currentHealth: 50,
  currentMana: 50,
  currentExp: 0,
  expToNextLevel: 100,
  stats: {
    baseStrength: 2,
    strength: {
      totalStrength: 1,
      attack: 10,
      maxHealth: 100,
    },
    baseAgility: 2,
    agility: {
      totalAgility: 2,
      defense: 10,
      speed: 0,
      hitChance: 2,
    },
    baseArcana: 3,
    arcana: {
      totalArcana: 3,
      spellPower: 0,
      maxMana: 50,
    },
  },
  weaknesses: [],
  resistances: [],
  immunities: [],
  behavior: "RANDOM",
  statusEffects: [],
};

// PRIESTESS
const PRIESTESS = {
  name: "Liheth",
  id: "Liheth",
  identifier: "HERO",
  image: "",
  level: 1,
  currentHealth: 50,
  currentMana: 50,
  currentExp: 0,
  expToNextLevel: 100,
  stats: {
    baseStrength: 1,
    strength: {
      totalStrength: 1,
      attack: 10,
      maxHealth: 100,
    },
    baseAgility: 2,
    agility: {
      totalAgility: 2,
      defense: 10,
      speed: 0,
      hitChance: 2,
    },
    baseArcana: 3,
    arcana: {
      totalArcana: 3,
      spellPower: 0,
      maxMana: 50,
    },
  },
  weaknesses: [],
  resistances: [],
  immunities: [],
  behavior: "RANDOM",
  statusEffects: [],
};

// WARLOCK
// EVOKER
// RISEN

export let currentParty = [PALADIN, ROGUE, PRIESTESS];
