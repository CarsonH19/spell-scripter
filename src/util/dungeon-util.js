import { dungeonActions } from "../store/dungeon-slice";

import { UNDEAD } from "../data/enemies";

import {
  COFFIN,
  DUNGEON_ENTRANCE,
  PATHS,
  TRAPS,
  BONEVAULT,
  CANDLELIGHT_SHRINE,
} from "../data/events";

import store from "../store/index";

import { v4 as uuidv4 } from "uuid";

export function setDungeon(dispatch, dungeonName) {
  let dungeon = {
    name: "",
    path: null,
    roomCounter: 0,
    threat: 0,
    image: null,
    music: null,
    contents: {
      enemies: [],
      items: [],
      event: DUNGEON_ENTRANCE,
    },
  };

  switch (dungeonName) {
    case "The Great Catacomb":
      dungeon.name = "The Great Catacomb";
      dungeon.path = null;
      dungeon.threat = 0;
      dungeon.image = "src/assets/images/backgrounds/catacomb-entrance.png";
      // dungeon.music = '' // Dungeon entrance music
      dungeon.contents; // add Entrance event
      break;
  }

  dispatch(dungeonActions.updateRoom(dungeon));
}

export function createNewRoom(dispatch) {
  const dungeon = store.getState().dungeon;

  let newRoom = {
    ...dungeon,
    roomCounter: dungeon.roomCounter + 1,
    threat: dungeon.threat + 1,
    danger: true,
    image: null,
    music: null,
    contents: {
      roomName: "",
      enemies: [],
      items: [],
      event: null,
    },
  };

  // if (dungeon.roomCounter % 10) {
  // // check threat
  // // Get random path event
  // } else {
  const roomContent = getRoomContent();
  switch (roomContent) {
    case "EVENT":
      // get Event
      newRoom.contents.event = getRoomEvent();
      break;

    default:
      // get monsters
      newRoom.contents.enemies = getRoomEnemies();
      break;
  }
  // }

  // Get background after room contents have been determined 
  newRoom.image = getRoomImage(newRoom);
  dispatch(dungeonActions.updateRoom(newRoom));
}

// // Determine if room will contain an event or monsters.
function getRoomContent() {
  const eventChance = Math.floor(Math.random() * 100);
  if (eventChance > 50) {
    // 79
    // ~20% Chance for an event
    return "EVENT";
  } else {
    return "ENEMIES";
  }
}

function getRoomEvent() {
  const dungeon = store.getState().dungeon;
  let events = [];

  // check dungeon
  switch (dungeon.name) {
    case "The Great Catacomb":
      // Add general non-path events
      if (!dungeon.path) {
        for (let i = 0; i < TRAPS.length; i++) {
          events.push(TRAPS[i]);
        }
        events.push(COFFIN);
        events.push(PATHS[0]);
        events.push(BONEVAULT);
        events.push(CANDLELIGHT_SHRINE);
      }

      // Add path specific events
      if (dungeon.path === "Wailing Warrens") {
        events.push(COFFIN);
      }
      break;
  }

  // check heroes
  // check threat

  // Change to use a threat greater than 10
  // if (dungeon.threat > 0 && !dungeon.path) {
  // Change to not use index
  // }
  console.log("EVENTS", events);
  // Randomly choose an event from the new array
  const randomIndex = Math.floor(Math.random() * events.length);
  return events[randomIndex];
}

function checkHero(heroName) {
  const order = store.getState().combat.order;
  const heroes = order.filter((hero) => hero.identifier === "HERO");
  const isHero = heroes.find((hero) => hero.name === heroName);
  if (isHero) {
    return true;
  } else {
    return false;
  }
}

