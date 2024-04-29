import classes from "./DungeonColumn.module.css";

// following imports are only used for testing
import { uiActions } from "../../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

import { dungeonActions } from "../../../store/dungeon-slice";
import { currentRoom } from "../../../data/dungeon";

import { heroActions } from "../../../store/hero-slice";
import { currentParty } from "../../../data/heroes";

import { combatActions } from "../../../store/combat-slice";

import { playerActions } from "../../../store/player-slice";
import { spellList } from "../../../data/spells";
import updateStatTotals from "../../../store/stats-actions";

export default function DungeonColumn() {
  const dispatch = useDispatch();

  const heroes = currentParty;
  const enemies = currentRoom.contents.enemies;
  const player = useSelector((state) => state.player);

  const handleEnter = () => {
    dispatch(uiActions.toggle({ modal: "dashboardIsVisible" })); // false
    dispatch(uiActions.toggle({ modal: "gameWindowIsVisible" })); // true

    // the following are only used for testing
    dispatch(playerActions.updateSpellList(spellList));
    dispatch(dungeonActions.updateRoom(currentRoom));
    dispatch(heroActions.updateParty(heroes));
    dispatch(combatActions.setInitiative({ heroes, enemies, player }));

    // TESTING CODE update all stats
    for (let i = 0; i < heroes.length; i++) {
      updateStatTotals(dispatch, heroes[i]);
    }

    for (let i = 0; i < enemies.length; i++) {
      updateStatTotals(dispatch, enemies[i]);
    }

    updateStatTotals(dispatch, player);
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
