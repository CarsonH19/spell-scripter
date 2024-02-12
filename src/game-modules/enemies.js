// Used to calculate enemy/hero stats
const ranks = {
  LOW: "LOW",
  AVERAGE: "AVERAGE",
  HIGH: "HIGH",
  VERY_HIGH: "VERY HIGH",
};

// Used to determine armorType, damageType, weaknesses and resistances
const types = {
  PHYSICAL: "PHYSICAL",
  MAGICAL: "MAGICAL",
  FIRE: "FIRE",
  WATER: "WATER",
  COLD: "COLD",
  LIGHTNING: "LIGHTNING",
  POISON: "POISON",
  ACID: "ACID",
  NECROTIC: "NECROTIC",
  RADIANT: "RADIANT",
};

// Determines how the enemy/hero acts during combat
const behaviors = {
  RANDOM: "RANDOM", // Attack any target
  ASTUTE: "ASTUTE", // Attack casters
  SAVAGE: "SAVAGE", // Attack non-casters
  RUTHLESS: "RUTHLESS", // Attack lowest HP target
  DOMINANT: "DOMINANT", // Attack highest HP target
  VENGEFUL: "VENGEFUL", // Attack target that deals it damage
  PROTECTIVE: "PROTECTIVE", // Protect the player/boss
  SUPPORTIVE: "SUPPORIVE", // Support allies through buffs/healing
  EVASIVE: "EVASIVE", // Doesn't attack only dodges attacks
};

// exported to heroes.js
export const stats = {
  ranks,
  types,
  behaviors
};

export const ENEMIES = {
  // =====================================================================
  // IronJour Timberland Enemies
  // =====================================================================

  SPLINTERBOUGH_TREANT: {
    name: "Splinterbough Treant",
    image: null,
    sounds: {},
    level: 5,
    health: ranks.VERY_HIGH,
    defense: ranks.AVERAGE,
    damage: ranks.HIGH,
    hitChance: ranks.LOW,
    critChance: ranks.HIGH,
    speed: ranks.LOW,
    armorType: types.PHYSICAL,
    damageType: types.PHYSICAL,
    weaknesses: [damageTypes.FIRE],
    resistances: [damageTypes.WATER],
    behavior: behaviors.VENGEFUL,
    passive: () => {},
    active1: () => {},
    active2: () => {},
  },
  WITHERSAP_DRYAD: {
    name: "Withersap Dryad",
    image: null,
    sounds: {},
    level: 3,
    health: ranks.AVERAGE,
    defense: ranks.LOW,
    damage: ranks.AVERAGE,
    hitChance: ranks.AVERAGE,
    critChance: ranks.AVERAGE,
    speed: ranks.AVERAGE,
    armorType: types.PHYSICAL,
    damageType: types.PHYSICAL,
    weaknesses: [damageTypes.FIRE],
    resistances: [damageTypes.WATER],
    behavior: behaviors.VENGEFUL,
    passive: () => {},
    active1: () => {},
    active2: () => {},
  },
  WOOD_WOAD: {
    name: "Wood Woad",
    image: null,
    sounds: {},
    level: 1,
    health: ranks.LOW,
    defense: ranks.AVERAGE,
    damage: ranks.LOW,
    hitChance: ranks.LOW,
    critChance: ranks.LOW,
    speed: ranks.LOW,
    armorType: types.PHYSICAL,
    damageType: types.PHYSICAL,
    weaknesses: [damageTypes.FIRE],
    resistances: [damageTypes.WATER],
    behavior: behaviors.RANDOM,
    passive: () => {},
    active1: () => {},
    active2: () => {},
  },

  // =====================================================================
  // Great Catacomb Enemies
  // =====================================================================

  DECREPIT_SKELETON: {
    name: "Decrepit Skeleton",
    image: null,
    sounds: {},
    level: 1,
    health: ranks.LOW,
    defense: ranks.LOW,
    damage: ranks.LOW,
    hitChance: ranks.LOW,
    critChance: ranks.LOW,
    speed: ranks.LOW,
    armorType: types.PHYSICAL,
    damageType: types.PHYSICAL,
    weaknesses: [damageTypes.RADIANT],
    resistances: [],
    behavior: behaviors.RANDOM,
    passive: () => {},
    active1: () => {},
    active2: () => {},
  },
};

