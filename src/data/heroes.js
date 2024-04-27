const PALADIN = {
  name: "Siggurd",
  id: "Siggurd",
  identifier: "HERO",
  image: "",
  // audio: {},
  level: 1,
  currentHealth: 50,
  maxHealth: 100,
  attack: 10,
  defense: 0,
  currentMana: 50,
  maxMana: 60,
  currentExp: 0,
  expToNextLevel: 100,
  stats: {
    strength: 4,
    agility: 1,
    arcana: 1,
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
  currentHealth: 1,
  maxHealth: 100,
  attack: 10,
  defense: 0,
  currentMana: 50,
  maxMana: 60,
  currentExp: 0,
  expToNextLevel: 100,
  stats: {
    strength: 2,
    agility: 99,
    arcana: 2,
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
  // audio: {},
  level: 1,
  currentHealth: 1,
  maxHealth: 100,
  attack: 10,
  defense: 0,
  currentMana: 50,
  maxMana: 60,
  currentExp: 0,
  expToNextLevel: 100,
  stats: {
    strength: 0,
    agility: 1,
    arcana: 3,
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
