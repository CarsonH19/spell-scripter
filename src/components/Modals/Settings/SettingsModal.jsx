import { useDispatch } from "react-redux";

import classes from "./SettingsModal.module.css";

import { uiActions } from "../../../store/ui-slice";
import { logActions } from "../../../store/log-slice";
import { dungeonActions } from "../../../store/dungeon-slice";
import playSoundEffect from "../../../util/audio-util";
import { playMusic } from "../../../data/audio/music";
import { backgroundMusic } from "../../../data/audio/music";
import { combatActions } from "../../../store/combat-slice";

export default function SettingsModal() {
  const dispatch = useDispatch();

  const handleExitDungeon = () => {
    exitDungeonTransition(dispatch);

    // Clear any lingering narrations
    dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
    dispatch(logActions.updateLogs({ change: "CLEAR" }));

    // Toggle off danger
    dispatch(dungeonActions.dangerToggle({ danger: false }));
  };

  return (
    <div className={classes.settings}>
      <h1>Settings</h1>
      <button onClick={handleExitDungeon}>Exit Dungeon</button>
    </div>
  );
}

export async function exitDungeonTransition(dispatch) {
  // Clear initiative tracker
  dispatch(combatActions.initiativeTracker({ change: "REMOVE" }));

  await dispatch(uiActions.updateFade({ change: "CALL" }));
  playSoundEffect(false, "ui", "GUIMenuButton");
  dispatch(
    uiActions.changeUi({ element: "continueIsVisible", visible: false })
  );
  // Clear event options
  dispatch(
    uiActions.changeUi({ element: "eventOptionsAreVisible", visible: false })
  );
  await delay(3000);

  playMusic(backgroundMusic.intangibleAscension);
  // Open dashboard
  dispatch(
    uiActions.changeUi({ element: "dashboardIsVisible", visible: true })
  );
  // Close game window
  dispatch(
    uiActions.changeUi({ element: "gameWindowIsVisible", visible: false })
  );
  // Close modal
  dispatch(uiActions.changeUi({ element: "modalIsVisible", visible: false }));

  await dispatch(uiActions.updateFade({ change: "CLEAR" }));

  async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
