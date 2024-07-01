import { createSlice } from "@reduxjs/toolkit";

const dungeonSlice = createSlice({
  name: "dungeon",
  initialState: {
    name: "",
    path: null,
    roomCounter: 0,
    threat: -1,
    danger: false,
    image: null,
    music: null,
    contents: {
      enemies: [],
      items: [],
      event: null,
    },
  },
  reducers: {
    updateRoom(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    dangerToggle(state, action) {
      const danger = action.payload.danger;
      state.danger = danger;
    },
    changePath(state, action) {
      state.path = action.payload;
    },
    addEnemy(state, action) {
      const { enemy, change } = action.payload;

      if (change === "ADD") {
        state.contents.enemies.push(enemy);
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
    completeEvent(state) {
      if (state.contents.event) {
        state.contents.event.complete = true;
      }
    },
    addItem(state, action) {
      // action payload = item object
      state.contents.items.push(action.payload);
    },
    addThreat(state, action) {
      // action payload = value to increase
      state.threat += action.payload;
    },
    incrementRoomCounter(state) {
      state.roomCounter++;
    },
  },
});

export const dungeonActions = dungeonSlice.actions;

export default dungeonSlice;
