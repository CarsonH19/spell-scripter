import store from "../store/index";

import { v4 as uuidv4 } from "uuid";

import { dungeonActions } from "../store/dungeon-slice";

import CONSUMABLES from "../data/consumables";
import EQUIPMENT from "../data/equipment";

export default function loot(dispatch, enemy) {
  const lootTable = enemy.lootTable;

  // Exit function if defeated character isn't an enemy
  if (enemy.identifier !== "ENEMY") {
    return;
  }

  // Determines the enemies loot
  const enemyloot = calculateLoot(lootTable);

  // Add loot to dungeon-slice items array
  for (const item of enemyloot) {
    dispatch(dungeonActions.addItem(item));
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getRandomLoot(dispatch) {
  const dungeon = store.getState().dungeon;
  let lootTable = [];

  // Check Threat
  if (dungeon.threat > 60) {
    // Add items
  } else if (dungeon.threat > 40) {
    // Add items
  } else if (dungeon.threat > 20) {
    // Add items
  }

  // Check Path
  switch (dungeon.path.name) {
    case "Wailing Warrens":
      break;

    default:
      break;
  }

  // Check Event
  switch (dungeon.event.name) {
    case "Bonevault":
      lootTable = [
        { item: EQUIPMENT.GHOULBONE_ARMGUARDS, probability: 0.10 },
        { item: EQUIPMENT.GHOULBONE_GREAVES, probability: 0.10 },
        { item: EQUIPMENT.GHOULBONE_HELMET, probability: 0.10 },
        { item: EQUIPMENT.SOULREAVER, probability: 0.05 },
        { item: EQUIPMENT.REVENANTS_RAGE, probability: 0.05 },
        { item: EQUIPMENT.CURSED_MIRROR, probability: 0.05 },
        { item: EQUIPMENT.WRAITHBANE, probability: 0.05 },
        { item: EQUIPMENT.RATTLEBONE_CHESTPLATE, probability: 0.05 },
        { item: EQUIPMENT.RATTLEBONE_GAUNTLETS, probability: 0.05 },
        { item: EQUIPMENT.RATTLEBONE_HELMET, probability: 0.05 },
        { item: null, probability: 0.35 },
      ];
      break;

    case "Coffin":
      lootTable = [
        { item: CONSUMABLES.GRAVEBLOOM, probability: 0.03 },
        { item: CONSUMABLES.ROTBANE_FERN, probability: 0.03 },
        { item: CONSUMABLES.MARROWSTONE_CHEESE, probability: 0.03 },
        { item: CONSUMABLES.CRYPTBREAD, probability: 0.03 },
        { item: EQUIPMENT.GHOULBONE_ARMGUARDS, probability: 0.01 },
        { item: EQUIPMENT.GHOULBONE_GREAVES, probability: 0.01 },
        { item: EQUIPMENT.GHOULBONE_HELMET, probability: 0.01 },
        { item: null, probability: 0.85 },
      ];
      break;

    default:
      break;
  }

  // Determines the enemies loot
  const loot = calculateLoot(lootTable);

  // Add loot to dungeon-slice items array
  dispatch(dungeonActions.addItem(item));
}

function calculateLoot(lootTable) {
  const order = store.getState().combat.order;
  const loot = [];
  const randomNumber = Math.random();
  let totalProbability = 0;

  // PASSIVE - Riven
  const isRivenFound = order.some((hero) => hero.name === "Riven");
  if (isRivenFound) {
    totalProbability += 0.05;
  }

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
