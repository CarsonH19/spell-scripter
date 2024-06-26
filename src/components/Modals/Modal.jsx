import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

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
import QuickTimeEventModal from "./QTE/QuickTimeEventModal";
import DungeonTomesModal from "./DungeonTomes/DungeonTomesModal";
import LevelUpModal from "./LevelUp/LevelUpModal";

import store from "../../store";
import PartyModal from "./Party/PartyModal";

export default function Modal() {
  const dispatch = useDispatch();
  const activeModal = selectModal();
  const ui = useSelector((state) => state.ui);
  const continueCheck = findActiveModal(ui);
  
  const handleClose = () => {
    // Render continue button when RoomSummaryModal is closed
    if (continueCheck === "roomSummaryModal") {
      dispatch(uiActions.changeUi({ element: "continueIsVisible", visible: true }));
    }

    dispatch(uiActions.changeUi({ element: "modalIsVisible", visible: false })); 
  };

  return createPortal(
    <div className={classes.modal}>
      {activeModal}
      <FontAwesomeIcon
        icon={faCircleXmark}
        onClick={handleClose}
        className={classes.close}
      />
    </div>,
    document.getElementById("modal")
  );
}

function selectModal() {
  const state = store.getState().ui;
  let activeModal = findActiveModal(state);

  // Passed as a prop to the tomeModal
  const tome = store.getState().ui.tome;

  switch (activeModal) {
    case "heroesModal":
      return <HeroesModal />;

    case "inventoryModal": 
      return <InventoryModal />;
    
    case "questsModal":
      return <QuestsModal />;

    case "spellbookModal":
      return <SpellbookModal />;

    case "tomesModal": 
      return <TomesModal tome={tome}/>;

    case "dungeonTomesModal":
      return <DungeonTomesModal />

    case "roomSummaryModal":
      return <RoomSummaryModal />;

    case "tradeModal":
      return <TradeModal />;

    case "settingsModal":
      return <SettingsModal />;

    case "helpModal":
      return <HelpModal />;

    case "confirmationModal":
      return <ConfirmationModal />;

    case "quickTimeEventModal":
      return <QuickTimeEventModal />;

    case "partyModal":
      return <PartyModal />

    case "levelUpModal":
      return <LevelUpModal />
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
