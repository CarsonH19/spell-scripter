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
    // Level 1 - Strength 2 - Agility 0 - Arcana 1
    TWO: { level: 2, strength: 3, agility: 0, arcana: 1 },
    THREE: { level: 3, strength: 3, agility: 1, arcana: 1 },
    FOUR: { level: 4, strength: 4, agility: 1, arcana: 1 },
    FIVE: { level: 5, strength: 4, agility: 1, arcana: 2 },
    SIX: { level: 6, strength: 5, agility: 1, arcana: 2 },
    SEVEN: { level: 7, strength: 5, agility: 1, arcana: 3 },
    EIGHT: { level: 8, strength: 6, agility: 1, arcana: 3 },
    NINE: { level: 9, strength: 6, agility: 2, arcana: 3 },
  },
  RIVEN: {
    // Level 1 - Strength 1 - Agility 2 - Arcana 0
    TWO: { level: 2, strength: 1, agility: 3, arcana: 0 },
    THREE: { level: 3, strength: 1, agility: 4, arcana: 0 },
    FOUR: { level: 4, strength: 2, agility: 4, arcana: 0 },
    FIVE: { level: 5, strength: 2, agility: 5, arcana: 0 },
    SIX: { level: 6, strength: 2, agility: 6, arcana: 0 },
    SEVEN: { level: 7, strength: 2, agility: 7, arcana: 0 },
    EIGHT: { level: 8, strength: 2, agility: 8, arcana: 0 },
    NINE: { level: 9, strength: 3, agility: 8, arcana: 0 },
  },
  LIHETH: {
    // Level 1 - Strength 0 - Agility 1 - Arcana 2
    TWO: { level: 2, strength: 0, agility: 1, arcana: 3 },
    THREE: { level: 3, strength: 1, agility: 1, arcana: 3 },
    FOUR: { level: 4, strength: 1, agility: 1, arcana: 4 },
    FIVE: { level: 5, strength: 1, agility: 2, arcana: 4 },
    SIX: { level: 6, strength: 1, agility: 2, arcana: 5 },
    SEVEN: { level: 7, strength: 1, agility: 3, arcana: 5 },
    EIGHT: { level: 8, strength: 1, agility: 3, arcana: 6 },
    NINE: { level: 9, strength: 2, agility: 3, arcana: 6 },
  },
};
