import { useDispatch, useSelector } from "react-redux";
import classes from "./EventOptions.module.css";

import eventFunctions from "../../../../util/event-functions";
import { dungeonActions } from "../../../../store/dungeon-slice";

export default function EventOptions() {
  const dispatch = useDispatch();
  const dungeon = useSelector((state) => state.dungeon);

  // Render Event Options
  let eventOptions;
  let complete;

  if (dungeon.contents.event) {
    eventOptions = dungeon.contents.event.options;
    complete = dungeon.contents.event.complete;
  }

  const handleClickEventOption = (dispatch, eventFunction, detail) => {
    eventFunction(dispatch, detail);
    dispatch(dungeonActions.completeEvent()); // sets complete to true (event options won't render)
  };

  console.log("OPTIONS", eventOptions);

  return (
    <div className={classes.events}>
      {!complete &&
        eventOptions.map((option) => {
          const eventFunction = eventFunctions[option.function];

          return (
            <button
              key={option.text}
              onClick={() =>
                handleClickEventOption(dispatch, eventFunction, option.text)
              }
            >
              {option.text}
            </button>
          );
        })}
    </div>
  );
}
