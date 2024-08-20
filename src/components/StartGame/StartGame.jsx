import classes from "./StartGame.module.css";

import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { playerActions } from "../../store/player-slice";

import CONSUMABLES from "../../data/consumables";
import EQUIPMENT from "../../data/equipment";
import MISC_ITEMS from "../../data/misc-items";
import { v4 as uuidv4 } from "uuid";
import { backgroundMusic, playMusic } from "../../data/audio/music";
import { useState } from "react";
import playSoundEffect from "../../util/audio-util";

export default function StartGame() {
  const dispatch = useDispatch();
  const [off, setOff] = useState(false);

  const handleStart = () => {
    startTransition(dispatch);
    setOff(true);

    // // Start Dashboard Music
    playMusic(backgroundMusic.intangibleAscension);

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.HEALTH_POTION, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.MANA_POTION, id: uuidv4() },
        change: "ADD",
      })
    );
  };

  return (
    <div
      className={classes.start}
      style={{
        backgroundImage: `url("/assets/start-screen-background.jpg")`,
      }}
    >
      <div className={classes.title}>
        <h1>Spell</h1>
        <h1>Scripter</h1>
      </div>
      <button
        disabled={off}
        onClick={handleStart}
        style={off ? { pointerEvents: "none" } : {}}
      >
        Start
      </button>
    </div>
  );
}

async function startTransition(dispatch) {
  playSoundEffect(false, "ui", "GUIMenuButton", 0.9);

  await dispatch(uiActions.updateFade({ change: "CALL" }));
  await delay(2000);
  dispatch(uiActions.changeUi({ element: "startIsVisible", visible: false })); // false
  dispatch(
    uiActions.changeUi({ element: "dashboardIsVisible", visible: true })
  );

  await dispatch(uiActions.updateFade({ change: "CLEAR" }));

  async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
