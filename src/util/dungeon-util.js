import { dungeonActions } from "../store/dungeon-slice";

import { UNDEAD } from "../data/enemies";

import {
  COFFIN,
  DUNGEON_ENTRANCE,
  PATHS,
  TRAPS,
  BONEVAULT,
  CANDLELIGHT_SHRINE,
  WAILING_WARRENS_EXIT,
  UNLOCK_HERO,
  AMBUSH,
} from "../data/events";

import store from "../store/index";

import { v4 as uuidv4 } from "uuid";
import { checkForActiveQuest } from "./quest-util";

import { getRoomDialogue } from "./dialogue-util";
import heroes from "../data/heroes";

export function setDungeon(dispatch, dungeonName) {
  let dungeon = {
    name: "",
    path: null,
    pathCounter: null,
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
      dungeon.pathCounter = null;
      dungeon.threat = 0;
      dungeon.image =
        "src/assets/images/backgrounds/the-great-catacomb/catacomb-entrance.jpg";
      // dungeon.music = '' // Dungeon entrance music
      dungeon.contents; // add Entrance event
      break;
  }

  dispatch(dungeonActions.updateRoom(dungeon));
}

// =====================================================================
//                          CREATE NEW ROOM
// =====================================================================
export function createNewRoom(dispatch) {
  const dungeon = store.getState().dungeon;

  let newRoom = {
    ...dungeon,
    pathCounter:
      dungeon.pathCounter > 0 ? dungeon.pathCounter - 1 : dungeon.pathCounter,
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

  const roomContent = getRoomContent();
  switch (roomContent) {
    case "EVENT":
      // get event
      newRoom.contents.event = getRoomEvent();
      break;

    case "ENEMIES":
      // get enemies
      newRoom.contents.enemies = getRoomEnemies();
      break;

    case "EXIT PATH":
      newRoom.contents.event = getPathExit();
  }

  // check for dialogue
  // TESTING DIALOGUE
  getRoomDialogue(dispatch, newRoom);

  // Get background after room contents have been determined
  newRoom.image = getRoomImage(newRoom);
  dispatch(dungeonActions.updateRoom(newRoom));
}

// =====================================================================
//                            CONTENTS
// =====================================================================

function getRoomContent() {
  const dungeon = store.getState().dungeon;
  const pathCounter = store.getState().dungeon.pathCounter;
  const eventChance = Math.floor(Math.random() * 100);
  let content;

  switch (dungeon.name) {
    case "The Great Catacomb":
      if (dungeon.path === "Wailing Warrens") {
        // NOTE - Currently set to always enemies
        content = "ENEMIES";
      }

      // Event chance for dungeon is 20%
      if (eventChance > 0) {
        content = "EVENT";
      } else {
        content = "ENEMIES";
      }
  }

  if (dungeon.path && pathCounter <= 0 && pathCounter !== null) {
    content = "EXIT PATH";
  }

  return content;
}

// =====================================================================
//                            EVENTS
// =====================================================================

function getRoomEvent() {
  const dungeon = store.getState().dungeon;
  let events = [];

  // check dungeon
  switch (dungeon.name) {
    case "The Great Catacomb":
      // Add general non-path events
      if (!dungeon.path) {
        // Traps
        // for (let i = 0; i < TRAPS.length; i++) {
        //   events.push(TRAPS[i]);
        // }
        events.push(AMBUSH);
        // events.push(COFFIN);
        // events.push(PATHS[0]);
        // events.push(BONEVAULT);
        // events.push(CANDLELIGHT_SHRINE);

        // // Check if Siggurd is unlocked
        // if (!heroes[0].unlocked) {
        //   events.push(UNLOCK_HERO.SIGGURD);
        // }
      }

      // Add path specific events
      if (dungeon.path === "Wailing Warrens") {
        // Ghostly Choir
        // Whispering Wall
        // Echoing Bells
      }
      break;
  }

  // check heroes & quests
  // check threat

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

// =====================================================================
//                                ENEMIES
// =====================================================================

export function getRoomEnemies() {
  const dungeon = store.getState().dungeon;
  const threat = store.getState().dungeon.threat;
  let enemiesArray = [];
  let enemyTypes;
  let numberOfEnemies;

  switch (dungeon.path) {
    case "Wailing Warrens":
      {
        // QUEST - Siggurd - 2
        if (
          checkForActiveQuest("Siggurd", "Wails of the Banshee") &&
          dungeon.pathCounter === 1
        ) {
          enemyTypes = [{ enemy: UNDEAD.BANSHEE, probability: 1 }];
          numberOfEnemies = 1;
        } else {
          enemyTypes = [
            { enemy: UNDEAD.WANDERING_WISP, probability: 0.1 },
            { enemy: UNDEAD.SHADOW, probability: 0.9 },
          ];
          numberOfEnemies = 3;
        }
      }
      break;

    default:
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
        numberOfEnemies = 0;
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
  const image = enemy.image; // Call the image getter once and store the result
  return {
    ...enemy,
    image: image,
    icon: `${image}-icon`,
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

// =====================================================================
//                                IMAGE
// =====================================================================

function getRoomImage(dungeon) {
  let imageList = [];

  // Use general dungeon images
  switch (dungeon.name) {
    case "The Great Catacomb":
      {
        // Number of images in the assets folder
        const images = 27;
        imageList = [];
        for (let i = 1; i < images; i++)
          [
            imageList.push(`src/assets/images/backgrounds/the-great-catacomb/catacomb-${i}.jpg
      `),
          ];
      }
      break;
  }

  // Check for path specific backgrounds (replaces dungeon imageList)
  if (dungeon.path) {
    switch (dungeon.path) {
      case "Wailing Warrens":
        {
          // Number of images in the assets folder
          const images = 10;
          imageList = [];
          for (let i = 1; i < images; i++)
            [
              imageList.push(`src/assets/images/backgrounds/wailing-warrens/wailing-warrens-${i}.jpg
        `),
            ];
        }
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
          "src/assets/images/backgrounds/events/bonevault-1.jpg",
          "src/assets/images/backgrounds/events/bonevault-2.jpg",
          "src/assets/images/backgrounds/events/bonevault-3.jpg",
          "src/assets/images/backgrounds/events/bonevault-4.jpg",
        ];
        break;

      case "Candlelight Shrine":
        imageList = [
          "src/assets/images/backgrounds/events/candlelight-shrine-1.jpg",
        ];
        break;

      case "Wailing Warrens":
        imageList = [
          "src/assets/images/backgrounds/events/wailing-warrens-entrance-1.jpg",
          "src/assets/images/backgrounds/events/wailing-warrens-entrance-2.jpg",
          "src/assets/images/backgrounds/events/wailing-warrens-entrance-3.jpg",
        ];
        break;

      case "Wailing Warrens Exit":
        imageList = [
          "src/assets/images/backgrounds/wailing-warrens/wailing-warrens-exit-1.jpg",
          "src/assets/images/backgrounds/wailing-warrens/wailing-warrens-exit-2.jpg",
          "src/assets/images/backgrounds/wailing-warrens/wailing-warrens-exit-3.jpg",
        ];
        break;

      default:
        break;
    }
  }

  const randomIndex = Math.floor(Math.random() * imageList.length);
  return imageList[randomIndex];
}

// =====================================================================
//                                PATH
// =====================================================================

function getPathExit() {
  const path = store.getState().dungeon.path;

  switch (path) {
    case "Wailing Warrens":
      return WAILING_WARRENS_EXIT;
      break;
  }
}
