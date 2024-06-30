import classes from "./PlayerColumn.module.css";

import { uiActions } from "../../../store/ui-slice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faToolbox,
  faUsersLine,
  faPersonCircleExclamation,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import Attributes from "./Attributes";

import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../store/ui-actions";

export default function PlayerColumn() {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);

  const handleOpenModal = (modal) => {
    openModal(dispatch, modal);
  };

  return (
    <div className={classes.column}>
      <div className={classes.player}>
        <div>
          <h1>{player.name}</h1>
          <p>Level: {player.level}</p>
          <p>Mastery Points: {player.totalMasteryPoints}</p>
        </div>

        <Attributes />

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
    </div>
  );
}
