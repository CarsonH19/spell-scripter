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
    damageMonster(state, action) {
      
    }
    // addMonster(state, action) {},
    // removeMonster(state, action) {},
  },
});


export const dungeonActions = dungeonSlice.actions;

export default dungeonSlice;