import classes from "./Hero.module.css";

export default function Hero({ hero }) {
  return (
    <div className={classes.hero}>
      <div className={classes.image}></div>
      <div className={classes.container}>
        <p className={classes.name}>{hero.name}</p>
        <div className={classes.info}>
          <p>
            HP: <span>{hero.currentHealth}</span> / <span>{hero.maxHealth}</span>
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
