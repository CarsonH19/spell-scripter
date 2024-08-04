import { dungeonActions } from "../store/dungeon-slice";

import { THIEVES, UNDEAD } from "../data/enemies";

import {
  COFFIN,
  GRAVESTONE,
  DUNGEON_ENTRANCE,
  PATH_ENTRANCE,
  PATH_EXIT,
  TRAPS,
  BONEVAULT,
  CANDLELIGHT_SHRINE,
  UNLOCK_HERO,
  AMBUSH,
  THIEVES_RUIN,
} from "../data/events";

import store from "../store/index";

import { v4 as uuidv4 } from "uuid";
import { checkForActiveQuest } from "./quest-util";

import { getImageFromList } from "./misc-util";
import { getTraderItems } from "../components/Modals/Trade/TradeModal";
import { getRandomCooldown } from "./misc-util";

export function setDungeon(dispatch, dungeonName) {
  let dungeon = {
    name: "",
    following: null,
    followCounter: 0,
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
      dungeon.following = null;
      dungeon.followCounter = 0;
      dungeon.path = null;
      dungeon.pathCounter = null;
      dungeon.threat = 0;
      dungeon.image =
        "src/assets/images/backgrounds/the-great-catacomb/catacomb-entrance";
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
    followCounter:
      dungeon.followCounter > 0
        ? dungeon.followCounter - 1
        : dungeon.followCounter,
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

  // Check if following & followCounter end
  if (dungeon.followCounter === 0) {
    dispatch(dungeonActions.beginFollowing(null));
  }

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

  // Get background after room contents have been determined
  newRoom.image = getRoomImage(newRoom);
  dispatch(dungeonActions.updateRoom(newRoom));
  console.log(newRoom);
}

// =====================================================================
//                            CONTENTS
// =====================================================================

function getRoomContent() {
  const dungeon = store.getState().dungeon;
  const pathCounter = dungeon.pathCounter;
  let eventChance = Math.floor(Math.random() * 100);
  let content;

  switch (dungeon.name) {
    case "The Great Catacomb":
      // Event chance for general dungeon is 20%
      if (eventChance > 100) {
        content = "EVENT";
      } else {
        content = "ENEMIES";
      }

      // WAILING WARRENS
      if (dungeon.path === "Wailing Warrens") {
        // NOTE - Currently set to always enemies
        content = "ENEMIES";
        // NOTE: add logic to check for path specific event chance here
      }

      // THIEVES' RUIN
      if (dungeon.path === "Thieves' Ruin") {
        // NOTE - Currently set to always enemies
        content = "ENEMIES";
        // Laughing Coffin Event & 40% event chance
        if (dungeon.pathCounter === 4 || eventChance > 60) {
          content = "EVENT";
        }
      }

      // NOTE:
      // FOLLOWING - change event chance when following
      if (dungeon.following) {
        content = "ENEMIES";
      }

      // FOLLOWING - check if following ends and an event must occur
      if (dungeon.followCounter === 1) {
        content = "EVENT";
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
  const heroes = store.getState().hero.heroes;
  const siggurd = heroes.find((hero) => hero.id === "Siggurd");
  const liheth = heroes.find((hero) => hero.id === "Liheth");

  const dungeon = store.getState().dungeon;
  let events = [];

  // check dungeon
  switch (dungeon.name) {
    case "The Great Catacomb":
      // DUNGEON EVENTS
      if (!dungeon.path && !dungeon.following) {
        // Traps
        // for (let i = 0; i < TRAPS.length; i++) {
        //   events.push(TRAPS[i]);
        // }

        events.push(AMBUSH);
        // events.push(COFFIN);
        // events.push(BONEVAULT);
        // events.push(GRAVESTONE);

        // // Check if Siggurd is unlocked
        // if (!siggurd.unlocked) {
        //   events.push(UNLOCK_HERO.SIGGURD);
        // }

        // // Check if Liheth is unlocked
        // if (!liheth.unlocked) {
        //   events.push(UNLOCK_HERO.LIHETH);
        // } else {
        //   events.push(CANDLELIGHT_SHRINE);
        // }
      }

      // FOLLOWING EVENTS
      if (
        dungeon.following === "Thieves' Ruin Map" &&
        dungeon.followCounter === 1
      ) {
        events.push(PATH_ENTRANCE.THIEVES_RUIN_ENTRANCE);
      }

      if (
        dungeon.following === "Wandering Wisp" &&
        dungeon.followCounter === 1
      ) {
        events.push(PATH_ENTRANCE.WAILING_WARRENS_ENTRANCE);
      }

      // PATH EVENTS
      if (dungeon.path === "Wailing Warrens") {
        // Ghostly Choir
        // Whispering Wall
        // Echoing Bells
      } else if (dungeon.path === "Thieves' Ruin") {
        // Only push Laughing Coffin at pathCounter 4
        if (dungeon.pathCounter === 4) {
          events.push({
            ...THIEVES_RUIN.LAUGHING_COFFIN,
            items: getTraderItems("Laughing Coffin"),
          });
        } else {
          events.push(
            THIEVES_RUIN.FLOOR_SPIKES,
            THIEVES_RUIN.POISONOUS_MIST,
            THIEVES_RUIN.POISON_DARTS
          );
        }
      }
      break;
  }

  // check heroes & quests
  // check threat

  // Randomly choose an event from the new array
  console.log("EVENT_LIST", events);
  const randomIndex = Math.floor(Math.random() * events.length);
  return events[randomIndex];
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
          numberOfEnemies = 2;
        }
      }
      break;

    case "Thieves' Ruin":
      {
        enemyTypes = [{ enemy: THIEVES.THIEF, probability: 1 }];
        numberOfEnemies = Math.ceil(Math.random() * 3);
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

// Creates enemy objects from their template objects BEFORE the combat order is initiated. This cannot be used during combat to add enemies to the combat order
export function buildEnemy(enemy) {
  const baseStats = constructStats(enemy.stats);
  const image = enemy.image;

  const builtEnemy = {
    ...enemy,
    image: image,
    icon: `${image}-icon`,
    stats: baseStats,
    id: uuidv4(),
    damageDisplay: "",
  };

  if (enemy.abilityA) {
    builtEnemy.abilityA = {
      ...enemy.abilityA,
      cooldown: getRandomCooldown(enemy.abilityA.reset),
    };
  }

  if (enemy.abilityB) {
    builtEnemy.abilityB = {
      ...enemy.abilityB,
      cooldown: getRandomCooldown(enemy.abilityB.reset),
    };
  }

  return builtEnemy;
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
  let backgroundImage;

  // Use general dungeon images
  switch (dungeon.name) {
    case "The Great Catacomb":
      backgroundImage = getImageFromList(
        "src/assets/images/backgrounds/the-great-catacomb/catacomb",
        27
      );
      break;
  }

  // Check for path specific backgrounds (replaces dungeon imageList)
  if (dungeon.path) {
    switch (dungeon.path) {
      case "Wailing Warrens":
        backgroundImage = getImageFromList(
          "src/assets/images/backgrounds/wailing-warrens/wailing-warrens",
          10
        );
        break;

      case "Thieves' Ruin":
        backgroundImage = getImageFromList(
          "src/assets/images/backgrounds/thieves-ruin/thieves-ruin",
          14
        );
        break;

      default:
        break;
    }
  }

  // Check for event specific backgrounds (replaces dungeon & path imageList)
  if (dungeon.contents.event) {
    switch (dungeon.contents.event.name) {
      //THE GREAT CATACOMBS
      case "Gravestone":
        backgroundImage = getImageFromList(
          "src/assets/images/backgrounds/events/gravestone",
          9
        );
        break;

      case "Coffin":
        backgroundImage = getImageFromList(
          "src/assets/images/backgrounds/events/coffin",
          9
        );
        break;

      case "Bonevault":
        backgroundImage = getImageFromList(
          "src/assets/images/backgrounds/events/bonevault",
          4
        );
        break;

      case "Unlocking Liheth":
      case "Candlelight Shrine":
        backgroundImage = getImageFromList(
          "src/assets/images/backgrounds/events/candlelight-shrine",
          8
        );
        break;

      // WAILING WARRENS
      case "Wailing Warrens":
        backgroundImage = getImageFromList(
          "src/assets/images/backgrounds/events/wailing-warrens-entrance",
          3
        );
        break;

      case "Wailing Warrens Exit":
        backgroundImage = getImageFromList(
          "src/assets/images/backgrounds/wailing-warrens/wailing-warrens-exit",
          3
        );
        break;

      // THIEVES RUIN
      case "Laughing Coffin":
        backgroundImage = getImageFromList(
          "src/assets/images/backgrounds/thieves-ruin/laughing-coffin-tavern",
          1
        );
        break;

      default:
        break;
    }
  }

  return backgroundImage;
}

// =====================================================================
//                                PATH
// =====================================================================

function getPathExit() {
  const path = store.getState().dungeon.path;

  switch (path) {
    case "Wailing Warrens":
      return PATH_EXIT.WAILING_WARRENS_EXIT;

    case "Thieves' Ruin":
      return PATH_EXIT.THIEVES_RUIN_EXIT;
  }
}
