import classes from "./StartGame.module.css";

import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { playerActions } from "../../store/player-slice";

import CONSUMABLES from "../../data/consumables";
import EQUIPMENT from "../../data/equipment";
import { v4 as uuidv4 } from "uuid";

export default function StartGame() {
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(uiActions.toggle({ modal: "startIsVisible" })); // false
    dispatch(uiActions.toggle({ modal: "dashboardIsVisible" })); // true

    // TEST CODE FOR INVENTORY
    let test = 10;
    for (let i = 0; i < test; i++) {
      dispatch(
        playerActions.changeInventory({
          item: { ...CONSUMABLES.LESSER_HEALTH_POTION, id: uuidv4() },
          change: "ADD",
        })
      );
    }

    for (let i = 0; i < test; i++) {
      dispatch(
        playerActions.changeInventory({
          item: { ...CONSUMABLES.CRYPTBREAD, id: uuidv4() },
          change: "ADD",
        })
      );
    }

    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.BLACKHEART_CROWN, id: uuidv4() },
          change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.BLACKHEART_REGALIA, id: uuidv4() },
          change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.BLACKHEART_SCEPTER, id: uuidv4() },
          change: "ADD",
      })
    );
  };

  return (
    <div className={classes.start}>
      <h1>Spell Scripter</h1>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}
