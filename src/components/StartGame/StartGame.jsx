import classes from "./StartGame.module.css";

import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

// following imports are only used for testing
import { dungeonActions } from "../../store/dungeon.slice";
import { currentRoom } from "../../data/dungeon";

export default function StartGame() {
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(uiActions.toggle({ modal: "startIsVisible" }));

    // dungeonActions are only used for testing
    dispatch(dungeonActions.updateRoom(currentRoom));
  };

  return (
    <div className={classes.start}>
      <h1>Spell Scripter</h1>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}
