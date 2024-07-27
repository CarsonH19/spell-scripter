import classes from "./GameWindow.module.css";

import store from "../../store/index";

import BottomContent from "./BottomContent/BottomContent";
import MiddleContent from "./MiddleContent/MiddleContent";
import TopContent from "./TopContent/TopContent";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { startCombat } from "../../store/combat-actions";
import Buttons from "./Buttons/Buttons";
import checkForDialogue, {
  setDialogues,
  getDialogue,
} from "../../util/dialogue-util";

import handleDialogue from "../../util/dialogue-util";
import { logActions } from "../../store/log-slice";
import { uiActions } from "../../store/ui-slice";
import { addCharacterToOrder } from "../../util/misc-util";
import { dungeonActions } from "../../store/dungeon-slice";

export default function GameWindow() {
  const dispatch = useDispatch();
  const dungeon = useSelector((state) => state.dungeon);

  useEffect(() => {
    handleGameFlow(dispatch);
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
      <BottomContent />
      <Buttons />
    </div>
  );
}

async function handleGameFlow(dispatch) {
  const event = store.getState().dungeon.contents.event;
  const dialogue = store.getState().dialogue;

  // Handle Combat
  if (!event) {
    // Sets initiative & adds enemies to combat order then begins the combatLoop
    startCombat(dispatch);
  }

  // Handle Event
  if (event) {
    setDialogues(dispatch, event);
    // Renders characters if the event BEGINS with characters
    if (event.characters) {
      // Add to combat-slice order
      for (let i = 0; i < event.characters.length; i++) {
        addCharacterToOrder(dispatch, event.characters[i]);
      }
    }

    // AUTO events must be set here. CHOICE events are set after choice is made
    if (event.type === "AUTO") {
      dispatch(dungeonActions.eventOutcome({ outcome: event.outcome }));
    }

    // Start Dialogue

    // await getDialogue(dispatch, "BEFORE");
    // await checkForDialogue(dispatch, "BEFORE");
    await handleDialogue(dispatch, "BEFORE");

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

    // Render Event Options
    dispatch(
      uiActions.changeUi({ element: "eventOptionsAreVisible", visible: true })
    );
  }
}
