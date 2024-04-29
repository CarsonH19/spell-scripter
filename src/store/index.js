import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import dungeonSlice from "./dungeon-slice";
import heroSlice from "./hero-slice";
import playerSlice from "./player-slice";
import combatSlice from "./combat-slice";


const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    dungeon: dungeonSlice.reducer,
    hero: heroSlice.reducer,
    player: playerSlice.reducer,
    combat: combatSlice.reducer,
  },
},);

export default store;
