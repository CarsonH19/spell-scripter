import classes from "./Hero.module.css";

import Tooltip from "../../../../UI/Tooltip";

import { useSelector } from "react-redux";

import { targetType } from "../../../../../util/targeting";
import { setTarget } from "../../../../../store/combat-actions";

export default function Hero({ hero }) {
  const order = useSelector((state) => state.combat.order);
  const heroIndex = order.findIndex((char) => char.id === hero.id);
  hero = order[heroIndex];

  const isHighlighted = useSelector(
    (state) => state.combat.highlightedCharacter === hero.id
  );

  const handleSetTarget = () => {
    if (targetType === "ALLIES") {
      setTarget(hero);
    }
  };

  return (
    <div className={classes.hero} onClick={handleSetTarget}>
      <div
        className={`${classes.image} ${
          isHighlighted ? classes.highlighted : ""
        }`}
      >
        {hero.name}
      </div>
      <div className={classes.container}>
        <p className={classes.name}>{hero.name}</p>
        <div className={classes.health}>
          <div className={classes.info}>
            <p>
              HP: <span>{hero.currentHealth}</span> /{" "}
              <span>{hero.stats.strength.maxHealth}</span>
            </p>
          </div>
          <progress
            max={hero.stats.strength.maxHealth}
            value={hero.currentHealth}
          >
            Health Bar
          </progress>
        </div>
        <div className={classes.statusEffects}>
          {hero.statusEffects.map((effect) => (
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
    </div>
  );
}
