const DAMAGE_TYPES = {
  PHYSICAL: "PHYSICAL",
  FIRE: "FIRE",
  POISON: "POISON",
};

export const SPELLS = {
  EVOCATION: {
    FIREBOLT: {
      name: "Firebolt",
      image: "",
      spellTarget: "ENEMY",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.FIRE,
      baseDamage: 16,
      manaCost: 10,
      // function: () => {
      //   // spell logic
      //   // roll for damage & add spell power
      //   // dispatch changeMana
      //   // return response object { value, change };
      // },
    },
  },
  RESORATION: {
    LESSER_HEAL: {
      name: "Lesser Heal",
      image: "",
      spellTarget: "ALLY",
      spellType: "HEAL",
      healValue: 10,
      manaCost: 10,
    },
  },

  ABJURATION: {},
};

export let spellList = [
  SPELLS.EVOCATION.FIREBOLT,
  SPELLS.RESORATION.LESSER_HEAL,
];
