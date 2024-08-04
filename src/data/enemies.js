import CONSUMABLES from "./consumables";
import EQUIPMENT from "./equipment";
import { getImageFromList } from "../util/misc-util";
import CONDITIONS from "./conditions";

const ENEMY_TYPES = {
  HOUND: "HOUND",
  HUMANOID: "HUMANOID",
  UNDEAD: "UNDEAD",
  DEMON: "DEMON",
};

const DAMAGE_TYPES = {
  PHYSICAL: "PHYSICAL",
  FIRE: "FIRE",
  POISON: "POISON",
  RADIANT: "RADIANT",
};

// const CONDITIONS = {
//   DISEASED: "DISEASED",
//   POISONED: "POISONED",
//   HAUNTED: "HAUNTED",
//   WEBBED: "WEBBED",
// };

const UNDEAD = {
  // =====================================
  //             SKELETONS
  // =====================================
  DECREPIT_SKELETON: {
    name: "Decrepit Skeleton",
    identifier: "ENEMY",
    get image() {
      return getImageFromList("src/assets/images/enemies/decrepit-skeleton", 5);
    },
    get icon() {
      return `${this.image}-icon`;
    },
    type: ENEMY_TYPES.UNDEAD,
    audio: {
      spawn: [false, "spawn", "boneCrunchCrack1"],
      attack: [true, "lightWeapon"],
      death: [true, "boneBreak"],
    },
    level: 1,
    currentHealth: 10,
    currentMana: 0,
    stats: {
      baseStrength: 0,
      baseAgility: 0,
      baseArcana: 0,
    },
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: [],
    behavior: "ERRATIC",
    statusEffects: [],
    lootTable: [
      { item: CONSUMABLES.GRAVEBLOOM, probability: 0.03 },
      { item: CONSUMABLES.ROTBANE_FERN, probability: 0.03 },
      { item: CONSUMABLES.MARROWSTONE_CHEESE, probability: 0.03 },
      { item: CONSUMABLES.CRYPTBREAD, probability: 0.03 },
      { item: CONSUMABLES.SKELETON_KEY, probability: 0.01 },
      { item: EQUIPMENT.BONEMAIL, probability: 0.01 },
      { item: null, probability: 0.85 },
    ],
  },
  SKELETAL_WARRIOR: {
    name: "Skeletal Warrior",
    identifier: "ENEMY",
    get image() {
      return getImageFromList("src/assets/images/enemies/skeletal-warrior", 3);
    },
    get icon() {
      return `${this.image}-icon`;
    },
    type: ENEMY_TYPES.UNDEAD,
    audio: {
      spawn: [false, "spawn", "boneCrunchCrack1"],
      attack: [true, "heavyWeapon", null, 0.5],
      death: [true, "boneBreak"],
    },
    level: 2,
    currentHealth: 40,
    currentMana: 0,
    stats: {
      baseStrength: 2,
      baseAgility: 0,
      baseArcana: 0,
    },
    passive: {
      name: "Rattle of War",
      description: `Undead enemies have their Attack increased while in the presence of a skeletal warrior.`,
      when: "START_OF_ROUND",
      function: "RATTLE_OF_WAR",
    },
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: [],
    behavior: "ERRATIC",
    statusEffects: [],
    lootTable: [
      { item: CONSUMABLES.GRAVEBLOOM, probability: 0.03 },
      { item: CONSUMABLES.ROTBANE_FERN, probability: 0.03 },
      { item: CONSUMABLES.MARROWSTONE_CHEESE, probability: 0.03 },
      { item: CONSUMABLES.CRYPTBREAD, probability: 0.03 },
      { item: CONSUMABLES.SKELETON_KEY, probability: 0.01 },
      { item: EQUIPMENT.BONEMAIL, probability: 0.01 },
      { item: EQUIPMENT.GHOULBONE_HELMET, probability: 0.01 },
      { item: null, probability: 0.85 },
    ],
  },
  SKELETAL_ARCHER: {
    name: "Skeletal Archer",
    identifier: "ENEMY",
    get image() {
      return getImageFromList("src/assets/images/enemies/skeletal-archer", 3);
    },
    icon() {
      return `${this.image}-icon`;
    },
    type: ENEMY_TYPES.UNDEAD,
    audio: {
      spawn: [false, "spawn", "boneCrunchCrack1"],
      attack: [true, "bowAttack"],
      death: [true, "boneBreak"],
    },
    level: 2,
    currentHealth: 20,
    currentMana: 0,
    stats: {
      baseStrength: 0,
      baseAgility: 2,
      baseArcana: 0,
    },
    abilityA: {
      name: "Multi-shot",
      description: `The skeletal archer fires an additional arrow at a random target.`,
      cooldown: 3,
      reset: 3,
      focus: "HEROES",
      function: "MULTI_SHOT",
    },
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: [],
    behavior: "ERRATIC",
    statusEffects: [],
    lootTable: [
      { item: CONSUMABLES.GRAVEBLOOM, probability: 0.03 },
      { item: CONSUMABLES.ROTBANE_FERN, probability: 0.03 },
      { item: CONSUMABLES.MARROWSTONE_CHEESE, probability: 0.03 },
      { item: CONSUMABLES.CRYPTBREAD, probability: 0.03 },
      { item: CONSUMABLES.SKELETON_KEY, probability: 0.01 },
      { item: EQUIPMENT.BONEMAIL, probability: 0.01 }, // change to a bow
      { item: EQUIPMENT.GHOULBONE_GREAVES, probability: 0.01 },
      { item: null, probability: 0.85 },
    ],
  },
  SKELETAL_MAGE: {
    name: "Skeletal Mage",
    identifier: "ENEMY",
    get image() {
      return getImageFromList("src/assets/images/enemies/skeletal-mage", 3);
    },
    get icon() {
      return `${this.image}-icon`;
    },
    type: ENEMY_TYPES.UNDEAD,
    audio: {
      spawn: [false, "spawn", "boneCrunchCrack1"],
      attack: [false, "magic", "iceCrackFreeze"],
      death: [true, "boneBreak"],
    },
    level: 2,
    currentHealth: 30,
    currentMana: 0,
    stats: {
      baseStrength: 0,
      baseAgility: 0,
      baseArcana: 2,
    },
    abilityA: {
      name: "Chill of the Grave",
      description: `The skeletal mage conjures a ghostly hand, assailing a target with the chill of the grave.`,
      cooldown: 3,
      reset: 3,
      focus: "HEROES",
      function: "CHILL_OF_THE_GRAVE",
    },
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: [],
    behavior: "ERRATIC",
    statusEffects: [],
    lootTable: [
      { item: CONSUMABLES.GRAVEBLOOM, probability: 0.03 },
      { item: CONSUMABLES.ROTBANE_FERN, probability: 0.03 },
      { item: CONSUMABLES.MARROWSTONE_CHEESE, probability: 0.03 },
      { item: CONSUMABLES.CRYPTBREAD, probability: 0.03 },
      { item: CONSUMABLES.SKELETON_KEY, probability: 0.01 },
      { item: EQUIPMENT.BONEMAIL, probability: 0.01 }, // change to a wand
      { item: EQUIPMENT.GHOULBONE_ARMGUARDS, probability: 0.01 },
      { item: null, probability: 0.85 },
    ],
  },
  BONE_TITAN: {
    name: "Bone Titan",
    identifier: "ENEMY",
    image: "",
    type: ENEMY_TYPES.UNDEAD,
    get image() {
      return getImageFromList("src/assets/images/enemies/bone-titan", 4);
    },
    get icon() {
      return `${this.image}-icon`;
    },
    level: 5,
    currentHealth: 90,
    currentMana: 0,
    stats: {
      baseStrength: 5,
      baseAgility: 0,
      baseArcana: 0,
    },
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: ["POISONED"],
    behavior: "RANDOM",
    statusEffects: [],
  },
  REAPER: {
    name: "Reaper",
    identifier: "ENEMY",
    get image() {
      return getImageFromList("src/assets/images/enemies/reaper", 4);
    },
    get icon() {
      return `${this.image}-icon`;
    },
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
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: ["POISONED"],
    behavior: "RANDOM",
    statusEffects: [],
  },
  GRAVE_WITCH: {
    name: "Grave Witch",
    identifier: "ENEMY",
    get image() {
      return getImageFromList("src/assets/images/enemies/grave-witch", 5);
    },
    get icon() {
      return `${this.image}-icon`;
    },
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
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: ["POISONED"],
    behavior: "RANDOM",
    statusEffects: [],
  },
  DEATH_KNIGHT: {
    name: "Death Knight",
    identifier: "ENEMY",
    get image() {
      return getImageFromList("src/assets/images/enemies/death-knight", 4);
    },
    get icon() {
      return `${this.image}-icon`;
    },
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
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: ["POISONED"],
    behavior: "RANDOM",
    statusEffects: [],
  },
  FLOOD_OF_BONES: {
    name: "Flood of Bones",
    identifier: "ENEMY",
    get image() {
      return getImageFromList("src/assets/images/enemies/flood-of-bones", 4);
    },
    get icon() {
      return `${this.image}-icon`;
    },
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
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: ["POISONED"],
    behavior: "ERRATIC",
    statusEffects: [],
  },
  CORPSE_ORACLE: {
    name: "Corpse Oracle",
    identifier: "ENEMY",
    get image() {
      return getImageFromList("src/assets/images/enemies/corpse-oracle", 4);
    },
    get icon() {
      return `${this.image}-icon`;
    },
    type: ENEMY_TYPES.HUMANOID,
    // audio: {},
    level: 3,
    currentHealth: 0,
    currentMana: 0,
    stats: {
      baseStrength: 0,
      baseAgility: 2,
      baseArcana: 1,
    },
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: [],
    behavior: "ERRATIC",
    statusEffects: [CONDITIONS.INCORPOREAL],
    lootTable: [],
  },
  REAPER: {
    name: "Reaper",
    identifier: "ENEMY",
    get image() {
      return getImageFromList("src/assets/images/enemies/reaper", 3);
    },
    get icon() {
      return `${this.image}-icon`;
    },
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
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: ["POISONED"],
    behavior: "RANDOM",
    statusEffects: [],
  },
  GHAST: {
    name: "Ghast",
    identifier: "ENEMY",
    get image() {
      return getImageFromList("src/assets/images/enemies/ghast", 1);
    },
    get icon() {
      return `${this.image}-icon`;
    },
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
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: ["POISONED"],
    behavior: "RANDOM",
    statusEffects: [],
  },
  REAVER: {
    name: "Reaver",
    identifier: "ENEMY",
    get image() {
      return getImageFromList("src/assets/images/enemies/reaver", 1);
    },
    get icon() {
      return `${this.image}-icon`;
    },
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
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: ["POISONED"],
    behavior: "RANDOM",
    statusEffects: [],
  },

  // =====================================
  //             GHOSTS
  // =====================================
  WANDERING_WISP: {
    name: "Wandering Wisp",
    identifier: "ENEMY",
    get image() {
      return getImageFromList("src/assets/images/enemies/wandering-wisp", 3);
    },
    get icon() {
      return `${this.image}-icon`;
    },
    type: ENEMY_TYPES.UNDEAD,
    // audio: {},
    level: 1,
    currentHealth: 0,
    currentMana: 0,
    stats: {
      baseStrength: 0,
      baseAgility: 0,
      baseArcana: 0,
    },
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: [],
    behavior: "DEFENSIVE",
    statusEffects: [CONDITIONS.INCORPOREAL],
    lootTable: [],
  },
  SHADOW: {
    name: "Shadow",
    identifier: "ENEMY",
    get image() {
      return getImageFromList("src/assets/images/enemies/shadow", 4);
    },
    get icon() {
      return `${this.image}-icon`;
    },
    type: ENEMY_TYPES.UNDEAD,
    // audio: {},
    level: 2,
    currentHealth: 10,
    currentMana: 0,
    stats: {
      baseStrength: 0,
      baseAgility: 2,
      baseArcana: 0,
    },
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: [],
    behavior: "ERRATIC",
    statusEffects: [CONDITIONS.INCORPOREAL],
    lootTable: [],
  },
  BANSHEE: {
    name: "Banshee",
    identifier: "ENEMY",
    get image() {
      return "src/assets/images/enemies/banshee";
    },
    get icon() {
      return `${this.image}-icon`;
    },
    type: ENEMY_TYPES.UNDEAD,
    // audio: {},
    level: 3,
    currentHealth: 0,
    currentMana: 0,
    stats: {
      baseStrength: 0,
      baseAgility: 2,
      baseArcana: 1,
    },
    weaknesses: [DAMAGE_TYPES.RADIANT],
    resistances: [],
    immunities: [],
    behavior: "ERRATIC",
    statusEffects: [CONDITIONS.INCORPOREAL],
    lootTable: [],
  },
};

