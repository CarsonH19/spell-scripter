import store from "../store/index";

const spellPower = store.getState().player.stats.arcana.spellPower;

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
      baseDamage: 10,
      manaCost: 10,
    },
    {
      name: "Frostbite",
      school: `Novice Evocation`,
      // description: (spellPower) => {
      //   return `Envelope an enemy in frost, dealing 8 - ${
      //     spellPower + 8
      //   } Ice damage.`;
      // },
      image: "",
      spellTarget: "ENEMIES",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.ICE,
      baseDamage: 16,
      manaCost: 10,
    },
    {
      name: "Shock",
      school: `Novice Evocation`,
      // description: (spellPower) => {
      //   return `Shock an enemy with static electricity, dealing 10 - ${
      //     spellPower + 10
      //   } Lightning damage.`;
      // },
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
      description: `Shoot a ball of fire that explodes, dealing ${spellPower} to ${
        spellPower + 8
      } fire damage to all enemies.`,
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
      description: `Shoot a bolt of lighting which has a chance to leap to additional targets, dealing ${spellPower} to ${
        spellPower + 12
      } lightning damage to each target it hits.`,
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
      description: `Evoke frigid wind to cover the area, dealing ${spellPower} ice damage for 3 rounds.`,
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
      description: `Incinerate a Burning enemy that has 30HP or less.`,
      image: "",
      spellTarget: "ENEMY",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.FIRE,
      baseDamage: 30,
      manaCost: 10,
    },
    {
      name: "Storm",
      school: `Adept Evocation`,
      description: `Evoke a lightning storm that strikes a random enemy for 5 rounds, dealing ${spellPower} to ${
        spellPower + 12
      } lightning damage.`,
      image: "",
      spellTarget: "ENEMy",
      spellType: "HIT",
      damageType: DAMAGE_TYPES.LIGHTNING,
      baseDamage: 16,
      manaCost: 30,
    },
    {
      name: "Meteor",
      school: `Master Evocation`,
      description: `Rain down cataclysmic fire, Burning and dealing ${spellPower} to ${
        spellPower + 24
      } fire damage to all enemies.`,
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
