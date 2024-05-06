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
  const continueVisible = useSelector((state) => state.ui.continueIsVisible);

  const handleContinue = () => {
    dispatch(uiActions.toggle({ modal: "continueIsVisible" }));
    createNewRoom(dispatch);
  };

  return (
    <div className={classes.middle}>
      <Party />
      {continueVisible && <button onClick={handleContinue}>Continue</button>}
      {event && <EventOptions />}
      <Enemies />
    </div>
  );
}
