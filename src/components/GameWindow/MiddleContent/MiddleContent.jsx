import classes from "./MiddleContent.module.css";

import EventOptions from "./EventOptions/EventOptions";
import { useDispatch, useSelector } from "react-redux";

import { createNewRoom } from "../../../util/dungeon-util";
import { uiActions } from "../../../store/ui-slice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import playSoundEffect from "../../../util/audio-util";

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
    playSoundEffect(false, "misc", "whooshLowAir");
  };

  return (
    <div className={classes.middle}>
      {continueIsVisible && (
        <FontAwesomeIcon
          className={classes.continue}
          icon={faArrowRightLong}
          onClick={handleContinue}
        />
        // <button className={classes.continue} onClick={handleContinue}>
        //   Continue
        // </button>
      )}
      {eventOptionsAreVisible && <EventOptions />}
    </div>
  );
}
