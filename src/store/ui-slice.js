import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { 
    startIsVisible: true,
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
  // dispatch(uiSlice.actions.toggle({ element: 'inventoryIsVisible' }));

});

export const uiActions = uiSlice.actions;

export default uiSlice;