import classes from "./Enemy.module.css";

import { useSelector } from "react-redux";

import { setTarget } from "../../../../../store/combat-actions";

export default function Enemy({ enemy }) {
  const isHighlighted = useSelector(
    (state) => state.initiative.highlightedCharacter
  );

  const handleSetTarget = (enemy) => {
    setTarget(enemy);
  } 

  return (
    <div className={classes.enemy} onClick={() => handleSetTarget(enemy)}>
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
