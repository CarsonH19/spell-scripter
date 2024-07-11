import { useDispatch, useSelector } from "react-redux";
import classes from "./EventOptions.module.css";

import eventFunctions from "../../../../util/event-functions";

import { useEffect, useState } from "react";
import { logActions } from "../../../../store/log-slice";

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

  const handleClickEventOption = (dispatch, eventFunction, detail, option) => {
    setOpen(false);
    dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
    dispatch(logActions.updateLogs({ change: "CLEAR" }));
    dispatch(logActions.updateLogs({ change: "ADD", text: option.narration }));
    eventFunction(dispatch, detail);
  };

  return (
    <div className={classes.events}>
      {open &&
        eventOptions.map((option) => {
          const eventFunction = eventFunctions[option.function];
          let optionChoice;
          if (isTrap) {
            optionChoice = option.text[1];
          } else {
            optionChoice = option.text[0];
          }

          return (
            <button
              key={option.text}
              onClick={() =>
                handleClickEventOption(
                  dispatch,
                  eventFunction,
                  optionChoice,
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
