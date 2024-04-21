const PALADIN = {
  name: "Siggurd",
  image: "",
  // audio: {},
  level: 1,
  currentHealth: 75,
  maxHealth: 100,
  defense: 0,
  currentMana: 50,
  maxMana: 60,
  currentExp: 0,
  expToNextLevel: 100,
  stats: {
    strength: 4,
    agility: 1,
    faith: 2,
    arcana: 1,
  },
  weaknesses: [],
  resistances: [],
  immunities: [],
};

// ROGUE
const ROGUE = {
  name: "Riven",
  image: "",
  // audio: {},
  level: 1,
  currentHealth: 75,
  maxHealth: 100,
  defense: 0,
  currentMana: 50,
  maxMana: 60,
  currentExp: 0,
  expToNextLevel: 100,
  stats: {
    strength: 2,
    agility: 4,
    faith: 0,
    arcana: 2,
  },
  weaknesses: [],
  resistances: [],
  immunities: [],
};

// PRIESTESS
const PRIESTESS = {
  name: "Liheth",
  image: "",
  // audio: {},
  level: 1,
  currentHealth: 75,
  maxHealth: 100,
  defense: 0,
  currentMana: 50,
  maxMana: 60,
  currentExp: 0,
  expToNextLevel: 100,
  stats: {
    strength: 0,
    agility: 1,
    faith: 4,
    arcana: 3,
  },
  weaknesses: [],
  resistances: [],
  immunities: [],
};

// WARLOCK
// EVOKER
// RISEN

export let currentParty = [PALADIN, ROGUE, ROGUE, ROGUE, PRIESTESS];
