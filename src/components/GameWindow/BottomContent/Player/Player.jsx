import classes from "./Player.module.css";

import { useSelector } from "react-redux";

import { setTarget } from "../../../../store/combat-actions";
import { targetType } from "../../../../util/targeting";

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
            <span>{player.strength.maxHealth}</span>
          </p>
          <p>
            Exp: <span>{player.currentExp}</span> /
            <span>{player.expToNextLevel}</span>
          </p>
          <p>
            Lvl: <span>{player.level}</span>
          </p>
        </div>
        <progress max={player.strength.maxHealth} value={player.currentHealth}>
          100%
        </progress>
      </div>
      <div
        className={`${classes.image} ${
          isHighlighted === player.id ? classes.highlighted : ""
        }`}
      ></div>
      <div>
        <p>Strength: {player.stats.strength}</p>
        <p>Agility: {player.stats.agility}</p>
        <p>Arcana: {player.stats.arcana}</p>
      </div>
    </div>
  );
}
