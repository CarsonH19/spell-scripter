import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    startIsVisible: true,
    dashboardIsVisible: false,
    gameWindowIsVisible: false,
    spellListIsVisible: false,
    itemListIsVisible: false,
    continueIsVisible: false,
    modalIsVisible: false,
    modal: {
      heroesModal: false,
      inventoryModal: false,
      questsModal: false,
      spellbookModal: false,
      tomesModal: false,
      dungeonTomesModal: false,
      roomSummaryModal: false,
      tradeModal: false,
      settingsModal: false,
      helpModal: false,
      confirmationModal: false,
      quickTimeEventModal: false,
      partyModal: false,
      levelUpModal: false,
    },
    tome: null,
  },
  reducers: {
    updateActiveTome(state, action) {
      state.tome = action.payload;
    },
    changeUi(state, action) {
      const { element, visible } = action.payload;
      state[element] = visible;    
    },
    openModal(state, action) {
      const modal = action.payload.modal;
      // Set all modals to false
      Object.keys(state.modal).forEach((key) => {
        state.modal[key] = false;
      });

      if (action.payload.open) {
        // Set the target modal to true
        state.modal[modal] = true;
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
