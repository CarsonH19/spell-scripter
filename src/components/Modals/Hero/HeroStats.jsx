import classes from "./HeroesModal.module.css";

export default function HeroStats({ hero }) {
  return (
    <>
      <img src="" alt={hero.name} />
      <div className={classes.stats}>
        <div>
          <h4>{hero.name}</h4>
          <p className={classes.text}>Level: {hero.level}</p>
          <p className={classes.text}>Experience: {hero.currentExp} / {hero.expToNextLevel}</p>
        </div>
        <div>
          <h4>Strength: {hero.stats.strength.totalStrength}</h4>
          <p className={classes.text}>
            Health: {hero.currentHealth} / {hero.stats.strength.maxHealth}
          </p>
          <p className={classes.text}> Attack: {hero.stats.strength.attack}</p>
        </div>

        <div>
          <h4>Agility: {hero.stats.agility.totalAgility}</h4>
          <p className={classes.text}>Defense: {hero.stats.agility.defense}</p>
          <p className={classes.text}>
            Hit Chance: +{hero.stats.agility.hitChance}
          </p>
          <p className={classes.text}>Speed: {hero.stats.agility.speed}</p>
        </div>

        <div>
          <h4>Arcana: {hero.stats.arcana.totalArcana}</h4>
          <p className={classes.text}>
            Mana: {hero.currentMana} / {hero.stats.arcana.maxMana}
          </p>
          <p className={classes.text}>
            Spell Power: {hero.stats.arcana.spellPower}
          </p>
        </div>
      </div>
    </>
  );
}
