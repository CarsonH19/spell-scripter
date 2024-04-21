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
    damageEnemy(state, action) {
      const id = action.payload
      const findEnemyById = (id) => {
        const enemies = state.contents.enemies;
        return enemies.find(enemy => enemy.id === id);
      };
      
      const enemyToDamage = findEnemyById(id);

      enemyToDamage.currentHealth -= 10;
    }
    // addMonster(state, action) {},
    // removeMonster(state, action) {},
  },
});


export const dungeonActions = dungeonSlice.actions;

export default dungeonSlice;