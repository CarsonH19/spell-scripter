// The createNewRoom util function can set the new room to the current room, which can then update the state when the continue button is clicked. 

// A global variable can be added to distinguish the current dungeon and section

// function getRandomRoom(array) {
//   const randomIndex = Math.floor(Math.random() * array.length);
//   roomIndex = randomIndex;
//   currentRoom = array[roomIndex];

//   return currentRoom;
// }

// function removeCurrentRoom() {
//   if (
//     currentRoom !== catacombEntrance &&
//     currentRoom !== CANDLELIGHT_SHRINE &&
//     currentRoom !== FALLEN_WARRIORS_VALE &&
//     currentRoom !== LAUGHING_COFFIN_ROOM &&
//     currentRoom !== BLOOD_ALTER &&
//     currentRoom !== HAGS_HOLLOW && 
//     currentRoom !== CURATORS_CURIO
//   ) {
//     roomIndex = catacombRooms.indexOf(currentRoom);
//     console.log(`${currentRoom.roomName} Removed`);
//     catacombRooms.splice(roomIndex, 1);
//   }
// }

// function createNewRoom() {
//   let roomType = Math.floor(Math.random() * 4) + 1;
//   let beastType; // to decern Gnawers or Spiders

//   let newRoom = {
//     roomName: "",
//     backgroundImage: "",
//     music: "",
//     contents: {
//       monsters: [],
//       items: [],
//       events: null,
//     },
//   };

//   function getRoomDetails(roomType) {
//     let roomDetails = Math.floor(Math.random() * 4) + 1;

//     switch (roomType) {
//       case 1:
//         // SKELETON
//         if (roomDetails === 1) {
//           newRoom.roomName = "Skull-lined Corridor";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-one/skull-lined-corridor.jpg";
//         } else if (roomDetails === 2) {
//           newRoom.roomName = "Skeletal Sepulcher";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-one/skeletal-sepulcher.jpg";
//         } else if (roomDetails === 3) {
//           newRoom.roomName = "Skullshade Sanctum";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-two/skullshade-sanctum.jpg";
//         } else if (roomDetails === 4) {
//           newRoom.roomName = "Ossuary Outpost";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-two/ossuary-outpost.jpg";
//         } else {
//           newRoom.roomName = "Gravemist Hall";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-two/gravemist-hall.jpg";
//         }

//         newRoom.music = edgeOfFear;
//         break;

//       case 2:
//         // GHOST
//         if (roomDetails === 1) {
//           newRoom.roomName = "Haunted Hall";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-one/haunted-hall.jpg";
//         } else if (roomDetails === 2) {
//           newRoom.roomName = "Echoing Vestibule";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-one/echoing-vestibule.jpg";
//         } else if (roomDetails === 3) {
//           newRoom.roomName = "Haunted Bloodcellar";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-two/haunted-blood-cellar.jpg";
//         } else if (roomDetails === 4) {
//           newRoom.roomName = "Haunted Hallow";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-two/haunted-hallow.jpg";
//         } else {
//           newRoom.roomName = "Morbid Mausoleum";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-two/morbid-mausoleum.jpg";
//         }

//         newRoom.music = hauntedOutpost;
//         break;

//       case 3:
//         // CULTIST
//         if (roomDetails === 1) {
//           newRoom.roomName = "Ghastly Gallery";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-two/ghastly-gallery.jpg";
//           newRoom.music = null;
//         } else if (roomDetails === 2) {
//           newRoom.roomName = "Desecrated Shrine";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-three/desecrated-shrine.jpg";
//           newRoom.music = null;
//         } else if (roomDetails === 3) {
//           newRoom.roomName = "Desecrated Shrine";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-two/desecrated-shrine-two.jpg";
//           newRoom.music = null;
//         } else if (roomDetails === 4) {
//           newRoom.roomName = "Unhallowed Bloodhold";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-four/frosaken-bloodhold.jpg";
//           newRoom.music = null;
//         } else {
//           newRoom.roomName = "Ghastly Gallery";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-two/ghastly-gallery.jpg";
//         }

//         newRoom.music = fightThrough;
//         break;

//       case 4:
//         // EVENT
//         if (roomDetails === 1) {
//           newRoom.roomName = "Webspun Passage";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/tier-one/webspun-passage.jpg";
//           newRoom.music = claustrofobia;
//           newRoom.contents.events = SPIDER_WEB;
//         } else if (roomDetails === 2) {
//           newRoom.roomName = "Cadaver Crypt";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/event-rooms/spiked-room.jpg";
//           newRoom.music = claustrofobia;
//           newRoom.contents.events = SPIKE_WALLS;
//         } else if (roomDetails === 3) {
//           newRoom.roomName = "Dreadbone Chamber";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/event-rooms/skeletal-hands.jpg";
//           newRoom.music = claustrofobia;
//           newRoom.contents.events = SKELETAL_HANDS;
//         } else if (roomDetails === 4) {
//           newRoom.roomName = "Dreadbone Chamber";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/event-rooms/skeletal-hands.jpg";
//           newRoom.music = claustrofobia;
//           newRoom.contents.events = SKELETAL_HANDS;
//         } else {
//           newRoom.roomName = "Ivory Coffin";
//           newRoom.backgroundImage =
//             "styles/images/backgrounds/event-rooms/coffin-2.jpg";
//           newRoom.music = threeThousandYearsOld;
//           newRoom.contents.events = COFFIN_EVENT;
//         }

//         break;
//     }
//   }

//   function getRoomMonsters(roomType) {
//     let numberOfEnemies;

//     // Get Threat Level
//     if (roomCounter >= 70) {
//       numberOfEnemies = 6;
//     } else if (roomCounter >= 60) {
//       numberOfEnemies = 5;
//     } else if (roomCounter >= 50) {
//       numberOfEnemies = 4;
//     }

//     skeletonMonsters = [
//       ARMORED_SKELETON,
//       ARMORED_SKELETON,
//       BONE_TITAN,
//       DEATH_KNIGHT,
//     ];
//     let ghostMonsters = [HAUNTING_SPIRIT, HAUNTING_SPIRIT, GRUDGE, WRAITH];
//     let cultistMonsters = [CULTIST, CULTIST, FIENDSWORN_CULTIST, CRYPT_FIEND];

//     if (roomType !== 4) {
//       let monsterType;
//       switch (roomType) {
//         case 1:
//           monsterType = skeletonMonsters;
//           break;

//         case 2:
//           monsterType = ghostMonsters;
//           break;

//         case 3:
//           monsterType = cultistMonsters;
//           break;
//       }

//       for (let i = 0; i < numberOfEnemies; i++) {
//         let randomIndex = Math.floor(Math.random() * monsterType.length);
//         newRoom.contents.monsters.push(monsterType[randomIndex]);
//       }
//     }
//   }

//   getRoomDetails(roomType);
//   getRoomMonsters(roomType);
//   catacombRooms.push(newRoom);
//   console.log(`New Room Added: ${newRoom}`);
// }