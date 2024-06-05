import { createSlice } from "@reduxjs/toolkit";

const tomeSlice = createSlice({
  name: "tome",
  initialState: [
    { name: "Introduction", complete: false },
    { name: "JavaScript in HTML", complete: false },
    { name: "Simple Operations", complete: false },
  ],
  reducers: {
    complete(state, action) {
      // action.payload is the index of the tome in the state array 
      state[action.payload].complete = true
    },
  },
});

export const tomeActions = tomeSlice.actions;

export default tomeSlice;
