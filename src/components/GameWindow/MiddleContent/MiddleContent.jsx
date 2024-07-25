import classes from "./MiddleContent.module.css";

import EventOptions from "./EventOptions/EventOptions";
import { useDispatch, useSelector } from "react-redux";

import { createNewRoom } from "../../../util/dungeon-util";
import { uiActions } from "../../../store/ui-slice";
import { logActions } from "../../../store/log-slice";

import { useEffect } from "react";

export default function MiddleContent() {
  const dispatch = useDispatch();
  const eventOptionsAreVisible = useSelector(
    (state) => state.ui.eventOptionsAreVisible
  );

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
      {eventOptionsAreVisible && <EventOptions />}
    </div>
  );
}