// =====================================
//             THIEVES
// =====================================

const THIEVES = {
  THIEF: {
    name: "Thief",
    identifier: "ENEMY",
    get image() {
      return getImageFromList("src/assets/images/enemies/thief", 4);
    },
    get icon() {
      return `${this.image}-icon`;
    },
    type: ENEMY_TYPES.HUMANOID,
    audio: {
      spawn: [false, "spawn", "swordFromSheath3"],
      attack: [true, "lightWeapon"],
      death: [true, "fightGrunt"],
    },
    level: 2,
    currentHealth: 20,
    currentMana: 0,
    stats: {
      baseStrength: 0,
      baseAgility: 2,
      baseArcana: 0,
    },
    abilityA: {
      name: "Venom Strike",
      description: `The thief deals damage to an enemy equal to his Attack and inflicts the Poisoned condition.`,
      cooldown: 0,
      reset: 3,
      focus: "LOWEST_HEALTH",
      function: "VENOM_STRIKE",
    },
    weaknesses: [],
    resistances: [],
    immunities: [],
    behavior: "RUTHLESS",
    statusEffects: [],
    lootTable: [
      { item: CONSUMABLES.MARROWSTONE_CHEESE, probability: 0.03 },
      { item: CONSUMABLES.CRYPTBREAD, probability: 0.03 },
      { item: CONSUMABLES.HEALTH_POTION, probability: 0.02 },
      { item: EQUIPMENT.PLAGUEBORN_SHAWL, probability: 0.01 },
      { item: EQUIPMENT.PLAGUEBORN_LEGWRAPS, probability: 0.01 },
      { item: EQUIPMENT.PLAGUEBORN_HANDWRAPS, probability: 0.01 },
      { item: EQUIPMENT.RING_OF_AMBUSH, probability: 0.02 },
      { item: EQUIPMENT.WHISPERING_DAGGER, probability: 0.02 },
      { item: null, probability: 0.85 },
    ],
  },
};

export { UNDEAD, THIEVES };
