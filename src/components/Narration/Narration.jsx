import { createPortal } from "react-dom";

import classes from "./Narration.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logActions } from "../../store/log-slice";
import { v4 as uuidv4 } from "uuid";

export default function Narration() {
  const narration = useSelector((state) => state.log.narration);
  const dispatch = useDispatch();

  let style;
  console.log(narration);
  if (narration[0] === "Combat Started!") {
    console.log("COMBAT STARTED");
    style = classes.combat;
  } else {
    style = "";
  }

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
function checkForNarrativeStyle() {}
