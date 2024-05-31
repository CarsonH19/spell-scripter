import EQUIPMENT from "../data/equipment";
import CONSUMABLES from "../data/consumables";

import { v4 as uuidv4 } from "uuid";

import { dungeonActions } from "../store/dungeon-slice";

export default function loot(dispatch, enemy) {
  console.log(enemy);
  let lootTable;

  // switch statement to find the lootTable
  switch (enemy.name) {
    case "Decrepit Skeleton":
      lootTable = [
        { item: CONSUMABLES.MARROWSTONE_CHEESE, probability: 1 },
        // ADD MORE ITEMS
      ];
      break;
    default:
      return;
  }

  // Determines the enemies loot
  const enemyloot = calculateLoot(lootTable);

  console.log("ENEMY LOOT", enemyloot);
  // Add loot to dungeon-slice items array
  for (const item of enemyloot) {
    dispatch(dungeonActions.addItem(item));
    console.log("Item Added to Dungeon Slice", item);
  }
}

function calculateLoot(lootTable) {
  const loot = [];
  const randomNumber = Math.random();
  let totalProbability = 0;

  for (const lootEntry of lootTable) {
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

