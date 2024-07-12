import classes from "./MiddleContent.module.css";

import EventOptions from "./EventOptions/EventOptions";
import { useDispatch, useSelector } from "react-redux";

import { createNewRoom } from "../../../util/dungeon-util";
import { uiActions } from "../../../store/ui-slice";
import { logActions } from "../../../store/log-slice";

import { useEffect } from "react";

export default function MiddleContent() {
  const dispatch = useDispatch();
  const dungeon = useSelector((state) => state.dungeon);

  // Event Logic
  useEffect(() => {
    if (dungeon.contents.event) {
      dispatch(logActions.updateLogs({ change: "PAUSE" }));
      for (let i = 0; i < dungeon.contents.event.description.length; i++) {
        dispatch(
          logActions.updateLogs({
            change: "ADD",
            text: dungeon.contents.event.description[i],
          })
        );
      }
    }
  }, [dungeon.roomCounter]);

  // Continue Logic
  const continueIsVisible = useSelector((state) => state.ui.continueIsVisible);

  const handleContinue = () => {
    dispatch(
      uiActions.changeUi({ element: "continueIsVisible", visible: false })
    );
    createNewRoom(dispatch);
  };

  return (
    <div className={classes.middle}>
      {continueIsVisible && (
        <button className={classes.continue} onClick={handleContinue}>
          Continue
        </button>
      )}
      {dungeon.contents.event && <EventOptions />}
    </div>
  );
}
