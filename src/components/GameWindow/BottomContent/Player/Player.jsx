import classes from "./Player.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  // faShieldHalved,
  // faFireFlameCurved,
  faHandFist,
  faPersonRunning,
  faHatWizard,
  faHandSparkles,
} from "@fortawesome/free-solid-svg-icons";

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

  // const healthBarLength = player.stats.strength.maxHealth;
  // const manaBarLength =

  return (
    <div className={classes.player} onClick={handleSetTarget}>
      <div className={classes.health}>
        <p className={classes.name}>{player.name}</p>
        <hr />
        <div className={classes.healthInfo}>
          <div>
            <Tooltip title={"Health Points"}>
              <FontAwesomeIcon icon={faHeart} /> {player.currentHealth}/
              {player.stats.strength.maxHealth}
            </Tooltip>
          </div>
          <div>
            <Tooltip title={"Magic Points"}>
              <FontAwesomeIcon icon={faHandSparkles} /> {player.currentMana}/
              {player.stats.arcana.maxMana}
            </Tooltip>
          </div>
        </div>
        <div className={classes.bars}>
          <progress
            max={player.stats.strength.maxHealth}
            value={player.currentHealth}
            className={classes.healthBar}
            style={{ width: `${player.stats.strength.maxHealth / 5 + 10}rem` }}
          ></progress>
          <progress
            max={player.stats.arcana.maxMana}
            value={player.currentMana}
            className={classes.mana}
            style={{ width: `${player.stats.arcana.maxMana / 5 + 10}rem` }}
          ></progress>
        </div>
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
        <p>
          <FontAwesomeIcon icon={faHandFist} />{" "}
          {player.stats.strength.totalStrength}
        </p>
        <p>
          <FontAwesomeIcon icon={faPersonRunning} />{" "}
          {player.stats.agility.totalAgility}
        </p>
        <p>
          <FontAwesomeIcon icon={faHatWizard} />{" "}
          {player.stats.arcana.totalArcana}
        </p>
      </div>
    </div>
  );
}
