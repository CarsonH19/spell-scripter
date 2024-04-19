import { createSlice } from "@reduxjs/toolkit";

const dungeonSlice = createSlice({
  name: "dungeon",
  initialState: {
    roomName: "",
    image: null,
    music: null,
    contents: {
      monsters: [],
      items: [],
      events: null,
    },
  },
  reducers: {
    updateRoom(state, action) {
      state = action.payload;
    },
    addMonster(state, action) {},
    removeMonster(state, action) {},

  },
});
