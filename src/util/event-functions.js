import { buildEnemy, createNewRoom } from "./dungeon-util";
import { changeHealth } from "../store/health-actions";

import { uiActions } from "../store/ui-slice";

import store from "../store/index";

import { v4 as uuidv4 } from "uuid";

import { openModal } from "../store/ui-actions";
import { UNDEAD } from "../data/enemies";
import CONSUMABLES from "../data/consumables";
import EQUIPMENT from "../data/equipment";
import { dungeonActions } from "../store/dungeon-slice";
import { startCombat } from "../store/combat-actions";
import { logActions } from "../store/log-slice";

// Each event will determine what dispatches & narrations to call, as well as when the event is over and the room summary modal should be called

const eventFunctions = {
  DUNGEON_ENTRANCE_ENTER: (dispatch) => {
    createNewRoom(dispatch);
  },
  TRAP: async (dispatch, stat) => {
    const order = store.getState().combat.order;
    const player = order.find((char) => char.id === "Player");
    const dungeon = store.getState().dungeon;
    let difficulty;
    let damage;

    if (dungeon.threat > 50) {
      difficulty = 20;
      damage = 40;
    } else if (dungeon.threat > 40) {
      difficulty = 18;
      damage = 30;
    } else if (dungeon.threat > 30) {
      difficulty = 16;
      damage = 20;
    } else if (dungeon.threat > 20) {
      difficulty = 14;
      damage = 15;
    } else if (dungeon.threat > 10) {
      difficulty = 12;
    } else {
      difficulty = 10;
      damage = 10;
    }

    const success = trapSuccessChance(dispatch, player, difficulty, stat);

    if (!success) {
      changeHealth(dispatch, player, "DAMAGE", damage);
    }

    console.log("SUCCESS", success);

    await delay(4000);
    openModal(dispatch, "roomSummaryModal");
  },
  COFFIN: async (dispatch, choice) => {
    const dungeon = store.getState().dungeon;
    const chance = Math.random();
    let enemy;
    let loot = [
      CONSUMABLES.CRYPTBREAD,
      CONSUMABLES.MARROWSTONE_CHEESE,
      CONSUMABLES.LESSER_HEALTH_POTION,
      CONSUMABLES.LESSER_MANA_POTION,
      CONSUMABLES.ROTBANE_FERN,
      CONSUMABLES.GRAVEBLOOM,
    ];

    if (dungeon.threat > 50) {
      enemy = UNDEAD["DEATH_KNIGHT"];
      loot.push([EQUIPMENT.RATTLEBONE_CHESTPLATE]);
    } else if (dungeon.threat > 40) {
      enemy = UNDEAD["GRAVE_WITCH"];
      loot.push([EQUIPMENT.RATTLEBONE_PAULDRONS]);
    } else if (dungeon.threat > 30) {
      enemy = UNDEAD["BONE_TITAN"];
      loot.push([EQUIPMENT.RATTLEBONE_WRISTGUARDS]);
    } else if (dungeon.threat > 20) {
      enemy = UNDEAD["CORPSE_ORACLE"];
      loot.push([EQUIPMENT.GHOULBONE_HELMET]);
    } else if (dungeon.threat > 10) {
      enemy = UNDEAD["SKELETAL_WARRIOR"];
      loot.push([EQUIPMENT.GHOULBONE_GREAVES]);
    } else {
      enemy = UNDEAD["DECREPIT_SKELETON"];
      loot.push([EQUIPMENT.GHOULBONE_ARMGUARDS]);
    }

    if (choice === "Open" && chance > 0.4) {
      // Add enemy to dungeon
      dispatch(
        dungeonActions.addEnemy({ enemy: buildEnemy(enemy), change: "ADD" })
      );
      // Get Random Loot
      const randomIndex = Math.floor(Math.random() * loot.length);
      // Add Random Loot to dungeon
      dispatch(dungeonActions.addItem({ ...loot[randomIndex], id: uuidv4() }));
      // Start combat
      await delay(4000);
      startCombat(dispatch);
    } else {
      await delay(4000);
      openModal(dispatch, "roomSummaryModal");
    }
  },
  PATH: async (dispatch, choice) => {
    const path = store.getState().dungeon.contents.event.name;
    if (choice === "Enter") {
      dispatch(dungeonActions.changePath(path));
      dispatch(
        dungeonActions.eventOutcome({ outcome: `You entered the ${path}.` })
      );
      // Room transition
      // Change background
      // Display "You've entered Wailing Warrens"
      // Start dialogue
    } else {
      dispatch(
        dungeonActions.eventOutcome({ outcome: `You chose not to enter.` })
      );
      // await delay(4000);
      // openModal(dispatch, "roomSummaryModal");
    }

    await delay(4000);
    openModal(dispatch, "roomSummaryModal");
  },
  BONEVAULT: async (dispatch, choice) => {
    const order = store.getState().combat.order;
    const player = order.find((char) => char.id === "Player");
    // Check for key
    
    if (choice === "Unlock") {
      // Remove Key

      // 5 potential rooms
      let vault = Math.floor(Math.random() * 5) + 1;

      switch (vault) {
        case 1:
          // Reward Only
          // transition to new room
          // dispatch narrative
          // Add random items to dungeon
          // Call roomSummary
          break;

        case 2:
          // Reward & Mild Encounter
          // transition to new room
          // dispatch narrative
          // Add random items to dungeon
          // Determine enemies
          break;

        case 3:
          // Reward & Moderate Encounter
          // transition to new room
          // dispatch narrative
          // Determine enemies
          // Add random items to dungeon
          break;

        case 4:
          // Reward & Deadly Encounter
          // transition to new room
          // dispatch narrative
          // Add random items to dungeon
          // determine enemies
          break;

        case 5:
          // transition to new room
          // Special room
          // Secret Boss?
          // Sealed Hero?
          // dispatch narrative
          break;
      }
    } else if (choice === "Leave") {
      await delay(4000);
      openModal(dispatch, "roomSummaryModal");
    }
  },
};

