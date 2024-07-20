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

  console.log("active", dialogue.active);
  console.log("activeDialogue", activeDialogue);

  const dispatch = useDispatch();

  const handleNextPage = () => {
    if (index < activeDialogue.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevPage = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  // const position = dialogue;

  const handleEndDialogue = () => {
    endDialogue();
    dispatch(dialogueActions.clearDialogue());
  };

  return createPortal(
    <div className={classes.dialogue}>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${activeDialogue[index].image})`,
        }}
      ></div>
      <div className={classes["dialogue-box"]}>
        <h3>{activeDialogue[index].speaker}</h3>
        <p>{activeDialogue[index].text}</p>
        <div className={classes["box-buttons"]}>
          <FontAwesomeIcon
            icon={faAnglesLeft}
            onClick={handlePrevPage}
            className={classes.arrow}
          />

          <FontAwesomeIcon
            icon={faAnglesRight}
            onClick={
              index >= activeDialogue.length - 1
                ? handleNextPage
                : handleEndDialogue
            }
            className={classes.arrow}
          />
        </div>
        ;
      </div>
    </div>,
    document.getElementById("dialogue")
  );
}
