import classes from "./Buttons.module.css";

import { useDispatch } from "react-redux";
import { uiActions } from "../../../../store/ui-slice";

import { useSelector } from "react-redux";

export default function Buttons() {
  const dispatch = useDispatch();

  // Unable to access inventory while in danger
  const danger = useSelector((state) => state.dungeon.danger);

  const handleOpenModal = (modal) => {
    dispatch(uiActions.toggle({ modal: "modalIsVisible" })); // set to true
    dispatch(uiActions.toggleModal({ modal, open: "OPEN" }));
  };

  return (
    <div className={classes.buttons}>
      <button
        disabled={!danger}
        onClick={() => handleOpenModal("inventoryModal")}
      >
        Inventory
      </button>
      <button onClick={() => handleOpenModal("tomesModal")}>Tomes</button>
      <button onClick={() => handleOpenModal("questsModal")}>Quests</button>
      <button onClick={() => handleOpenModal("settingsModal")}>Settings</button>
      <button onClick={() => handleOpenModal("helpModal")}>?</button>
    </div>
  );
}
