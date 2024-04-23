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
    damageEnemy(state, action) {
      const id = action.payload.id;
      const damage = action.payload.damage;

      const findEnemyById = (id) => {
        const enemies = state.contents.enemies;
        return enemies.find((enemy) => enemy.id === id);
      };

      const enemyToDamage = findEnemyById(id);

      enemyToDamage.currentHealth -= damage;
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
