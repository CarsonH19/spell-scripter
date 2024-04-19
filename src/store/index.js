import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import dungeonSlice from "./dungeon-slice";
import heroSlice from "./hero-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    dungeon: dungeonSlice.reducer,
    hero: heroSlice.reducer,
  },
});

export default store;
