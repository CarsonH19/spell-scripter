import { createPortal } from "react-dom";

import classes from "./Dialogue.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { dialogueActions } from "../../store/dialogue-slice";
import { endDialogue } from "../../util/dialogue-util";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function Dialogue() {
  const [index, setIndex] = useState(0);
  const dialogue = useSelector((state) => state.dialogue);
  const activeDialogue = dialogue[dialogue.active];
  const dispatch = useDispatch();

  const position =
    activeDialogue[index].position === "LEFT" ? classes.left : classes.right;

  const handleNextPage = () => {
    console.log("CALLED");

    if (index < activeDialogue.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevPage = () => {
    console.log("CALLED");

    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleEndDialogue = () => {
    endDialogue(dispatch);
    dispatch(dialogueActions.clearDialogue());
  };

  return createPortal(
    <div className={`${classes.dialogue}`}>
      <div className={position}>
        <img
          className={classes.image}
          src={activeDialogue[index].image}
          alt=""
        />
        <div className={classes["dialogue-box"]}>
          <div className={classes.speaker}>
            <h3>{activeDialogue[index].speaker}</h3>
            <p>{activeDialogue[index].text}</p>
          </div>
          <div className={classes["box-buttons"]}>
            <FontAwesomeIcon
              icon={faAnglesLeft}
              onClick={handlePrevPage}
              className={classes.arrow}
            />

            <FontAwesomeIcon
              icon={faAnglesRight}
              onClick={
                index === activeDialogue.length - 1
                  ? handleEndDialogue
                  : handleNextPage
              }
              className={classes.arrow}
            />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("dialogue")
  );
}