export function getRoomEnemies() {
  const dungeon = store.getState().dungeon;
  const threat = store.getState().dungeon.threat;
  let enemiesArray = [];
  let enemyTypes;
  let numberOfEnemies;

  switch (dungeon.path) {
    case "Wailing Warrens": {
      enemyTypes = [
        { enemy: UNDEAD.LOST_SOUL, probability: 0.4 },
        { enemy: UNDEAD.SHADOW, probability: 0.4 },
        { enemy: UNDEAD.BANSHEE, probability: 0.2 },
      ];

      numberOfEnemies = 3;
      break;
    }

    case null:
      {
        enemyTypes = [
          { enemy: UNDEAD.DECREPIT_SKELETON, probability: 0.4 },
          { enemy: UNDEAD.SKELETAL_WARRIOR, probability: 0.2 },
          { enemy: UNDEAD.SKELETAL_ARCHER, probability: 0.2 },
          { enemy: UNDEAD.SKELETAL_MAGE, probability: 0.2 },
        ];

        // Adjust enemy types based on threat level
        if (threat > 60) {
          // extremely high tier enemies
          enemyTypes = [
            { enemy: UNDEAD.GRAVE_WITCH, probability: 0.2 },
            { enemy: UNDEAD.BONE_TITAN, probability: 0.3 },
            { enemy: UNDEAD.REAPER, probability: 0.3 },
            { enemy: UNDEAD.DEATH_KNIGHT, probability: 0.1 },
            { enemy: UNDEAD.FLOOD_OF_BONES, probability: 0.1 },
          ];
        } else if (threat > 40) {
          // high tier enemies
          enemyTypes = [
            { enemy: UNDEAD.GRAVE_WITCH, probability: 0.1 },
            { enemy: UNDEAD.BONE_TITAN, probability: 0.3 },
            { enemy: UNDEAD.REAPER, probability: 0.3 },
            { enemy: UNDEAD.CORPSE_ORACLE, probability: 0.2 },
          ];
        } else if (threat > 20) {
          // mid tier enemies
          enemyTypes = [
            { enemy: UNDEAD.BONE_TITAN, probability: 0.1 },
            { enemy: UNDEAD.REAPER, probability: 0.1 },
            { enemy: UNDEAD.CORPSE_ORACLE, probability: 0.2 },
            { enemy: UNDEAD.SKELETAL_WARRIOR, probability: 0.2 },
            { enemy: UNDEAD.SKELETAL_ARCHER, probability: 0.2 },
            { enemy: UNDEAD.SKELETAL_MAGE, probability: 0.2 },
          ];
        }

        // Calculate the number of enemies based on the threat level
        numberOfEnemies;
        if (threat >= 80) {
          numberOfEnemies = 5;
        } else if (threat >= 60) {
          numberOfEnemies = Math.floor(Math.random() * 2) + 4; // Between 4 to 5 enemies
        } else if (threat >= 40) {
          numberOfEnemies = Math.floor(Math.random() * 2) + 3; // Between 3 to 4 enemies
        } else if (threat >= 20) {
          numberOfEnemies = Math.floor(Math.random() * 2) + 2; // Between 2 to 3 enemies
        } else {
          numberOfEnemies = Math.floor(Math.random() * 2) + 1; // Between 1 to 2 enemies
        }
      }

      break;
  }

  // Generate random enemies based on their probabilities
  for (let i = 0; i < numberOfEnemies; i++) {
    let rand = Math.random();
    let cumulativeProbability = 0;

    // Shuffle the enemy types before each selection
    const shuffledEnemyTypes = shuffle([...enemyTypes]);

    for (const { enemy, probability } of shuffledEnemyTypes) {
      cumulativeProbability += probability;
      if (rand <= cumulativeProbability) {
        enemiesArray.push(buildEnemy(enemy));
        break;
      }
    }
  }

  return enemiesArray;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function buildEnemy(enemy) {
  const baseStats = constructStats(enemy.stats);
  return {
    ...enemy,
    stats: baseStats,
    id: uuidv4(),
    damageDisplay: "",
  };
}

export function constructStats(stats) {
  return {
    baseStrength: stats.baseStrength,
    strength: {
      totalStrength: 0,
      attack: 0,
      maxHealth: 0,
      healthRegen: 0,
    },
    baseAgility: stats.baseAgility,
    agility: {
      totalAgility: 0,
      defense: 0,
      speed: 0,
      hitChance: 0,
    },
    baseArcana: stats.baseArcana,
    arcana: {
      totalArcana: 0,
      spellPower: 0,
    },
  };
}

function getRoomImage(dungeon) {
  let imageList = [];

  // Use general dungeon images
  switch (dungeon.name) {
    case "The Great Catacomb":
      imageList = [
        "src/assets/images/backgrounds/catacomb-1.png",
        "src/assets/images/backgrounds/catacomb-2.png",
        "src/assets/images/backgrounds/catacomb-3.png",
        "src/assets/images/backgrounds/catacomb-4.png",
        "src/assets/images/backgrounds/catacomb-5.png",
        "src/assets/images/backgrounds/catacomb-6.png",
        "src/assets/images/backgrounds/catacomb-7.png",
        "src/assets/images/backgrounds/catacomb-8.png",
        "src/assets/images/backgrounds/catacomb-9.png",
        // "src/assets/images/backgrounds/catacomb-10.png",
        "src/assets/images/backgrounds/catacomb-11.png",
        "src/assets/images/backgrounds/catacomb-12.png",
        // "src/assets/images/backgrounds/catacomb-13.png",
        "src/assets/images/backgrounds/catacomb-14.png",
        "src/assets/images/backgrounds/catacomb-15.png",
        "src/assets/images/backgrounds/catacomb-16.png",
        // "src/assets/images/backgrounds/catacomb-17.png",
        "src/assets/images/backgrounds/catacomb-20.png",
      ];
      break;
  }

  // Check for path specific backgrounds (replaces dungeon imageList)
  if (dungeon.path) {
    switch (dungeon.path.name) {
      case "Wailing Warrens":
        imageList = [];
        break;

      default:
        break;
    }
  }

  // Check for event specific backgrounds (replaces dungeon & path imageList)
  if (dungeon.contents.event) {
    switch (dungeon.contents.event.name) {
      case "Bonevault":
        imageList = [
          "src/assets/images/backgrounds/bonevault-1.png",
          "src/assets/images/backgrounds/bonevault-2.png",
          "src/assets/images/backgrounds/bonevault-3.png",
          "src/assets/images/backgrounds/bonevault-4.png",
        ];
        break;

      // case "Candlelight Shrine":
      //   imageList = []; // NOTE: Add image
      //   break;

      default:
        break;
    }
  }

  console.log(imageList);

  const randomIndex = Math.floor(Math.random() * imageList.length);
  return imageList[randomIndex];
}
