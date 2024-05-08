import { useDispatch, useSelector } from "react-redux";
import classes from "./EventOptions.module.css";

import eventFunctions from "../../../../util/event-functions";
// import { dungeonActions } from "../../../../store/dungeon-slice";

import { useEffect, useState } from "react";

export default function EventOptions() {
  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();
  const dungeon = useSelector((state) => state.dungeon);

  useEffect(() => {
    setOpen(true);
    console.log("counter", dungeon.roomCounter);
  }, [dungeon.roomCounter]);

  let eventOptions;
  // let complete;

  if (dungeon) {
    eventOptions = dungeon.contents.event.options;
    // complete = dungeon.contents.event.complete;
  }

  const handleClickEventOption = (dispatch, eventFunction, detail) => {
    setOpen(false);
    eventFunction(dispatch, detail);

    // sets complete to true (event options won't render)
    // dispatch(dungeonActions.completeEvent());
  };

  console.log("open", open);

  return (
    <div className={classes.events}>
      {open &&
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
