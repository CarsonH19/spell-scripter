import classes from "./Player.module.css";

import { useSelector } from "react-redux";

import { setTarget } from "../../../../store/combat-actions";
import { targetType } from "../../../../util/targeting";
import Tooltip from "../../../UI/Tooltip";

export default function Player() {
  const player = useSelector((state) => state.player);
  const isHighlighted = useSelector(
    (state) => state.initiative.highlightedCharacter
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
          {player.statusEffects.map((effect) => (
            <Tooltip key={effect.name} text={effect.name}>
              <img src="" className={classes.effect} />
            </Tooltip>
          ))}
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
