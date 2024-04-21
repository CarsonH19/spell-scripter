import classes from "./Player.module.css";

import { useSelector } from "react-redux";

export default function Player() {
  const player = useSelector((state) => state.player);

  return (
    <div className={classes.player}>
      <div className={classes.health}>
        <p className={classes.name}>{player.name}</p>
        <hr />
        <div className={classes.info}>
          <p>
            HP: <span>{player.currentHealth}</span> / <span>{player.maxHealth}</span>
          </p>
          <p>
            Exp: <span>{player.currentExp}</span> /<span>{player.expToNextLevel}</span>
          </p>
          <p>
            Lvl: <span>{player.level}</span>
          </p>
        </div>
        <progress max={player.maxHealth} value={player.currentHealth}>
          100%
        </progress>
      </div>
      <div className={classes.image}></div>
      <div>
        <p>Strength: {player.stats.strength}</p>
        <p>Agility: {player.stats.Agility}</p>
        <p>Faith: {player.stats.faith}</p>
        <p>Arcana: {player.stats.arcana}</p>
      </div>
    </div>
  );
}
