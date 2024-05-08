import { dungeonActions } from "../store/dungeon-slice";

import { UNDEAD } from "../data/enemies";

import EVENTS from "../data/events";

import store from "../store/index";

import { v4 as uuidv4 } from "uuid";

export function setDungeon(dispatch, dungeonName) {
  let dungeon = {
    name: "",
    roomCounter: 0,
    threat: 0,
    image: null,
    music: null,
    contents: {
      enemies: [],
      items: [],
      event: EVENTS.DUNGEON_ENTRANCE,
    },
  };

  switch (dungeonName) {
    case "The Great Catacomb":
      dungeon.name = "The Great Catacomb";
      dungeon.threat = 1;
      dungeon.image = ""; // dungeon entrance image
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
    image: null,
    music: null,
    contents: {
      roomName: "",
      enemies: [],
      items: [], // Add items from enemy drops
      event: null,
    },
  };

  // getRoomImage(); // NOTE: Do I need to get this after the contents?

  const roomContent = getRoomContent();

  switch (roomContent) {
    case "EVENT":
      // get Event
      console.log("EVENT");
      newRoom.contents.event = getRoomEvent();
      break;

    default:
      // get monsters
      newRoom.contents.enemies = getRoomEnemies();
      break;
  }

  dispatch(dungeonActions.updateRoom(newRoom));
}

// // Determine if room will contain an event or monsters.
function getRoomContent() {
  const eventChance = Math.floor(Math.random() * 100);
  console.log("eventChance", eventChance);
  if (eventChance > 1) {
    // RETURN TO 79
    // ~20% Chance for an event
    return "EVENT";
  } else {
    return "MONSTERS";
  }
}

function getRoomEvent() {
  // import the events array
  // Iterate through the array and create a new array with incomplete events.
  // // Special events will only be completed once and therefore may not be added
  // Randomly choose an event from the new array
  console.log(EVENTS.SPIKE_WALLS);
  return EVENTS.SPIKE_WALLS;
}

export function getRoomEnemies() {
  let enemiesArray = [];
  const threat = store.getState().dungeon.threat;

  let enemyTypes = {
    DECREPIT_SKELETON: 0.6,
    SKELETAL_SOLDIER: 0.3,
    ARMORED_SKELETON: 0.1,
  };

  // Adjust enemy types based on threat level
  if (threat > 60) {
    // extremely high tier enemies
  } else if (threat > 40) {
    // high tier enemies
  } else if (threat > 20) {
    // mid tier enemies
  }

  // Calculate the number of enemies based on the threat level
  let numberOfEnemies;
  if (threat > 50) {
    numberOfEnemies = 5;
  } else if (threat > 40) {
    numberOfEnemies = Math.floor(Math.random() * 2) + 4; // Between 4 to 5 enemies
  } else if (threat > 30) {
    numberOfEnemies = Math.floor(Math.random() * 2) + 3; // Between 3 to 4 enemies
  } else if (threat > 20) {
    numberOfEnemies = Math.floor(Math.random() * 2) + 2; // Between 2 to 3 enemies
  } else if (threat > 10) {
    numberOfEnemies = Math.floor(Math.random() * 2) + 1; // Between 1 to 2 enemies
  } else {
    numberOfEnemies = 1;
  }

  // Generate random enemies based on their probabilities
  for (let i = 0; i < numberOfEnemies; i++) {
    let rand = Math.random();
    let cumulativeProbability = 0;

    for (let enemyType in enemyTypes) {
      cumulativeProbability += enemyTypes[enemyType];
      if (rand <= cumulativeProbability) {
        // Add the strength, agility, and arcana keys to the enemies stats object
        const baseStats = constructStats(UNDEAD[enemyType].stats);
        enemiesArray.push({
          ...UNDEAD[enemyType],
          stats: constructStats(baseStats),
          id: uuidv4(),
        });
        console.log(enemiesArray);
        break;
      }
    }
  }

  return enemiesArray;
}

function constructStats(stats) {
  return {
    baseStrength: stats.baseStrength,
    strength: {
      totalStrength: 0,
      attack: 0,
      maxHealth: 0,
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
      maxMana: 0,
    },
  };
}

// function getRoomImage(dungeon) {
//   switch (dungeon) {
//     case 1:
//       // execute different code to find room image
//       break;
//   }
// }
