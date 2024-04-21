import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { 
    startIsVisible: true,
    dashboardIsVisible: false,
    gameWindowIsVisible: false,
    inventoryIsVisible: false,
    tomeIsVisible: false,
    heroIsVisible: false,
    settingIsVisible: false,
   },
  reducers: {
    toggle(state, action) {
      const { modal } = action.payload;
      state[modal] = !state[modal];
    },
  },

  // toggle dispatch example:
  // dispatch(uiSlice.actions.toggle({ modal: 'inventoryIsVisible' }));

});

export const uiActions = uiSlice.actions;

export default uiSlice;