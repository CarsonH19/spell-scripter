import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTarget } from "../../../../../store/combat-actions";
import classes from "./Enemy.module.css";

const Enemy = ({ enemy }) => {
  const isHighlighted = useSelector(
    (state) => state.initiative.highlightedCharacter === enemy.id
  );

  const dispatch = useDispatch();

  const handleSetTarget = () => {
    dispatch(setTarget(enemy));
  };

  console.log("Rendered!");

  return (
    <div className={classes.enemy} onClick={handleSetTarget}>
      <div className={classes.container}>
        <p className={classes.name}>{enemy.name}</p>
        <div className={classes.info}>
          <p>
            Lvl: <span>{enemy.level}</span>
          </p>
          <p>
            HP: <span>{enemy.currentHealth}</span> /{" "}
            <span>{enemy.maxHealth}</span>
          </p>
        </div>
        <progress max={enemy.maxHealth} value={enemy.currentHealth}>
          Health Bar
        </progress>
      </div>
      <div
        className={`${classes.image} ${
          isHighlighted ? classes.highlighted : ""
        }`}
      >
        {enemy.name}
      </div>
    </div>
  );
};

// Memoize the Enemy component to prevent unnecessary rerender
const MemoizedEnemy = memo(Enemy);

export default MemoizedEnemy;
