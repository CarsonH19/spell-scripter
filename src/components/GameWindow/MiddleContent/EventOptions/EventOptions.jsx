import { useDispatch, useSelector } from "react-redux";
import classes from "./EventOptions.module.css";

import eventFunctions from "../../../../util/event-functions";

export default function EventOptions() {
  const dispatch = useDispatch();
  const dungeon = useSelector((state) => state.dungeon);
  // Render Event Options
  let eventOptions;
  if (dungeon.contents.event) {
    eventOptions = dungeon.contents.event.options;
  }

  return (
    <div className={classes.events}>
      {eventOptions.map((option) => {
        const eventFunction = eventFunctions[option.function];
        console.log(eventFunction);

        return (
          <button key={option.text} onClick={() => eventFunction(dispatch)}>
            {option.text}
          </button>
        );
      })}
    </div>
  );
}
