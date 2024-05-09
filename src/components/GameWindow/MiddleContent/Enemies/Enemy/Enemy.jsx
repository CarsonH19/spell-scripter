import classes from "./Enemy.module.css";

import Tooltip from "../../../../UI/Tooltip";

import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTarget } from "../../../../../store/combat-actions";
import { targetType } from "../../../../../util/targeting";
import updateStatTotals from "../../../../../store/stats-actions";

const Enemy = ({ enemy }) => {
  const dispatch = useDispatch();

  const order = useSelector((state) => state.combat.order);
  const enemyIndex = order.findIndex((char) => char.id === enemy.id);
  enemy = order[enemyIndex];

  const isHighlighted = useSelector(
    (state) => state.combat.highlightedCharacter === enemy.id
  );

  const isCharacterTurn = useSelector((state) => state.combat.isCharacterTurn);

  const [showDamage, setShowDamage] = useState(false);

  useEffect(() => {
    // Show the damage number
    setShowDamage(true);
    // Set timeout to hide the damage number after 2 seconds
    const timeoutId = setTimeout(() => {
      setShowDamage(false);
    }, 2000);

    updateStatTotals(dispatch, enemy.id);

    // Clear timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, [enemy.damageDisplay]);

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
          <progress
            max={enemy.stats.strength.maxHealth}
            value={enemy.currentHealth}
          >
            Health Bar
          </progress>
        </div>
        <div className={classes.statusEffects}>
          {enemy.statusEffects.map((effect) => (
            <Tooltip
              key={effect.name}
              title={effect.name}
              text={effect.description}
              detail={`Duration: ${effect.duration} rounds`}
            >
              <img src="" className={classes.effect} />
            </Tooltip>
          ))}
        </div>
      </div>
      <div
        className={`${classes.image} ${
          isHighlighted ? classes.highlighted : ""
        } ${isCharacterTurn === enemy.id ? classes.turn : ""}`}
      >
        {showDamage && <p>{enemy.damageDisplay}</p>}{" "}
      </div>
    </div>
  );
};

// Memoize the Enemy component to prevent unnecessary rerender
const MemoizedEnemy = memo(Enemy);

export default MemoizedEnemy;
