import classes from "./Enemy.module.css";

import { useSelector } from "react-redux";

export default function Enemy({ enemy }) {
  const isHighlighted = useSelector(
    (state) => state.initiative.highlightedCharacter
  );

  return (
    <div className={classes.enemy}>
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
          isHighlighted === enemy ? classes.highlighted : ""
        }`}
      >
        {enemy.name}
      </div>{" "}
    </div>
  );
}
