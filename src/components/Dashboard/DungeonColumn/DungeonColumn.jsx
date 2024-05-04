import classes from "./DungeonColumn.module.css";

// following imports are only used for testing
import { uiActions } from "../../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

import { currentRoom } from "../../../data/dungeon";

import { combatActions } from "../../../store/combat-slice";

import updateStatTotals from "../../../store/stats-actions";
import { setDungeon } from "../../../util/dungeon-util";

export default function DungeonColumn() {
  const dispatch = useDispatch();

  const enemies = currentRoom.contents.enemies;
  const heroes = useSelector((state) => state.hero.party);
  const player = useSelector((state) => state.player);

  const handleEnter = () => {
    setDungeon(dispatch, "The Great Catacomb");

    console.log(1);
    dispatch(uiActions.toggle({ modal: "dashboardIsVisible" })); // false
    dispatch(uiActions.toggle({ modal: "gameWindowIsVisible" })); // true

    // the following are only used for testing
    dispatch(combatActions.setInitiative({ heroes, enemies, player }));

    // TESTING CODE update all stats
    for (let i = 0; i < heroes.length; i++) {
      updateStatTotals(dispatch, heroes[i].id);
    }

    for (let i = 0; i < enemies.length; i++) {
      updateStatTotals(dispatch, enemies[i].id);
    }

    updateStatTotals(dispatch, player.id);
  };

  return (
    <div className={classes.column}>
      <h1>Dungeons</h1>
      <hr />
      <div className={classes.dungeons}>
        <div className={classes.selection}>
          <h2> The Great Catacombs</h2>
          <p> Mastery Points Required: 0</p>
        </div>
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
