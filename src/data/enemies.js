const ENEMY_TYPES = {
  BEAST: "BEAST",
  HUMANOID: "HUMANOID",
  UNDEAD: "UNDEAD",
  DEMON: "DEMON",
};

const DAMAGE_TYPES = {
  PHYSICAL: "PHYSICAL",
  FIRE: "FIRE",
  POISON: "POISON",
};

const CONDITIONS = {
  DISEASED: "DISEASED",
  POISONED: "POISONED",
  HAUNTED: "HAUNTED",
  WEBBED: "WEBBED",
};

const UNDEAD = {
  DECREPIT_SKELETON: {
    name: "Decrepit Skeleton",
    identifier: "ENEMY",
    image: "",
    type: ENEMY_TYPES.UNDEAD,
    // audio: {},
    level: 1,
    currentHealth: 10,
    currentMana: 0,
    stats: {
      baseStrength: 8,
      baseAgility: 8,
      baseArcana: 0,
    },
    weaknesses: [],
    resistances: [],
    immunities: [],
    behavior: "ERRATIC",
    statusEffects: [],
  },
  SKELETAL_WARRIOR: {
    name: "Skeletal Warrior",
    identifier: "ENEMY",
    image: "",
    type: ENEMY_TYPES.UNDEAD,
    // audio: {},
    level: 2,
    currentHealth: 40,
    currentMana: 0,
    stats: {
      baseStrength: 2,
      baseAgility: 0,
      baseArcana: 0,
    },
    weaknesses: [],
    resistances: [],
    immunities: [],
    behavior: "ERRATIC",
    statusEffects: [],
  },
  SKELETAL_ARCHER: {
    name: "Skeletal Archer",
    identifier: "ENEMY",
    image: "",
    type: ENEMY_TYPES.UNDEAD,
    // audio: {},
    level: 2,
    currentHealth: 20,
    currentMana: 0,
    stats: {
      baseStrength: 0,
      baseAgility: 2,
      baseArcana: 0,
    },
    weaknesses: [],
    resistances: [],
    immunities: [],
    behavior: "ERRATIC",
    statusEffects: [],
  },
  SKELETAL_MAGE: {
    name: "Skeletal Mage",
    identifier: "ENEMY",
    image: "",
    type: ENEMY_TYPES.UNDEAD,
    // audio: {},
    level: 2,
    currentHealth: 30,
    currentMana: 0,
    stats: {
      baseStrength: 0,
      baseAgility: 0,
      baseArcana: 2,
    },
    weaknesses: [],
    resistances: [],
    immunities: [],
    behavior: "ERRATIC",
    statusEffects: [],
  },
  CORPSE_ORACLE: {
    name: "Corpse Oracle",
    identifier: "ENEMY",
    image: "",
    type: ENEMY_TYPES.UNDEAD,
    // audio: {},
    level: 4,
    currentHealth: 40,
    currentMana: 0,
    stats: {
      baseStrength: 0,
      baseAgility: 1,
      baseArcana: 4,
    },
    weaknesses: [],
    resistances: [],
    immunities: ["POISONED"],
    behavior: "RANDOM",
    statusEffects: [],
  },
  BONE_TITAN: {
    name: "Bone Titan",
    identifier: "ENEMY",
    image: "",
    type: ENEMY_TYPES.UNDEAD,
    // audio: {},
    level: 5,
    currentHealth: 90,
    currentMana: 0,
    stats: {
      baseStrength: 4,
      baseAgility: 1,
      baseArcana: 0,
    },
    weaknesses: [],
    resistances: [],
    immunities: ["POISONED"],
    behavior: "RANDOM",
    statusEffects: [],
  },
  REAPER: {
    name: "Reaper",
    identifier: "ENEMY",
    image: "",
    type: ENEMY_TYPES.UNDEAD,
    // audio: {},
    level: 5,
    currentHealth: 60,
    currentMana: 0,
    stats: {
      baseStrength: 1,
      baseAgility: 4,
      baseArcana: 0,
    },
    weaknesses: [],
    resistances: [],
    immunities: ["POISONED"],
    behavior: "RANDOM",
    statusEffects: [],
  },
  GRAVE_WITCH: {
    name: "Grave Witch",
    identifier: "ENEMY",
    image: "",
    type: ENEMY_TYPES.UNDEAD,
    // audio: {},
    level: 6,
    currentHealth: 40,
    currentMana: 0,
    stats: {
      baseStrength: 1,
      baseAgility: 2,
      baseArcana: 3,
    },
    weaknesses: [],
    resistances: [],
    immunities: ["POISONED"],
    behavior: "RANDOM",
    statusEffects: [],
  },
  DEATH_KNIGHT: {
    name: "Death Knight",
    identifier: "ENEMY",
    image: "",
    type: ENEMY_TYPES.UNDEAD,
    // audio: {},
    level: 7,
    currentHealth: 40,
    currentMana: 0,
    stats: {
      baseStrength: 4,
      baseAgility: 3,
      baseArcana: 0,
    },
    weaknesses: [],
    resistances: [],
    immunities: ["POISONED"],
    behavior: "RANDOM",
    statusEffects: [],
  },
  FLOOD_OF_BONES: {
    name: "Flood of Bones",
    identifier: "ENEMY",
    image: "",
    type: ENEMY_TYPES.UNDEAD,
    // audio: {},
    level: 8,
    currentHealth: 160,
    currentMana: 0,
    stats: {
      baseStrength: 8,
      baseAgility: 0,
      baseArcana: 0,
    },
    weaknesses: [],
    resistances: [],
    immunities: ["POISONED"],
    behavior: "ERRATIC",
    statusEffects: [],
  },
};

export { UNDEAD };
