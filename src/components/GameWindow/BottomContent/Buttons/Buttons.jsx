import classes from "./Buttons.module.css";

import { useDispatch } from "react-redux";
import { uiActions } from "../../../../store/ui-slice";

export default function Buttons() {
  const dispatch = useDispatch();
  
  const handleOpenModal = (modal) => {
    dispatch(uiActions.toggle({ modal: "modalIsVisible" })); // set to true
    dispatch(uiActions.toggleModal({ modal, open: "OPEN" }));
  };

  return (
    <div className={classes.buttons}>
      <button onClick={() => handleOpenModal("inventoryModal")}>
        Inventory
      </button>
      <button onClick={() => handleOpenModal("tomesModal")}>Tomes</button>
      <button onClick={() => handleOpenModal("questsModal")}>Quests</button>
      <button onClick={() => handleOpenModal("settingsModal")}>Settings</button>
    </div>
  );
}
