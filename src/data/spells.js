import store from "../store/index";

// const spellPower = store.getState().player.stats.arcana.spellPower;

const DAMAGE_TYPES = {
  PHYSICAL: "PHYSICAL",
  FIRE: "FIRE",
  ICE: "ICE",
  LIGHTNING: "LIGHTNING",
  POISON: "POISON",
};

const SPELLS = {
  evocation: [
    {
      name: "Firebolt",
      school: `Novice Evocation`,
      image: "",
      spellTarget: "ENEMY",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.FIRE,
      baseDamage: 6,
      manaCost: 10,
    },
    {
      name: "Frostbite",
      school: `Novice Evocation`,
      image: "",
      spellTarget: "ENEMIES",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.ICE,
      baseDamage: 8,
      manaCost: 10,
    },
    {
      name: "Shock",
      school: `Novice Evocation`,
      image: "",
      spellTarget: "ENEMIES",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.LIGHTNING,
      baseDamage: 10,
      manaCost: 10,
    },
    {
      name: "Fireball",
      school: `Apprentice Evocation`,
      image: "",
      spellTarget: "ENEMIES",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.FIRE,
      baseDamage: 8,
      manaCost: 30,
    },
    {
      name: "Chain Lightning",
      school: `Apprentice Evocation`,
      image: "",
      spellTarget: "ENEMy",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.LIGHTNING,
      baseDamage: 16,
      manaCost: 10,
    },
    {
      name: "Blizzard",
      school: `Adept Evocation`,
      image: "",
      spellTarget: "ENEMIES",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.ICE,
      baseDamage: 0,
      manaCost: 30,
    },
    {
      name: "Immolate",
      school: `Adept Evocation`,
      // description: `Incinerate a Burning enemy that has 30HP or less.`,
      image: "",
      spellTarget: "ENEMY",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.FIRE,
      baseDamage: 30,
      manaCost: 10,
    },
    {
      name: "Storm Sphere",
      school: `Adept Evocation`,
      image: "",
      spellTarget: "ENEMy",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.LIGHTNING,
      baseDamage: 16,
      manaCost: 30,
    },
    {
      name: "Meteor",
      school: `Expert Evocation`,
      image: "",
      spellTarget: "ENEMIES",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.FIRE,
      baseDamage: 16,
      manaCost: 10,
    },
  ],
  restoration: [
    {
      name: "Lesser Heal",
      image: "",
      spellTarget: "ALLY",
      spellType: "HEAL",
      healValue: 10,
      manaCost: 10,
    },
  ],
  abjuration: [
    {
      name: "Bark Skin",
      image: "",
      spellTarget: "ALLY",
      spellType: "BUFF",
      statusEffect: {
        name: "Bark Skin",
        display: true,
        image: "",
        description: "+1 Defense",
        duration: 3,
        stats: {
          agility: {
            defense: +1,
          },
        },
      },
      manaCost: 10,
    },
  ],
};

export default SPELLS;
