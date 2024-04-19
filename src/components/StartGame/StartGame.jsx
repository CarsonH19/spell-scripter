import classes from "./StartGame.module.css";

import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

// following imports are only used for testing
import { dungeonActions } from "../../store/dungeon-slice";
import { currentRoom } from "../../data/dungeon";

import { heroActions } from "../../store/hero-slice";
import { currentParty } from "../../data/heroes";

export default function StartGame() {
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(uiActions.toggle({ modal: "startIsVisible" }));

    // the following are only used for testing
    dispatch(dungeonActions.updateRoom(currentRoom));
    dispatch(heroActions.updateParty(currentParty));
  };

  return (
    <div className={classes.start}>
      <h1>Spell Scripter</h1>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}
