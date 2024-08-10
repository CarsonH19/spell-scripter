import { createSlice } from "@reduxjs/toolkit";

const dungeonSlice = createSlice({
  name: "dungeon",
  initialState: {
    name: "The Great Catacomb",
    following: null,
    followCounter: null,
    path: null,
    pathCounter: null,
    roomCounter: 0,
    threat: -1,
    danger: false,
    image:
      "src/assets/images/backgrounds/the-great-catacomb/catacomb-entrance.jpg",
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
    beginFollowing(state, action) {
      if (action.payload !== null) {
        const { following, rooms } = action.payload;
        state.following = following;
        state.followCounter = rooms;
      } else {
        state.following = null;
        state.followCounter = null;
      }
    },
    beginPath(state, action) {
      state.path = action.payload;
      if (action.payload !== null) {
        // Paths are hard set to 10 rooms
        state.pathCounter = 2;
      } else {
        // state.following = null;
        state.pathCounter = null;
      }
    },
    changeBackground(state, action) {
      state.image = action.payload;
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
      state.threat += action.payload;
    },
    removeThreat(state, action) {
      state.threat -= action.payload;

      if (state.threat <= 0) {
        state.threat = 0;
      }
    },
    incrementRoomCounter(state) {
      state.roomCounter++;
    },
    eventOutcome(state, action) {
      const { outcome } = action.payload;
      state.contents.event.outcome = outcome;
    },
    changeTradeItems(state, action) {
      const id = action.payload.id;

      const itemIndex = state.contents.event.items.findIndex(
        (i) => i.id === id
      );
      if (itemIndex !== -1) {
        state.contents.event.items.splice(itemIndex, 1);
      }
    },
  },
});

export const dungeonActions = dungeonSlice.actions;

export default dungeonSlice;
