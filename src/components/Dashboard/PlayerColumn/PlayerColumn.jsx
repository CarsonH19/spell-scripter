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

import Tooltip from "../../UI/Tooltip";

export default function PlayerColumn() {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);
  const { prevLevel, nextLevel } = setNextLevel(player.totalMasteryPoints);

  const handleOpenModal = (modal) => {
    openModal(dispatch, modal);
  };

  return (
    <div className={classes.column}>
      <div className={classes.player}>
        <div className={classes.header}>
          <h1>{player.name}</h1>
          <div className={classes["bar-info"]}>
            <p>Level: {player.level}</p>
            <p className={classes.percentage}>
              {Math.round(
                ((player.totalMasteryPoints - prevLevel) /
                  (nextLevel - prevLevel)) *
                  100
              )}
              %
            </p>
            <p>
              {player.totalMasteryPoints}/{nextLevel}
            </p>
          </div>
          <progress
            value={player.totalMasteryPoints - prevLevel}
            max={nextLevel - prevLevel}
          ></progress>
          <p>Mastery Points: {player.totalMasteryPoints}</p>
        </div>

        <img
          className={classes["player-image"]}
          src={`${player.image}.png`}
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

function setNextLevel(totalMasteryPoints) {
  if (totalMasteryPoints <= 1) {
    return { prevLevel: 1, nextLevel: 2 };
  } else if (totalMasteryPoints <= 3) {
    return { prevLevel: 2, nextLevel: 3 };
  } else if (totalMasteryPoints <= 6) {
    return { prevLevel: 3, nextLevel: 6 };
  } else if (totalMasteryPoints <= 11) {
    return { prevLevel: 6, nextLevel: 11 };
  } else if (totalMasteryPoints <= 17) {
    return { prevLevel: 11, nextLevel: 17 };
  } else if (totalMasteryPoints <= 24) {
    return { prevLevel: 17, nextLevel: 24 };
  } else if (totalMasteryPoints <= 32) {
    return { prevLevel: 24, nextLevel: 32 };
  } else if (totalMasteryPoints <= 48) {
    return { prevLevel: 32, nextLevel: 48 };
  }
}
