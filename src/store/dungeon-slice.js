import { createSlice } from "@reduxjs/toolkit";

const dungeonSlice = createSlice({
  name: "dungeon",
  initialState: {
    roomName: "",
    image: null,
    music: null,
    contents: {
      enemies: [],
      items: [],
      events: null,
    },
  },
  reducers: {
    updateRoom(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    addEnemy(state, action) {
      // action: enemy.id
      state.contents.enemies.push(action.payload);
    },
    updateHealth(state, action) {
      const id = action.payload.id;
      const change = action.payload.change;
      let value = action.payload.value;

      const findEnemyById = (id) => {
        const enemies = state.contents.enemies;
        return enemies.find((enemy) => enemy.id === id);
      };

      const enemy = findEnemyById(id);

      if (change === "DAMAGE") {
        enemy.currentHealth = enemy.currentHealth - value;
      }

      if (change === "HEAL") {
        enemy.currentHealth = enemy.currentHealth + value;
      }
    },
    changeEnemies(state, action) {
      const enemy = action.payload.enemy;
      const change = action.payload.change;
      
      const enemies = state.contents.enemies;

      if (change === "ADD") {
        enemies.push(enemy);
      }

      if (change === "REMOVE") {
        const enemyIndex = state.contents.enemies.findIndex(
          (char) => char.id === enemy.id
        );

        if (enemyIndex !== -1) {
          // Remove the enemy if it exists
          enemies.splice(enemyIndex, 1);
        }
      }
    },
    addItem(state, action) {
      // action: item object
      state.contents.items.push(action.payload);
    },
    removeItem(state, action) {
      const itemName = action.payload;
      state.contents.items = state.contents.items.filter(
        (item) => item.name !== itemName
      );
    },
    // addMonster(state, action) {},
    // removeMonster(state, action) {},
  },
});

export const dungeonActions = dungeonSlice.actions;

export default dungeonSlice;
