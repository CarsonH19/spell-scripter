import classes from "./GameWindow.module.css";

import store from "../../store/index";

import BottomContent from "./BottomContent/BottomContent";
import MiddleContent from "./MiddleContent/MiddleContent";
import TopContent from "./TopContent/TopContent";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { startCombat } from "../../store/combat-actions";
import Buttons from "./Buttons/Buttons";
import checkForDialogue from "../../util/dialogue-util";

import { logActions } from "../../store/log-slice";
import { addCharacterToOrder } from "../../util/misc-util";
import { dungeonActions } from "../../store/dungeon-slice";
import eventFunctions from "../../util/event-functions";
import playSoundEffect from "../../util/audio-util";

export default function GameWindow() {
  const [showBottom, setShowBottom] = useState(true);
  const dispatch = useDispatch();
  const dungeon = useSelector((state) => state.dungeon);

  useEffect(() => {
    handleGameFlow(dispatch, setShowBottom);
  }, [dungeon.roomCounter]);

  return (
    <div
      className={classes.window}
      style={{
        backgroundImage: `url(${dungeon.image}.jpg)`,
      }}
    >
      <TopContent />
      <MiddleContent />
      {showBottom && <BottomContent />}
      {showBottom && <Buttons />}
    </div>
  );
}

async function handleGameFlow(dispatch, setShowBottom) {
  const dungeon = store.getState().dungeon;
  const event = store.getState().dungeon.contents.event;

  // Narrate dungeon name on entrance
  if (dungeon.roomCounter === 0) {
    setShowBottom(false);
    await locationNarration(dispatch, dungeon.name);
  }



  // Narrate path name on entrance
  if (dungeon.path && dungeon.pathCounter === 9) {
    setShowBottom(false);
    await locationNarration(dispatch, dungeon.path);
  }

  setShowBottom(true);

  // Handle Combat
  if (!event) {
    // Sets initiative & adds enemies to combat order then begins the combatLoop
    // Dialogue
    await checkForDialogue(dispatch, "before");
    startCombat(dispatch);
  }

  // Handle Event
  if (event) {
    // Renders characters if the event BEGINS with characters
    if (event.characters) {
      // Add to combat-slice order
      for (let i = 0; i < event.characters.length; i++) {
        addCharacterToOrder(dispatch, event.characters[i]);
      }
    }

    // Dialogue
    await checkForDialogue(dispatch, "before");

    // AUTO Events
    if (event.type === "AUTO") {
      // Call auto event function after dialogue
      const eventFunction = eventFunctions[event.function];
      eventFunction(dispatch);

      dispatch(dungeonActions.eventOutcome({ outcome: event.outcome }));
    }

    // Narration
    dispatch(logActions.updateLogs({ change: "PAUSE" }));
    for (let i = 0; i < event.description.length; i++) {
      dispatch(
        logActions.updateLogs({
          change: "ADD",
          text: event.description[i],
        })
      );
    }
  }
}

async function locationNarration(dispatch, location) {
  dispatch(logActions.updateLogs({ change: "CLEAR" }));
  dispatch(logActions.updateLogs({ change: "PAUSE" }));
  await delay(2000);
  playSoundEffect(false, "misc", "enterDungeon");
  dispatch(
    logActions.updateLogs({
      change: "ADD",
      text: `${location}`,
    })
  );
  await delay(4000);
  // Clear Narrative
  dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
  dispatch(logActions.updateLogs({ change: "CLEAR" }));
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
