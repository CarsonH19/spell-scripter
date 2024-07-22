import classes from "./GameWindow.module.css";

import BottomContent from "./BottomContent/BottomContent";
import MiddleContent from "./MiddleContent/MiddleContent";
import TopContent from "./TopContent/TopContent";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import combatLoop, { startCombat } from "../../store/combat-actions";
import Buttons from "./Buttons/Buttons";
import checkForDialogue from "../../util/dialogue-util";

export default function GameWindow() {
  const dispatch = useDispatch();
  const dungeon = useSelector((state) => state.dungeon);

  useEffect(() => {
    handleGameFlow(dispatch, dungeon);
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

async function handleGameFlow(dispatch, dungeon) {
  // If there is no event in the dungeon-slice combat will begin
  if (!dungeon.contents.event) {
    startCombat(dispatch);
  } else {
    // Used to determine dialogue at the beginning of an event
    switch (dungeon.contents.event.name) {
      case "Aiding Siggurd":
        // dialogue called in combatLoop
        break;

      default:
        await checkForDialogue(dispatch, "BEFORE");
        break;
    }
  }
}
