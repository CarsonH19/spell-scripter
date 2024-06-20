import heroes from "../data/heroes";

export function unlockHero(name) {
  for (let i = 0; i < heroes.length; i++) {
    if (heroes[i].name === name) {
      if (change === "UNLOCK") {
        heroes[i].unlocked = true;
      }
    }
  }
}

export function levelUpHero(name, map) {
  for (let i = 0; i < heroes.length; i++) {
    if (heroes[i].name === name) {
      heroes[i].level = map.level;
      heroes[i].stats.baseStrength = map.strength;
      heroes[i].stats.baseAgility = map.agility;
      heroes[i].stats.baseArcana = map.arcana;
    }
  }
}

export const HERO_LEVELING_MAP = {
  SIGGURD: {
    TWO: { level: 2, strength: 5, agility: 0, arcana: 0 },
    THREE: { strength: 0, agility: 0, arcana: 0 },
    FOUR: { strength: 0, agility: 0, arcana: 0 },
    FIVE: { strength: 0, agility: 0, arcana: 0 },
    SIX: { strength: 0, agility: 0, arcana: 0 },
    SEVEN: { strength: 0, agility: 0, arcana: 0 },
    EIGHT: { strength: 0, agility: 0, arcana: 0 },
    NINE: { strength: 0, agility: 0, arcana: 0 },
  },
};
