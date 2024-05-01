import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    name: "Carson",
    id: "Player",
    identifier: "PLAYER",
    image: "",
    level: 1,
    currentHealth: 75,
    currentMana: 50,
    currentExp: 0,
    expToNextLevel: 100,
    stats: {
      baseStrength: 1,
      strength: {
        totalStrength: 1,
        attack: 10,
        maxHealth: 100,
      },
      baseAgility: 2,
      agility: {
        totalAgility: 2,
        defense: 10,
        speed: 0,
        hitChance: 2,
      },
      baseArcana: 3,
      arcana: {
        totalArcana: 3,
        spellPower: 0,
        maxMana: 50,
      },
    },
    weaknesses: [],
    resistances: [],
    immunities: [],
    spellList: [],
    statusEffects: [],
    inventory: {
      attunedItems: [],
      equipment: [],
      consumables: [],
      questItems: [],
    },
  },
  reducers: {
    updateSpellList(state, action) {
      state.spellList = action.payload;
    },
    changeInventory(state, action) {
      const item = action.payload.item;
      const change = action.payload.change;
      const id = item.id;

      switch (change) {
        case "ADD":
          {
            if (item.type === "EQUIPMENT") {
              state.inventory.equipment.push(item);
            } else if (item.type === "CONSUMABLE") {
              state.inventory.consumables.push(item);
            } else if (item.type === "QUEST ITEM") {
              state.inventory.questItems.push(item);
            }
          }
          break;

        case "REMOVE":
          {
            let itemGroup;
            if (item.type === "EQUIPMENT") {
              itemGroup = state.inventory.equipment;
            } else if (item.type === "CONSUMABLE") {
              itemGroup = state.inventory.consumables;
            } else if (item.type === "QUEST ITEM") {
              itemGroup = state.inventory.questItems;
            }

            const itemIndex = itemGroup.findIndex((i) => i.id === id);
            if (itemIndex !== -1) {
              itemGroup.splice(itemIndex, 1);
            }
          }
          break;
      }
    },
    changeAttunement(state, action) {
      const item = action.payload.item;
      const change = action.payload.change;
      const id = item.id;

      switch (change) {
        case "ADD": // Attune
          {
            if (
              item.type === "EQUIPMENT" &&
              state.inventory.attunedItems.length < 5
            ) {
              // Add to attunedItems
              state.inventory.attunedItems.push(item);

              // Remove from attuned items
              const itemIndex = state.inventory.equipment.findIndex(
                (i) => i.id === id
              );

              if (itemIndex !== -1) {
                state.inventory.equipment.splice(itemIndex, 1);
              }
            }
          }
          break;

        case "REMOVE": // Remove Attunement
          {
            // Remove from attuned items
            const itemIndex = state.inventory.attunedItems.findIndex(
              (i) => i.id === id
            );

            if (itemIndex !== -1) {
              state.inventory.attunedItems.splice(itemIndex, 1);
            }

            // Add to equipment
            state.inventory.equipment.push(item);
          }
          break;
      }
    },
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice;
