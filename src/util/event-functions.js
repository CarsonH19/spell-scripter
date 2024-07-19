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
import { getRandomLoot } from "./loot";
import activateItem from "../store/item-actions";

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

    await delay(4000);
    openModal(dispatch, "roomSummaryModal");
  },
  COFFIN: async (dispatch, choice) => {
    const dungeon = store.getState().dungeon;
    const chance = Math.random();
    let enemy;

    if (dungeon.threat > 50) {
      enemy = UNDEAD["DEATH_KNIGHT"];
    } else if (dungeon.threat > 40) {
      enemy = UNDEAD["GRAVE_WITCH"];
    } else if (dungeon.threat > 30) {
      enemy = UNDEAD["BONE_TITAN"];
    } else if (dungeon.threat > 20) {
      enemy = UNDEAD["CORPSE_ORACLE"];
    } else if (dungeon.threat > 10) {
      enemy = UNDEAD["SKELETAL_WARRIOR"];
    } else {
      enemy = UNDEAD["DECREPIT_SKELETON"];
    }

    // Get Random Loot
    getRandomLoot(dispatch);

    if (choice === "Open" && chance > 0.4) {
      // Add enemy to dungeon
      dispatch(
        dungeonActions.addEnemy({ enemy: buildEnemy(enemy), change: "ADD" })
      );

      // Start combat
      await delay(4000);
      startCombat(dispatch);
    } else {
      await delay(4000);
      openModal(dispatch, "roomSummaryModal");
    }
  },
  PATH_ENTRANCE: async (dispatch, choice) => {
    const path = store.getState().dungeon.contents.event.name;
    if (choice === "Enter") {
      console.log("ENTERED PATH", path);
      dispatch(dungeonActions.beginPath(path));
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
  PATH_EXIT: async (dispatch, choice) => {
    const path = store.getState().dungeon.path;
    if (choice === "Leave") {
      dispatch(dungeonActions.beginPath(null));
      dispatch(
        dungeonActions.eventOutcome({ outcome: `You left the ${path}.` })
      );
      await delay(4000);
      openModal(dispatch, "roomSummaryModal");
    }
  },
  BONEVAULT: async (dispatch, choice) => {
    const order = store.getState().combat.order;
    const dungeon = store.getState().dungeon;
    const player = order.find((char) => char.id === "Player");
    const key = player.inventory.consumables.find(
      (item) => item.name === "Skeleton Key"
    );
    let enemyGroup;
    let enemies = [];

    if (choice === "Unlock") {
      if (!key) {
        // You do not have a key to open the door
        // dispatch to narrative
        await delay(4000);
        openModal(dispatch, "roomSummaryModal");
      } else if (key) {
        // Remove Key
        activateItem(dispatch, key);
        // Get Random Loot
        getRandomLoot(dispatch);

        // Transition Animation
        // New Background - "ADD RANDOM BACKGROUND"
        const newBackground = "src/assets/images/backgrounds/catacomb-6.jpg";
        dispatch(dungeonActions.changeBackground(newBackground));

        const difficulty = Math.floor(Math.random() * 4);

        if (dungeon.threat > 50) {
          enemyGroup = [
            UNDEAD.DEATH_KNIGHT,
            UNDEAD.DEATH_KNIGHT,
            UNDEAD.GRAVE_WITCH,
          ];
        } else if (dungeon.threat > 40) {
          enemyGroup = [UNDEAD.GRAVE_WITCH, UNDEAD.BONE_TITAN, UNDEAD.REAPER];
        } else if (dungeon.threat > 30) {
          enemyGroup = [UNDEAD.BONE_TITAN, UNDEAD.REAPER, UNDEAD.CORPSE_ORACLE];
        } else if (dungeon.threat > 20) {
          enemyGroup = [UNDEAD.CORPSE_ORACLE, UNDEAD.SKELETAL_MAGE, BONE_TITAN];
        } else if (dungeon.threat > 10) {
          enemyGroup = [
            UNDEAD.CORPSE_ORACLE,
            UNDEAD.SKELETAL_MAGE,
            UNDEAD.SKELETAL_ARCHER,
            UNDEAD.SKELETAL_WARRIOR,
          ];
        } else {
          enemyGroup = [
            UNDEAD.DECREPIT_SKELETON,
            UNDEAD.DECREPIT_SKELETON,
            UNDEAD.SKELETAL_MAGE,
            UNDEAD.SKELETAL_ARCHER,
            UNDEAD.SKELETAL_WARRIOR,
          ];
        }

        for (let i = 0; i < difficulty; i++) {
          const index = Math.floor(Math.random() * enemyGroup.length);
          enemies.push(enemyGroup[index]);
        }

        // Add enemies to dungeon
        for (let i = 0; i < enemies.length; i++) {
          dispatch(
            dungeonActions.addEnemy({
              enemy: buildEnemy(enemies[i]),
              change: "ADD",
            })
          );
        }

        dispatch(
          dungeonActions.eventOutcome({
            outcome: `You chose to unlock the door and enter.`,
          })
        );
        await delay(4000);
        startCombat(dispatch);
      }
    } else if (choice === "Leave") {
      dispatch(
        dungeonActions.eventOutcome({ outcome: `You chose not to enter.` })
      );
      await delay(4000);
      openModal(dispatch, "roomSummaryModal");
    }
  },
  CANDLELIGHT_SHRINE: async (dispatch, choice) => {
    if (choice === "Rest") {
      const order = store.getState().combat.order;
      // Add fade transition

      // Heal all allies
      for (let i = 0; i < order.length; i++) {
        const halfHealth = order[i].stats.strength.maxHealth;
        const value = Math.round(halfHealth / 2);
        console.log(value);
        changeHealth(dispatch, order[i], "HEAL", value);
      }

      // Get random candle
      getRandomLoot(dispatch);

      dispatch(dungeonActions.eventOutcome({ outcome: `You chose to rest.` }));
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
