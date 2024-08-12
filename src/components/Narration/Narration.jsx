import { createPortal } from "react-dom";
import classes from "./Narration.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useMemo } from "react";
import { logActions } from "../../store/log-slice";
import store from "../../store/index";

export default function Narration() {
  const isPaused = useSelector((state) => state.log.paused);
  const narration = useSelector((state) => state.log.narration);
  const dispatch = useDispatch();
  const timeoutIdRef = useRef(null);

  const style = useMemo(
    () => getNarrationStyle(narration[0]?.text),
    [narration]
  );

  useEffect(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    timeoutIdRef.current = setTimeout(() => {
      dispatch(logActions.updateLogs({ change: "REMOVE" }));
    }, 2000);

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [narration, dispatch]);

  return createPortal(
    <div className={classes.narration}>
      <ul className={style}>
        {narration.map((item) => (
          <li
            key={item.id}
            className={
              style
                ? {}
                : !style && isPaused
                ? classes["fade-in"]
                : classes["fade-in-out"]
            }
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>,
    document.getElementById("narration")
  );
}

// Helper function
function getNarrationStyle(narration) {
  const dungeon = store.getState().dungeon;
  let style;

  if (
    narration === "Encounter!" ||
    narration === dungeon.name ||
    narration === dungeon.path
  ) {
    style = classes.announcement;
  } else {
    style = "";
  }

  return style;
}
