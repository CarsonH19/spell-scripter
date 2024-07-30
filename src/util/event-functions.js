import { buildEnemy, createNewRoom } from "./dungeon-util";
import { changeHealth } from "../store/health-actions";

import store from "../store/index";

import { openModal } from "../store/ui-actions";
import { THIEVES, UNDEAD } from "../data/enemies";

import { dungeonActions } from "../store/dungeon-slice";
import { startCombat } from "../store/combat-actions";
import { logActions } from "../store/log-slice";
import { getRandomLoot } from "./loot";
import activateItem from "../store/item-actions";

import { combatActions } from "../store/combat-slice";
import { heroActions } from "../store/hero-slice";

import checkForDialogue, { getDialogue } from "./dialogue-util";
import { calculateRooms, checkIfAttuned } from "./item-functions";
import { addCharacterToOrder, getImageFromList } from "./misc-util";
import { dialogueActions } from "../store/dialogue-slice";
import { GRAVESTONE_DIALOGUE } from "../data/dialogue";

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

    if (dungeon.threat > 40) {
      enemy = UNDEAD["DEATH_KNIGHT"];
    } else if (dungeon.threat > 30) {
      enemy = UNDEAD["GRAVE_WITCH"];
    } else if (dungeon.threat > 20) {
      enemy = UNDEAD["BONE_TITAN"];
    } else if (dungeon.threat > 10) {
      enemy = UNDEAD["CORPSE_ORACLE"];
    } else {
      enemy = UNDEAD["SKELETAL_WARRIOR"];
    }

    if (choice === "Open") {
      // Get Random Loot
      getRandomLoot(dispatch);
    }

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
  GRAVESTONE: async (dispatch, choice) => {
    const player = store
      .getState()
      .combat.order.find((char) => char.id === "Player");

    if (choice === "Place a flower") {
      // lose flower
      const flowerList = [
        "Gravebloom",
        "Gravelight Lily",
        "Witchfire Orchid",
        "Sunshade Blossom",
      ];
      const flower = player.inventory.consumables.find((item) =>
        flowerList.includes(item.name)
      );
      dispatch(
        combatActions.changePlayerInventory({ change: "REMOVE", item: flower })
      );

      // Dialogue
      dispatch(
        dialogueActions.updateDialogue({
          change: "after",
          dialogue: GRAVESTONE_DIALOGUE.after,
        })
      );
      await checkForDialogue(dispatch, "after");

      // Start Following to Wailing Warrens
      dispatch(
        dungeonActions.beginFollowing({
          following: "Wandering Wisp",
          rooms: calculateRooms("Wandering Wisp"),
        })
      );

      // End Event
      await delay(2000);
      openModal(dispatch, "roomSummaryModal");
    }

    if (choice === "Leave") {
      await delay(2000);
      openModal(dispatch, "roomSummaryModal");
    }
  },
  PATH_ENTRANCE: async (dispatch, choice) => {
    const path = store.getState().dungeon.contents.event.name;
    if (choice === "Enter") {
      dispatch(dungeonActions.beginPath(path));
      dispatch(
        dungeonActions.eventOutcome({ outcome: `You entered the ${path}.` })
      );
    } else {
      // dispatch(
      //   dungeonActions.eventOutcome({ outcome: `You chose not to enter.` })
      // );
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
        const newBackground = getImageFromList(
          "src/assets/images/backgrounds/events/bonevault",
          4
        );
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
          addCharacterToOrder(dispatch, enemies[i]);
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
  UNLOCK_HERO_LIHETH: async (dispatch) => {
    const order = store.getState().combat.order;
    // Add fade transition

    // Heal all allies
    for (let i = 0; i < order.length; i++) {
      const halfHealth = order[i].stats.strength.maxHealth;
      const value = Math.round(halfHealth / 2);
      changeHealth(dispatch, order[i], "HEAL", value);
    }

    // Unlock Hero Liheth
    dispatch(heroActions.unlockHero("Liheth"));

    // Get random candle
    getRandomLoot(dispatch);

    await checkForDialogue(dispatch, "after");
    openModal(dispatch, "roomSummaryModal");
  },
  CANDLELIGHT_SHRINE: async (dispatch, choice) => {
    if (choice === "Rest") {
      const order = store.getState().combat.order;
      // Add fade transition

      // Heal all allies
      for (let i = 0; i < order.length; i++) {
        const halfHealth = order[i].stats.strength.maxHealth;
        const value = Math.round(halfHealth / 2);
        changeHealth(dispatch, order[i], "HEAL", value);
      }

      // Get random candle
      getRandomLoot(dispatch);

      await checkForDialogue(dispatch, "after");
      openModal(dispatch, "roomSummaryModal");
    }
  },
  UNLOCK_HERO_SIGGURD: async (dispatch) => {
    dispatch(heroActions.unlockHero("Siggurd"));
    startCombat(dispatch);
  },
  AMBUSH: async (dispatch, choice) => {
    const order = store.getState().combat.order;
    const player = order.find((char) => char.id === "Player");
    if (choice === "Surrender") {
      if (
        player.inventory.consumables.length !== 0 &&
        player.inventory.equipment.length !== 0
      ) {
        // Lose 2 random consumables
        for (let i = 0; i < 2; i++) {
          const index =
            Math.floor(Math.random()) * player.inventory.consumables.length;
          dispatch(
            combatActions.changePlayerInventory({
              item: player.inventory.consumables[index],
              change: "REMOVE",
            })
          );
        }
        // Lose random equipment
        const index =
          Math.floor(Math.random()) * player.inventory.equipment.length;
        dispatch(
          combatActions.changePlayerInventory({
            item: player.inventory.equipment[index],
            change: "REMOVE",
          })
        );
        await delay(2000);
      }
      await checkForDialogue(dispatch, "after");
      clearCharactersFromOrder(dispatch);
      openModal(dispatch, "roomSummaryModal");
    }

    if (choice === "Refuse") {
      await checkForDialogue(dispatch, "response");
      getRandomLoot(dispatch);
      startCombat(dispatch);
    }
  },
  LAUGHING_COFFIN: async (dispatch, choice) => {
    if (choice === "Trade") {
      openModal(dispatch, "tradeModal");
    } else if (choice === "Leave") {
      await delay(2000);
      openModal(dispatch, "roomSummaryModal");
    }
  },
};

export default eventFunctions;

// ==================================
//          HELPER FUNCTIONS
// ==================================

async function trapSuccessChance(dispatch, player, difficulty, stat) {
  let playerChoice;

  if (stat === "(Strength)") {
    playerChoice = player.stats.strength.totalStrength;
  } else if (stat === "(Agility)") {
    playerChoice = player.stats.agility.totalAgility;
  } else if (stat === "(Arcana)") {
    // Add logic if player has the Arcana option
  }

  console.log("TRAP", playerChoice);

  // ITEM - Evertorch
  playerChoice += checkIfAttuned(dispatch, "Evertorch");
  console.log("TRAP", playerChoice);

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

function clearCharactersFromOrder(dispatch) {
  const order = store.getState().combat.order;
  for (let i = 0; i < order.length; i++) {
    if (order[i].identifier !== "PLAYER" && order[i].identifier !== "HERO") {
      dispatch(combatActions.removeCharacter({ character: order[i] }));
    }
  }
}
