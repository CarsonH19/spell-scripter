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
  const isAuto = dungeon.contents.event.type === "AUTO";
  let eventOptions;

  useEffect(() => {
    if (!isAuto) {
      setOpen(true);
    } else {
      // Call auto event function
      const eventFunction = eventFunctions[dungeon.contents.event.function];
      eventFunction(dispatch);
      // eventOptions = [];
    }
  }, [dungeon.roomCounter]);

  const narrative = useSelector((state) => state.log.narration);
  const handleClickEventOption = (dispatch, eventFunction, choice, option) => {
    setOpen(false);

    // Add Outcome to event to display the outcome in the Room Summary Modal
    dispatch(dungeonActions.eventOutcome({ outcome: option.outcome }));
    dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
    dispatch(logActions.updateLogs({ change: "CLEAR" }));
    dispatch(logActions.updateLogs({ change: "ADD", text: option.narration }));
    eventFunction(dispatch, choice);
  };

  let content;

  if (!isAuto) {
    eventOptions = dungeon.contents.event.options;
    content = (
      <>
        {eventOptions.map((option) => {
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
                handleClickEventOption(dispatch, eventFunction, choice, option)
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
      </>
    );
  }

  return <div className={classes.events}>{open && content}</div>;
}
