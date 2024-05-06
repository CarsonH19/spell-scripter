import { uiActions } from "../../../store/ui-slice";
import classes from "./PlayerColumn.module.css";

import { useDispatch, useSelector } from "react-redux";

export default function PlayerColumn() {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);

  const handleOpenModal = (modal) => {
    dispatch(uiActions.toggle({ modal: "modalIsVisible" })); // set to true
    dispatch(uiActions.toggleModal({ modal, open: "OPEN" }));
  };

  return (
    <div className={classes.column}>
      <div className={classes.player}>
        <div>
          <p>{player.name}</p>
          <p>Level: {player.level}</p>

          {/* <div className={classes.image}></div> */}

          <p>Strength: {player.stats.strength.totalStrength}</p>
          <p>Agility: {player.stats.agility.totalAgility}</p>
          <p>Arcana: {player.stats.arcana.totalArcana}</p>
        </div>
      </div>
      <hr />
      <div className={classes.menu}>
        <button onClick={() => handleOpenModal("spellbookModal")}>
          Spellbook
        </button>
        <button onClick={() => handleOpenModal("inventoryModal")}>
          Inventory
        </button>
        <button onClick={() => handleOpenModal("heroesModal")}>Heroes</button>
        <button onClick={() => handleOpenModal("questsModal")}>Quests</button>
        <button onClick={() => handleOpenModal("settingsModal")}>
          Settings
        </button>
      </div>
    </div>
  );
}
