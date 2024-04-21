import classes from "./DungeonColumn.module.css";

// following imports are only used for testing
import { uiActions } from "../../../store/ui-slice";
import { useDispatch } from "react-redux";

import { dungeonActions } from "../../../store/dungeon-slice";
import { currentRoom } from "../../../data/dungeon";

import { heroActions } from "../../../store/hero-slice";
import { currentParty } from "../../../data/heroes";

export default function DungeonColumn() {
  const dispatch = useDispatch();

  const handleEnter = () => {
    dispatch(uiActions.toggle({ modal: "dashboardIsVisible" })); // false
    dispatch(uiActions.toggle({ modal: "gameWindowIsVisible" })); // true

    // the following are only used for testing
    dispatch(dungeonActions.updateRoom(currentRoom));
    dispatch(heroActions.updateParty(currentParty));
  };

  return (
    <div className={classes.column}>
      <h1>Dungeons</h1>
      <hr />
      <div className={classes.dungeons}>
        <div className={classes.selection}>
          <h2> The Great Catacombs</h2>
          <p> Mastery Points Required: 0</p>

          {/* Set Background Dungeon Image */}
        </div>
        <p>CHECKPOINT SELECTION</p>
        <hr />
        <p>Description</p>
        <p className={classes.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nulla
          ut sequi illo quae ipsa nobis cumque dolore? Quo ipsa quas velit
          laudantium ab ipsam a illo tempora cum in!
        </p>
        <button onClick={handleEnter}>Enter</button>
      </div>
    </div>
  );
}
