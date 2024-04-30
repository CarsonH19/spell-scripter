import { uiActions } from "../../../store/ui-slice";
import classes from "./PlayerColumn.module.css";

import { useDispatch, useSelector } from "react-redux";

export default function PlayerColumn() {
  const dispatch = useDispatch();

  const handleOpenModal = (modal) => {
    dispatch(uiActions.toggle({ modal: "modalIsVisible" })); // set to true
    dispatch(uiActions.toggleModal({ modal, open: "OPEN" }));
  };

  const test = useSelector((state) => state.ui);
  console.log(test);

  return (
    <div className={classes.column}>
      <div className={classes.player}>
        <div>
          <p>Player Name</p>
          <p>Level: 0</p>
          <p>Health: 0</p>
          <p>Mana: 0</p>
        </div>
        <div className={classes.image}></div>
        <div>
          <p>Strength: 0</p>
          <p>Dexterity: 0</p>
          <p>Faith: 0</p>
          <p>Arcana: 0</p>
        </div>
      </div>
      <hr />
      <div className={classes.menu}>
        <button onClick={() => handleOpenModal("spellbookModal")}>Spellbook</button>
        <button onClick={() => handleOpenModal("inventoryModal")}>Inventory</button>
        <button onClick={() => handleOpenModal("heroesModal")}>Heroes</button>
        <button onClick={() => handleOpenModal("questsModal")}>Quests</button>
        <button onClick={() => handleOpenModal("settingsModal")}>Settings</button>
      </div>
    </div>
  );
}
