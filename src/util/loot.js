import store from "../store/index";

import EQUIPMENT from "../data/equipment";
import CONSUMABLES from "../data/consumables";

import { v4 as uuidv4 } from "uuid";

import { dungeonActions } from "../store/dungeon-slice";
import { checkForPassiveAbility } from "./passive-functions";
import heroes from "../data/heroes";

export default function loot(dispatch, enemy) {
  let lootTable;

  // Exit function if defeated character isn't an enemy
  if (enemy.identifier !== "ENEMY") {
    return;
  }

  // switch statement to find the lootTable
  switch (enemy.name) {
    case "Decrepit Skeleton": // Loot Chance 15%
      lootTable = [
        { item: CONSUMABLES.GRAVEBLOOM, probability: 0.03 },
        { item: CONSUMABLES.ROTBANE_FERN, probability: 0.03 },
        { item: CONSUMABLES.MARROWSTONE_CHEESE, probability: 0.03 },
        { item: CONSUMABLES.CRYPTBREAD, probability: 0.03 },
        { item: EQUIPMENT.GHOULBONE_ARMGUARDS, probability: 0.01 },
        { item: EQUIPMENT.GHOULBONE_GREAVES, probability: 0.01 },
        { item: EQUIPMENT.GHOULBONE_HELMET, probability: 0.01 },
        { item: null, probability: 0.85 },
        // ADD MORE ITEMS
      ];
      break;
    default:
      return;
  }

  // Determines the enemies loot
  const enemyloot = calculateLoot(lootTable);

  // Add loot to dungeon-slice items array
  for (const item of enemyloot) {
    dispatch(dungeonActions.addItem(item));
  }
}

function calculateLoot(lootTable) {
  const order = store.getState().combat.order;
  const loot = [];
  const randomNumber = Math.random();
  let totalProbability = 0;

  // PASSIVE - Riven
  const isRivenFound = order.some((hero) => hero.name === "Riven");
  if (isRivenFound) {
    totalProbability += 0.5;
  }

  console.log(totalProbability);

  // Shuffle the loot table to ensure equal chances
  const shuffledLootTable = shuffle([...lootTable]);

  for (const lootEntry of shuffledLootTable) {
    totalProbability += lootEntry.probability;
    if (randomNumber < totalProbability) {
      if (lootEntry.item) {
        loot.push({ ...lootEntry.item, id: uuidv4() });
      }
      break; // Exit loop when an item is found or nothing is dropped
    }
  }

  return loot;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
