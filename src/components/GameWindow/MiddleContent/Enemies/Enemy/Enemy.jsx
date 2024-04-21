import classes from "./Enemy.module.css";

import { dungeonActions } from "../../../../../store/dungeon-slice";
import { useDispatch } from "react-redux";

import { castSpell } from "../../../../../data/player";

export default function Enemy({ enemy }) {
  // Instead of using a slice maybe I can add useState here so that its easier to create a state object for each enemy
  const dispatch = useDispatch();

  const handleAttack = () => {
    const id = enemy.id;
    const spell = castSpell("FIREBOLT")

    dispatch(dungeonActions.damageEnemy({ id, spell}));
  }

  return (
    <div className={classes.enemy} onClick={handleAttack}>
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
      <div className={classes.image}></div>
    </div>
  );
}
