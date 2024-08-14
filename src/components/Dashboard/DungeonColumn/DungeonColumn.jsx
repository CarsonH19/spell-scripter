import classes from "./DungeonColumn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setDungeon } from "../../../util/dungeon-util";
import { openModal } from "../../../store/ui-actions";

export default function DungeonColumn() {
  const dispatch = useDispatch();
  const dungeon = useSelector((state) => state.dungeon);

  const handleEnter = () => {
    setDungeon(dispatch, "The Great Catacomb");
    openModal(dispatch, "confirmationModal");
  };

  return (
    <div className={classes.column}>
      <h1>Dungeons</h1>
      <div className={classes.dungeons}>
        <h2> The Great Catacombs</h2>
        <div
          className={classes.selection}
          style={{
            backgroundImage: `url(src/assets/images/backgrounds/the-great-catacomb/catacomb-entrance-3.jpg)`,
          }}
        >
          {/* <p> Mastery Points Required: 0</p> */}
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
