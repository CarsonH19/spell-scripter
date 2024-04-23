import classes from "./Actions.module.css";
import { setPlayerAction } from "../../../../store/combat-actions";

export default function Actions () {
  const handlePlayerChoice = async (action) => {
    setPlayerAction(action);
  };

  return (
    <div className={classes.actions}>
      <button onClick={() => handlePlayerChoice("ATTACK")}>Attack</button>
      <button onClick={() => handlePlayerChoice("GUARD")}>Guard</button>
      <button onClick={() => handlePlayerChoice("ITEM")}>Use Item</button>
      <button onClick={() => handlePlayerChoice("FLEE")}>Flee</button>
    </div>
  )
}