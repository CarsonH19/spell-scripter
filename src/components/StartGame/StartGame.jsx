import classes from "./StartGame.module.css";

import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

export default function StartGame() {
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(uiActions.toggle({ modal: "startIsVisible" }));
  };

  return (
    <div className={classes.start}>
      <h1>Spell Scripter</h1>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}
