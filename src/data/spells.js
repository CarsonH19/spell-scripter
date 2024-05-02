const DAMAGE_TYPES = {
  PHYSICAL: "PHYSICAL",
  FIRE: "FIRE",
  POISON: "POISON",
};

const SPELLS = {
  evocation: [
    {
      name: "Firebolt",
      unlocked: true,
      image: "",
      spellTarget: "ENEMY",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.FIRE,
      baseDamage: 16,
      manaCost: 10,
    },
    {
      name: "Fireball",
      unlocked: false,
      image: "",
      spellTarget: "ENEMY",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.FIRE,
      baseDamage: 16,
      manaCost: 10,
    },
  ],
  restoration: [
    {
      name: "Lesser Heal",
      unlocked: true,
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
      unlocked: true,
      image: "",
      spellTarget: "ALLY",
      spellType: "BUFF",
      value: 1,
      manaCost: 10,
    },
  ],
};


// export let spellList = [
//   SPELLS.EVOCATION.FIREBOLT,
//   SPELLS.RESORATION.LESSER_HEAL,
// ];

export function changeSpellAccess(school, spell, change) {
  for (let i = 0; i < school.length; i++) {
    if (school[i].name === spell.name) {
      if (change === "UNLOCK") {
        school[i].unlock = true;
      } else if (change === "LOCK") {
        school[i].unlock = false;
      }
    }
  }
}

export default SPELLS;
