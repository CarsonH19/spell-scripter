import { uiActions } from "../../../store/ui-slice";
import classes from "./PlayerColumn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faToolbox,
  faUsersLine,
  faPersonCircleExclamation,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon
          className={classes.icon}
          icon={faBookOpen}
          onClick={() => handleOpenModal("spellbookModal")}
        />
        <FontAwesomeIcon
          className={classes.icon}
          icon={faToolbox}
          onClick={() => handleOpenModal("inventoryModal")}
        />
        <FontAwesomeIcon
          className={classes.icon}
          icon={faUsersLine}
          onClick={() => handleOpenModal("heroesModal")}
        />
        <FontAwesomeIcon
          className={classes.icon}
          icon={faPersonCircleExclamation}
          onClick={() => handleOpenModal("questsModal")}
        />
        <FontAwesomeIcon
          className={classes.icon}
          icon={faGear}
          onClick={() => handleOpenModal("settingsModal")}
        />
      </div>
    </div>
  );
}