export default eventFunctions;

// ==================================
//          HELPER FUNCTIONS
// ==================================

// function createPathEvent() {
//   const dungeon = store.getState().dungeon;

//   let path = {
//     name: "Path",
//     type: "CHOICE",
//     description: "The path splits in two. Which direction shall you go?",
//     options: [
//       {
//         text: [],
//         function: "PATH",
//         get narration() {
//           return `You choose to go to the ${this.options[0].text}.`;
//         },
//       },
//       {
//         text: [],
//         function: "PATH",
//         get narration() {
//           return `You choose to go to the ${this.options[1].text}.`;
//         },
//       },
//     ],
//   };

//   switch (dungeon.name) {
//     case "The Great Catacomb":
//       {
//         if (dungeon.threat > 50) {
//         } else if (dungeon.threat > 25) {
//         } else {
//           // Gnawers' Nest - Rats
//           // Shadowed Crypts - Thieves
//           // Rattling Halls - Undead
//         }
//       }
//       break;
//   }
// }

async function trapSuccessChance(dispatch, player, difficulty, stat) {
  let playerChoice;

  if (stat === "(Strength)") {
    playerChoice = player.stats.strength.totalStrength;
  } else if (stat === "(Agility)") {
    playerChoice = player.stats.agility.totalAgility;
  } else if (stat === "(Arcana)") {
    // Add logic if player has the Arcana option
  }

  const successChance = roll20(playerChoice);

  await delay(1000);

  if (successChance > difficulty) {
    dispatch(logActions.updateLogs({ change: "ADD", text: "Success!" }));
    dispatch(
      dungeonActions.eventOutcome({
        outcome: "You successfully overcame the trap.",
      })
    );
    return true;
  } else {
    dispatch(logActions.updateLogs({ change: "ADD", text: "Fail!" }));
    dispatch(
      dungeonActions.eventOutcome({
        outcome: "You failed to overcome the trap.",
      })
    );
    return false;
  }
}

function roll20(bonus = 0) {
  return Math.floor(Math.random() * 21) + bonus;
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
