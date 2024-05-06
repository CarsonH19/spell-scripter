import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import HeroesModal from "./Hero/HeroesModal";
import InventoryModal from "./Inventory/InventoryModal";
import SettingsModal from "./Settings/SettingsModal";
import QuestsModal from "./Quests/QuestsModal";
import SpellbookModal from "./Spellbook/SpellbookModal";
import TomesModal from "./Tomes/TomesModal";
import RoomSummaryModal from "./RoomSummary/RoomSummaryModal";
import TradeModal from "./Trade/TradeModal";
import HelpModal from "./Help/HelpModal";
import ConfirmationModal from "./Confirmation/ConfirmationModal";

import store from "../../store";

export default function Modal() {
  const dispatch = useDispatch();
  const activeModal = selectModal();
  const ui = useSelector((state) => state.ui);
  const continueCheck = findActiveModal(ui);

  const handleClose = () => {
    // Render continue button when RoomSummaryModal is closed
    if (continueCheck === "roomSummaryModal") {
      dispatch(uiActions.toggle({ modal: "continueIsVisible" })); // set to true
    }

    dispatch(uiActions.toggle({ modal: "modalIsVisible" })); // set to false
  };

  // This forces a rerender when the buttons on confirmationModal change the state to display a different modal
  console.log(ui);
  return createPortal(
    <div className={classes.modal}>
      {activeModal}
      <button onClick={handleClose} className={classes.close}>
        x
      </button>
    </div>,
    document.getElementById("modal")
  );
}

function selectModal() {
  const state = store.getState().ui;

  let activeModal = findActiveModal(state);

  switch (activeModal) {
    case "heroesModal":
      return <HeroesModal />;

    case "inventoryModal": {
      return <InventoryModal />;
    }
    case "questsModal":
      return <QuestsModal />;

    case "spellbookModal":
      return <SpellbookModal />;

    case "tomesModal":
      return <TomesModal />;

    case "roomSummaryModal":
      return <RoomSummaryModal />;

    case "tradeModal":
      return <TradeModal />;

    case "settingsModal":
      return <SettingsModal />;

    case "helpModal":
      return <HelpModal />;

    case "confirmationModal": {
      return <ConfirmationModal />;
    }
  }
}

function findActiveModal(state) {
  const modalKeys = Object.keys(state.modal);
  for (const modalKey of modalKeys) {
    if (state.modal[modalKey]) {
      return modalKey;
    }
  }
  return null;
}
