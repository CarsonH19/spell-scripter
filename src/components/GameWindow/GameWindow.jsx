import classes from "./GameWindow.module.css";

import store from "../../store/index";

import BottomContent from "./BottomContent/BottomContent";
import MiddleContent from "./MiddleContent/MiddleContent";
import TopContent from "./TopContent/TopContent";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { startCombat } from "../../store/combat-actions";
import Buttons from "./Buttons/Buttons";
import checkForDialogue, { setDialogues } from "../../util/dialogue-util";
import { logActions } from "../../store/log-slice";
import { uiActions } from "../../store/ui-slice";
import { addEnemyToOrder } from "../../util/misc-util";

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
        backgroundImage: `url(${dungeon.image})`,
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
      console.log(event);
      for (let i = 0; i < event.characters.length; i++) {
        console.log(event.characters[i]);
        addEnemyToOrder(dispatch, event.characters[i]);
      }
    }

    await checkForDialogue(dispatch, "BEFORE");
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
    dispatch(
      uiActions.changeUi({ element: "eventOptionsAreVisible", visible: true })
    );
  }
}

//   if (dungeon.contents.event) {
//     dispatch(logActions.updateLogs({ change: "PAUSE" }));
//     for (let i = 0; i < dungeon.contents.event.description.length; i++) {
//       dispatch(
//         logActions.updateLogs({
//           change: "ADD",
//           text: dungeon.contents.event.description[i],
//         })
//       );
//     }
//   }
