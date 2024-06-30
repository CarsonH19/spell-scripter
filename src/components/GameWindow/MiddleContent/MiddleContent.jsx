import classes from "./MiddleContent.module.css";

import Party from "./Party/Party";
import EventOptions from "./EventOptions/EventOptions";
import Enemies from "./Enemies/Enemies";
import { useDispatch, useSelector } from "react-redux";

import { createNewRoom } from "../../../util/dungeon-util";
import { uiActions } from "../../../store/ui-slice";

export default function MiddleContent() {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.dungeon.contents.event);

  // Continue Button Logic
  const continueIsVisible = useSelector((state) => state.ui.continueIsVisible);

  const handleContinue = () => {
    dispatch(
      uiActions.changeUi({ element: "continueIsVisible", visible: true })
    );
    createNewRoom(dispatch);
  };

  return (
    <div className={classes.middle}>
      <Party />
      {continueIsVisible && (
        <button className={classes.continue} onClick={handleContinue}>
          Continue
        </button>
      )}
      {event && <EventOptions />}
      <Enemies />
    </div>
  );
}
