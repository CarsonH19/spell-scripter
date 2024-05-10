import { createSlice } from "@reduxjs/toolkit";

// This state slice will organize strings used to alert or notify the user in different arrays. The narration array will be displayed on the middle of the screen through the narration portal, while the others will be shown in the "Log" button in dungeons.

const logSlice = createSlice({
  name: "log",
  initialState: {
    narration: [],
    tome: [],
    combat: [],
    event: [],
    inventory: [],
  },
  reducers: {
    updateLogs(state, action) {
      let logArray = action.payload.logArray;
      let text = action.payload.text;

      switch (logArray) {
        case "NARRATION":
          logArray = state.narration;
          break;
      }

      console.log("NARRATION");

      logArray.push(text);
    },
  },
});

export const logActions = logSlice.actions;

export default logSlice;
