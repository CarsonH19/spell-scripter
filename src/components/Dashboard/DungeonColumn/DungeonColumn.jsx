import classes from "./DungeonColumn.module.css";

// following imports are only used for testing
import { uiActions } from "../../../store/ui-slice";

import { useDispatch } from "react-redux";

import { setDungeon } from "../../../util/dungeon-util";

// TEST HERO LEVELING
import { HERO_LEVELING_MAP } from "../../../util/hero-leveling";
import { levelUpHero } from "../../../util/hero-leveling";

export default function DungeonColumn() {
  const dispatch = useDispatch();

  const handleEnter = () => {
    //TEST HERO LEVELING
    levelUpHero("Siggurd", HERO_LEVELING_MAP.SIGGURD.TWO);

    dispatch(uiActions.toggle({ modal: "modalIsVisible" })); // set to true

    setDungeon(dispatch, "The Great Catacomb");

    dispatch(
      uiActions.toggleModal({ modal: "confirmationModal", open: "OPEN" })
    ); // set to true
  };

  return (
    <div className={classes.column}>
      <h1>Dungeons</h1>
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
