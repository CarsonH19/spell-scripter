import { useDispatch, useSelector } from "react-redux";
import classes from "./EventOptions.module.css";

import eventFunctions from "../../../../util/event-functions";

import { useEffect, useState } from "react";

export default function EventOptions() {
  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();
  const dungeon = useSelector((state) => state.dungeon);
  const isTrap = dungeon.event.type === "TRAP";

  useEffect(() => {
    setOpen(true);
  }, [dungeon.roomCounter]);

  let eventOptions;

  if (dungeon) {
    eventOptions = dungeon.contents.event.options;
  }

  const handleClickEventOption = (dispatch, eventFunction, detail) => {
    setOpen(false);
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
            optionChoice = option.text;
          }

          return (
            <button
              key={option.text}
              onClick={() =>
                handleClickEventOption(dispatch, eventFunction, optionChoice)
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
