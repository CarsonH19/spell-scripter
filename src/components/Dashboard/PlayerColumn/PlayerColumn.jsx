import classes from "./PlayerColumn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../store/ui-actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToolbox,
  faBookOpen,
  faUsers,
  faCircleExclamation,
  faGear,
  faUser,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";

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

        <img
          className={classes["player-image"]}
          src={`${player.image}`}
          alt="Player Image"
        />

        <div className={classes.menu}>
          <div>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faBookOpen}
              onClick={() => handleOpenModal("spellbookModal")}
            />
            <p>Spellbook</p>
          </div>
          <div>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faToolbox}
              onClick={() => handleOpenModal("inventoryModal")}
            />
            <p>Inventory</p>
          </div>
          <div>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faUsers}
              onClick={() => handleOpenModal("heroesModal")}
            />
            <p>Heroes</p>
          </div>
          <div>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faCircleExclamation}
              onClick={() => handleOpenModal("questsModal")}
            />
            <p>Quests</p>
          </div>
          <div>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faCubes}
              onClick={() => handleOpenModal("attributeModal")}
            />
            <p>Attributes</p>
          </div>

        </div>
      </div>
      <FontAwesomeIcon
              className={classes.settings}
              icon={faGear}
              onClick={() => handleOpenModal("settingsModal")}
            />
    </div>
  );
}
