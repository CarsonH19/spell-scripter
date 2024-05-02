import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

import { useDispatch } from "react-redux";
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

import store from "../../store";

export default function Modal() {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(uiActions.toggle({ modal: "modalIsVisible" })); // set to false
  };

  const activeModal = selectModal();

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
