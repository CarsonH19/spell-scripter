import { createPortal } from "react-dom";

import classes from "./Dialogue.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { dialogueActions } from "../../store/dialogue-slice";
import { endDialogue } from "../../util/dialogue-util";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import playSoundEffect from "../../util/audio-util";

export default function Dialogue() {
  const [index, setIndex] = useState(0);
  const dialogue = useSelector((state) => state.dialogue);
  const activeDialogue = dialogue[dialogue.active];
  const dispatch = useDispatch();

  const position =
    activeDialogue[index].position === "LEFT" ? classes.left : classes.right;

  useEffect(() => {
    playSoundEffect(false, "ui", "softs", 0.7);
  }, []);

  const handleNextPage = () => {
    if (index < activeDialogue.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
      playSoundEffect(false, "ui", "medievalGUI1");    }
  };

  const handlePrevPage = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
      playSoundEffect(false, "ui", "medievalGUI2");    }
  };

  const handleEndDialogue = () => {
    endDialogue(dispatch);
    playSoundEffect(false, "ui", "softs2", 0.7);
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
            {activeDialogue[index].speaker && (
              <h3>{activeDialogue[index].speaker}</h3>
            )}
            <p
              style={
                activeDialogue[index].speaker === null
                  ? { fontStyle: "italic" }
                  : {}
              }
            >
              {activeDialogue[index].text}
            </p>
          </div>
          <div className={classes["box-buttons"]}>
            <FontAwesomeIcon
              icon={faAnglesLeft}
              onClick={handlePrevPage}
              className={classes.arrow}
              style={index === 0 ? { pointerEvents: "none", opacity: 0.6 } : {}}
            />

            <FontAwesomeIcon
              icon={faAnglesRight}
              onClick={
                index === activeDialogue.length - 1
                  ? handleEndDialogue
                  : handleNextPage
              }
              // style={index > 0}
              className={classes.arrow}
            />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("dialogue")
  );
}
