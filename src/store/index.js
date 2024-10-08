import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import dungeonSlice from "./dungeon-slice";
import heroSlice from "./hero-slice";
import playerSlice from "./player-slice";
import combatSlice from "./combat-slice";
import logSlice from "./log-slice";
import tomeSlice from "./tome-slice";
import questionSlice from "./question-slice";
import spellbookSlice from "./spellbook-slice";
import dialogueSlice from "./dialogue-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    dungeon: dungeonSlice.reducer,
    hero: heroSlice.reducer,
    player: playerSlice.reducer,
    combat: combatSlice.reducer,
    log: logSlice.reducer,
    tome: tomeSlice.reducer,
    question: questionSlice.reducer,
    spellbook: spellbookSlice.reducer,
    dialogue: dialogueSlice.reducer,
  },
});

export default store;
