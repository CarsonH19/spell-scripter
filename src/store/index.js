import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import dungeonSlice from "./dungeon.slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, dungeon: dungeonSlice.reducer },
});

export default store;
