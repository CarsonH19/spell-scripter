import { createPortal } from "react-dom";

import classes from "./Narration.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logActions } from "../../store/log-slice";
import { v4 as uuidv4 } from "uuid";

import store from "../../store/index";

export default function Narration() {
  const narration = useSelector((state) => state.log.narration);
  const dispatch = useDispatch();

  let style = getNarrationStyle(narration[0]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(logActions.updateLogs({ change: "REMOVE" }));
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [narration]);

  return createPortal(
    <div className={classes.narration}>
      <div className={style}>
        {narration.map((text) => (
          <p key={uuidv4()}>{text}</p>
        ))}
      </div>
    </div>,
    document.getElementById("narration")
  );
}

// Helper function
function getNarrationStyle(narration) {
  const dungeon = store.getState().dungeon;
  let style;

  if (
    (narration === "Encounter!" ||
      narration === dungeon.name ||
      narration === dungeon.path)
  ) {
    console.log("CALLED");
    style = classes.announcement;
  } else {
    style = "";
  }

  return style;
}
