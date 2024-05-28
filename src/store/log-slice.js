import { createSlice } from "@reduxjs/toolkit";

// This state slice will organize strings used to alert or notify the user in different arrays. The narration array will be displayed on the middle of the screen through the narration portal, while the others will be shown in the "Log" button in dungeons.

const logSlice = createSlice({
  name: "log",
  initialState: {
    narration: [],
    // tome: [],
    // combat: [],
    // event: [],
    // inventory: [],
  },
  reducers: {
    updateLogs(state, action) {
      let change = action.payload.change;

      switch (change) {
        case "ADD":
          {
            console.log("ADDED");
            let text = action.payload.text;
            state.narration.push(text);
          }
          break;

        case "REMOVE":
          console.log("REMOVED");
          state.narration.shift();
          break;
      }
    },
  },
});

export const logActions = logSlice.actions;

export default logSlice;
