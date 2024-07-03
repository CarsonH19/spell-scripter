import classes from "./Buttons.module.css";

import { useDispatch } from "react-redux";
import { uiActions } from "../../../../store/ui-slice";

import { useSelector } from "react-redux";
import { openModal } from "../../../../store/ui-actions";

export default function Buttons() {
  const dispatch = useDispatch();

  // Unable to access inventory while in danger
  const danger = useSelector((state) => state.dungeon.danger);

  const handleOpenModal = (modal) => {
    openModal(dispatch, modal);
  };

  return (
    <div className={classes.buttons}>
      <button
        disabled={danger}
        onClick={() => handleOpenModal("inventoryModal")}
      >
        Inventory
      </button>
      <button onClick={() => handleOpenModal("partyModal")}>Party</button>
      <button onClick={() => handleOpenModal("dungeonTomesModal")}>
        Tomes
      </button>
      <button onClick={() => handleOpenModal("questsModal")}>Quests</button>
      <button onClick={() => handleOpenModal("settingsModal")}>Settings</button>
    </div>
  );
}
