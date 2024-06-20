import classes from "./HeroesModal.module.css";

export default function HeroStats({ hero }) {
  return (
    <>
      <img src="" alt={hero.name} />
      <div className={classes.stats}>
        <div>
          <h4>{hero.name}</h4>
          <p className={classes.text}>Level: {hero.level}</p>
        </div>
        <div>
          <h4>Strength: {hero.stats.baseStrength}</h4>
        </div>

        <div>
          <h4>Agility: {hero.stats.baseAgility}</h4>
        </div>

        <div>
          <h4>Arcana: {hero.stats.baseArcana}</h4>
        </div>
      </div>
    </>
  );
}
