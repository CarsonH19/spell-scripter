import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
  name: "hero",
  initialState: { party: [] },
  reducers: {
    updateParty(state, action) {
      state.party = action.payload;
    },
    // addHero(state, action) {},
    // removeHero(state, action) {},
  },
});

export const heroActions = heroSlice.actions;

export default heroSlice;
