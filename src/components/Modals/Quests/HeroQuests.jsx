import classes from "./QuestsModal.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroQuests({ quest, onLeftClick, onRightClick }) {
  const questStyle = quest.finished
    ? classes["finished-quest"]
    : classes["active-quest"];

  return (
    <div className={classes["quest-list"]}>
      <div className={`${classes.quest} ${questStyle}`}>
        <h3>{quest.name}</h3>
        <p><i>{quest.text}</i></p>
        <div>
          <h3>Task:</h3>
          <p>{quest.description}</p>
        </div>
        <p>
          {quest.progress} / {quest.completion}
        </p>
        <div className={classes.reward}>
          <h3>Reward:</h3>
          <p>{quest.reward}</p>
        </div>
      </div>

      <div className={classes["box-buttons"]}>
        <FontAwesomeIcon
          icon={faAnglesLeft}
          onClick={onLeftClick}
          className={classes.arrow}
        />
        <p>{quest.finished ? "Quest Complete" : "Active Quest"}</p>
        <FontAwesomeIcon
          icon={faAnglesRight}
          onClick={onRightClick}
          className={classes.arrow}
        />
      </div>
    </div>
  );
}
