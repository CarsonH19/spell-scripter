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
  },

  // PRIESTESS
  {
    name: "Liheth",
    id: "Liheth",
    unlocked: true,
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
  },
];
// WARLOCK
// EVOKER
// RISEN

export function changeHeroAccess(name, change) {
  for (let i = 0; i < heroes.length; i++) {
    if (heroes[i].name === name) {
      if (change === "UNLOCK") {
        heroes[i].unlocked = true;
      } else if (change === "LOCK") {
        heroes[i].unlocked = false;
      }
    }
  }
}

export default heroes;
