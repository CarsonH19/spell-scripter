import classes from "./Enemy.module.css";

import Tooltip from "../../../../UI/Tooltip";

import { memo } from "react";
import { useSelector } from "react-redux";
import { setTarget } from "../../../../../store/combat-actions";
import { targetType } from "../../../../../util/targeting";

const Enemy = ({ enemy }) => {
  const isHighlighted = useSelector(
    (state) => state.initiative.highlightedCharacter === enemy.id
  );

  const handleSetTarget = () => {
    if (targetType === "ENEMIES") {
      setTarget(enemy);
    }
  };

  return (
    <div className={classes.enemy} onClick={handleSetTarget}>
      <div className={classes.container}>
        <p className={classes.name}>{enemy.name}</p>

        <div className={classes.health}>
          <div className={classes.info}>
            <p>
              HP: <span>{enemy.currentHealth}</span> /{" "}
              <span>{enemy.stats.strength.maxHealth}</span>
            </p>
          </div>
          <progress max={enemy.stats.strength.maxHealth} value={enemy.currentHealth}>
            Health Bar
          </progress>
        </div>
        <div className={classes.statusEffects}>
          {enemy.statusEffects.map((effect) => (
            <Tooltip key={effect.name} text={effect.name}>
              <img src="" className={classes.effect} />
            </Tooltip>
          ))}
        </div>
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
