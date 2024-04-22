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
    newRoom(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    addEnemy(state, action) {
      // action: enemy object w/ unique id
      state.contents.enemies.push(action.payload);
    },
    removeEnemy(state, action) {
      const id = action.payload.id;
      state.contents.enemies = state.contents.enemies.filter(
        (enemy) => enemy.id !== id
      );
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
    // damageEnemy(state, action) {
    //   const id = action.payload.id;
    //   const spell = action.payload.spell;

    //   const findEnemyById = (id) => {
    //     const enemies = state.contents.enemies;
    //     return enemies.find(enemy => enemy.id === id);
    //   };

    //   const enemyToDamage = findEnemyById(id);

    //   enemyToDamage.currentHealth -= spell.damage;
    // }
    // addMonster(state, action) {},
    // removeMonster(state, action) {},
  },
});

export const dungeonActions = dungeonSlice.actions;

export default dungeonSlice;
