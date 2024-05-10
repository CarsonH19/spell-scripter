import classes from "./Player.module.css";

import { useDispatch, useSelector } from "react-redux";

import { combatActions } from "../../../../store/combat-slice";

import { setTarget } from "../../../../store/combat-actions";
import { targetType } from "../../../../util/targeting";

import Tooltip from "../../../UI/Tooltip";
import { useEffect, useState } from "react";

export default function Player() {
  const dispatch = useDispatch();

  const order = useSelector((state) => state.combat.order);
  const playerIndex = order.findIndex((char) => char.id === "Player");
  const player = order[playerIndex];
  const isHighlighted = useSelector(
    (state) => state.combat.highlightedCharacter
  );
  const isCharacterTurn = useSelector((state) => state.combat.isCharacterTurn);

  const [showDamage, setShowDamage] = useState(false);

  useEffect(() => {
    // Show the damage number
    setShowDamage(true);
    // Set timeout to hide the damage number after 2 seconds
    const timeoutId = setTimeout(() => {
      setShowDamage(false);

      // Clear the damage display
      dispatch(
        combatActions.updateDamageDisplay({
          id: player.id,
          value: null,
        })
      );
    }, 2000);

    // Clear timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, [player.damageDisplay]);

  const handleSetTarget = () => {
    if (targetType === "ALLIES") {
      setTarget(player);
    }
  };

  return (
    <div className={classes.player} onClick={handleSetTarget}>
      <div className={classes.health}>
        <p className={classes.name}>{player.name}</p>
        <hr />
        <div className={classes.info}>
          <p>
            HP: <span>{player.currentHealth}</span> /{" "}
            <span>{player.stats.strength.maxHealth}</span>
          </p>
          <p>
            Exp: <span>{player.currentExp}</span> /
            <span>{player.expToNextLevel}</span>
          </p>
          <p>
            Lvl: <span>{player.level}</span>
          </p>
        </div>
        <progress
          max={player.stats.strength.maxHealth}
          value={player.currentHealth}
        >
          100%
        </progress>
        <div className={classes.statusEffects}>
          {player.statusEffects.map((effect) => {
            if (effect.display) {
              const content = (
                <Tooltip
                  key={effect.name}
                  title={effect.name}
                  text={effect.description}
                  detail={`Duration: ${effect.duration} rounds`}
                >
                  <img src="" className={classes.effect} />
                </Tooltip>
              );
              return content;
            }
          })}
        </div>
      </div>

      <div
        className={`${classes.image} ${
          isHighlighted === player.id ? classes.highlighted : ""
        } ${isCharacterTurn === player.id ? classes.turn : ""}`}
      >
        {showDamage && <p>{player.damageDisplay}</p>}{" "}
      </div>
      <div>
        <p>Strength: {player.stats.strength.totalStrength}</p>
        <p>Agility: {player.stats.agility.totalAgility}</p>
        <p>Arcana: {player.stats.arcana.totalArcana}</p>
      </div>
    </div>
  );
}
