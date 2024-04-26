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
  ABJURATION: {},
};

export let spellList = [SPELLS.EVOCATION.FIREBOLT];
