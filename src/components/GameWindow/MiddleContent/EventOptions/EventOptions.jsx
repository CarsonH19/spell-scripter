import { useDispatch, useSelector } from "react-redux";
import classes from "./EventOptions.module.css";

import eventFunctions from "../../../../util/event-functions";

import { useEffect, useState } from "react";
import { logActions } from "../../../../store/log-slice";
import { dungeonActions } from "../../../../store/dungeon-slice";

export default function EventOptions() {
  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();
  const dungeon = useSelector((state) => state.dungeon);
  const isTrap = dungeon.contents.event.type === "TRAP";

  useEffect(() => {
    setOpen(true);
  }, [dungeon.roomCounter]);

  let eventOptions;

  if (dungeon) {
    eventOptions = dungeon.contents.event.options;
  }

  const handleClickEventOption = (dispatch, eventFunction, choice, option) => {
    setOpen(false);

    // Add Outcome to event to display the outcome in the Room Summary Modal
    dispatch(dungeonActions.eventOutcome({ outcome: option.outcome }));
    dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
    dispatch(logActions.updateLogs({ change: "CLEAR" }));
    dispatch(logActions.updateLogs({ change: "ADD", text: option.narration }));
    eventFunction(dispatch, choice);
  };

  return (
    <div className={classes.events}>
      {open &&
        eventOptions.map((option) => {
          const eventFunction = eventFunctions[option.function];
          let choice;
          if (isTrap) {
            choice = option.text[1];
          } else {
            choice = option.text[0];
          }

          return (
            <button
              key={option.text}
              onClick={() =>
                handleClickEventOption(
                  dispatch,
                  eventFunction,
                  choice,
                  option
                )
              }
            >
              {Array.isArray(option.text) ? (
                option.text.map((line, index) => (
                  <span key={index} style={{ display: "block" }}>
                    {line}
                  </span>
                ))
              ) : (
                <span>{option.text}</span>
              )}
            </button>
          );
        })}
    </div>
  );
}
