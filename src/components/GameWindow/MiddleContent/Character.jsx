import classes from "./Character.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Tooltip from "../../UI/Tooltip";

import { useDispatch, useSelector } from "react-redux";

import { combatActions } from "../../../store/combat-slice";

import { targetType } from "../../../util/targeting";
import { setTarget } from "../../../store/combat-actions";
import updateStatTotals from "../../../store/stats-actions";

import { useEffect, useState } from "react";

export default function Character({ character }) {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.combat.order);
  const characterIndex = order.findIndex((char) => char.id === character.id);
  character = order[characterIndex];
  const isHighlighted = useSelector(
    (state) => state.combat.highlightedCharacter === character.id
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
          id: character.id,
          value: null,
        })
      );
    }, 2000);

    updateStatTotals(dispatch, character.id);

    // Clear timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, [character.damageDisplay]);

  const handleSetTarget = () => {
    if (
      targetType === "ALLIES" &&
      (character.identifier === "HERO" || character.identifier === "PLAYER")
    ) {
      setTarget(character);
    }

    if (targetType === "ENEMIES" && character.identifier === "ENEMY") {
      setTarget(character);
    }
  };

  const container = (
    <div
      className={`${classes.container} ${
        character.identifier === "ENEMY"
          ? classes.enemyContainer
          : classes.heroContainer
      }`}
    >
      <p
        className={`${classes.name} ${
          character.identifier === "ENEMY" ? classes.enemyName : ""
        }`}
      >
        {character.name}
      </p>

      <div className={classes.health}>
        <div
          className={`${classes.info} ${
            character.identifier === "ENEMY"
              ? classes.enemyInfo
              : classes.heroInfo
          }`}
        >
          <p>
            <FontAwesomeIcon icon={faHeart} /> {character.currentHealth}/
            {character.stats.strength.maxHealth}
          </p>
        </div>
        <progress
          max={character.stats.strength.maxHealth}
          value={character.currentHealth}
        >
          Health Bar
        </progress>
      </div>
      <div className={`${classes.statusEffects} ${
          character.identifier === "HERO" ? classes.heroStatusEffects : ""
        }`}>
        {character.statusEffects.map((effect) => {
          const isCharacterEnemy = character.identifier === "ENEMY";
          let duration;
          if (effect.duration === "ROUND") {
            duration = `Duration: ${effect.duration} ${
              effect.duration > 1 ? "rounds" : "round"
            }`;
          } else if ("ROOM") {
            `Duration: ${effect.duration} ${
              effect.duration > 1 ? "rooms" : "room"
            }`;
          }

          return (
            <Tooltip
              key={effect.name}
              title={effect.name}
              text={effect.description}
              detailOne={duration}
              detailTwo={
                effect.effect
                  ? effect.effect.map((line, index) => (
                      <span key={index}>{line}</span>
                    ))
                  : null
              }
              position={isCharacterEnemy ? "effect-right" : "effect-left"}
            >
              <img src="" className={classes.effect} />
            </Tooltip>
          );
        })}
      </div>
    </div>
  );

  const image = (
    <div
      className={`${classes.image} ${
        isHighlighted ? classes.highlighted : ""
      } ${isCharacterTurn === character.id ? classes.turn : ""}`}
    >
      {showDamage && <p>{character.damageDisplay}</p>}{" "}
    </div>
  );

  let content;
  if (character.identifier === "HERO") {
    content = (
      <>
        {image}
        {container}
      </>
    );
  } else if (character.identifier === "ENEMY") {
    content = (
      <>
        {container}
        {image}
      </>
    );
  }

  return (
    <div
      className={`${classes.character} ${
        character.identifier === "ENEMY" ? classes.enemy : ""
      }`}
      onClick={handleSetTarget}
    >
      {content}
    </div>
  );
}
