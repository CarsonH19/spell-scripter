import classes from "./Hero.module.css";

import { useSelector } from "react-redux";

export default function Hero({ hero }) {
  const isHighlighted = useSelector(
    (state) => state.initiative.highlightedCharacter
  );

  return (
    <div className={classes.hero}>
      <div
        className={`${classes.image} ${
          isHighlighted === hero ? classes.highlighted : ""
        }`}
      >
        {hero.name}
      </div>
      <div className={classes.container}>
        <p className={classes.name}>{hero.name}</p>
        <div className={classes.info}>
          <p>
            HP: <span>{hero.currentHealth}</span> /{" "}
            <span>{hero.maxHealth}</span>
          </p>
          <p>
            Lvl: <span>{hero.level}</span>
          </p>
        </div>
        <progress max={hero.maxHealth} value={hero.currentHealth}>
          Health Bar
        </progress>
      </div>
    </div>
  );
}
