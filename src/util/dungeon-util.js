// The createNewRoom util function can set the new room to the current room, which can then update the state when the continue button is click

import { dungeonActions } from "../store/dungeon-slice";

import store from "../store/index";

// Create a room given the "dungeon" and "roomCounter"
// dungeonName - will determine the monster and loot type
// roomCounter - the higher the room counter the more difficult enemies will be

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
      event: null, // NOTE: Create & add ENTRANCE event object (Are you ready?)
    },
  };

  switch (dungeonName) {
    case "The Great Catacomb":
      dungeon.name = "The Great Catacomb";
      dungeon.threat = 1;
      dungeon.image = ""; // dungeon entrance image
      // dungeon.music = '' // Dungeon entrance music
      dungeon.contents; // add Entrance event (Are you prepared?)
      break;
  }

  dispatch(dungeonActions.updateRoom(dungeon));
}

export function createNewRoom(dispatch) {
  const dungeon = store.getState().dungeon;

  let newRoom = {
    name: dungeon.name,
    roomCounter: 0,
    threat: 0,
    image: null,
    music: null,
    contents: {
      roomName: "",
      enemies: [],
      items: [], // Add items from enemy drops & event object logic
      event: null,
    },
  };

  // getRoomImage(); // NOTE: Do I need to get this after the contents?

  const roomContent = getRoomContent();

  switch (roomContent) {
    case "MONSTERS":
      // get monsters
      newRoom.contents.enemies = getRoomEnemies();
      break;

    case "EVENT":
      // get Event
      newRoom.contents.event = getRoomEvent();
      break;
  }

  dispatch(dungeonActions.updateRoom(newRoom));
  console.log(`New Room Added: ${newRoom}`);
}

function getRoomEvent() {
  // import the events array
  // Iterate through the array and create a new array with incomplete events.
  // // Special events will only be completed once and therefore may not be added
  // Randomly choose an event from the new array
  // return event
}

// Determine if room will contain an event or monsters.
function getRoomContent() {
  const eventChance = Math.floor(Math.random() * 100);

  if (eventChance > 79) {
    // ~20% Chance for an event
    return "EVENT";
  } else {
    return "MONSTERS";
  }
}

function getRoomEnemies() {
  let enemiesArray = [];
  const threat = store.getState().dungeon.threat;


  let enemyTypes;

  // Adjust enemy types based on threat level
  if (threat > 60) {
    // extremely high tier enemies
  } else if (threat > 40) {
    // high tier enemies
  } else if (threat > 20) {
    // mid tier enemies
  } else {
    // low tier enemies
  }

  // Calculate the number of enemies based on the threat level
  let numberOfEnemies;
  if (threat > 50) {
    numberOfEnemies = 5; // 5 enemies
  } else if (threat > 40) {
    numberOfEnemies = Math.floor(Math.random() * 2) + 4; // Between 4 to 5 enemies
  } else if (threat > 30) {
    numberOfEnemies = Math.floor(Math.random() * 2) + 3; // Between 3 to 4 enemies
  } else if (threat > 20) {
    numberOfEnemies = Math.floor(Math.random() * 2) + 2; // Between 2 to 3 enemies
  } else if (threat > 10) {
    numberOfEnemies = Math.floor(Math.random() * 2) + 1; // Between 1 to 2 enemies
  } else {
    numberOfEnemies = 1; // 1 enemy
  }

  // Generate random enemies based on their probabilities
  for (let i = 0; i < numberOfEnemies; i++) {
    let rand = Math.random();
    let cumulativeProbability = 0;

    for (let enemyType in enemyTypes) {
      cumulativeProbability += enemyTypes[enemyType];
      if (rand <= cumulativeProbability) {
        enemiesArray.push({
          type: enemyType,
          // Add other properties as needed
        });
        break;
      }
    }
  }

  return enemiesArray;
}

// function getRoomImage(dungeon) {
//   switch (dungeon) {
//     case 1:
//       // execute different code to find room image
//       break;
//   }
// }
