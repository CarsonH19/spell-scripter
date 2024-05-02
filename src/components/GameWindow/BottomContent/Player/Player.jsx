import classes from "./Player.module.css";

import { useSelector } from "react-redux";

import { setTarget } from "../../../../store/combat-actions";
import { targetType } from "../../../../util/targeting";
import Tooltip from "../../../UI/Tooltip";

export default function Player() {
  const order = useSelector((state) => state.combat.order);
  const playerIndex = order.findIndex((char) => char.id === "Player");
  const player = order[playerIndex];

  const isHighlighted = useSelector(
    (state) => state.combat.highlightedCharacter
  );

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
        }`}
      ></div>
      <div>
        <p>Strength: {player.stats.strength.totalStrength}</p>
        <p>Agility: {player.stats.agility.totalAgility}</p>
        <p>Arcana: {player.stats.arcana.totalArcana}</p>
      </div>
    </div>
  );
}
