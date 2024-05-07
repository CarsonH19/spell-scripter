const DAMAGE_TYPES = {
  PHYSICAL: "PHYSICAL",
  FIRE: "FIRE",
  POISON: "POISON",
};

const SPELLS = {
  evocation: [
    {
      name: "Firebolt",
      school: "Evocation",
      description: "Fire ow ow burn",
      unlocked: true,
      image: "",
      spellTarget: "ENEMY",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.FIRE,
      baseDamage: 10,
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

// export let spellList = [
//   SPELLS.EVOCATION.FIREBOLT,
//   SPELLS.RESORATION.LESSER_HEAL,
// ];

export function changeSpellAccess(school, spell, change) {
  for (let i = 0; i < school.length; i++) {
    if (school[i].name === spell.name) {
      if (change === "UNLOCK") {
        school[i].unlocked = true;
      } else if (change === "LOCK") {
        school[i].unlocked = false;
      }
    }
  }
}

export default SPELLS;
