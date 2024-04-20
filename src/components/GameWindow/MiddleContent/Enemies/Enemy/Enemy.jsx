import classes from "./Enemy.module.css";

export default function Enemy({ name }) {
  // Instead of using a slice maybe I can add useState here so that its easier to create a state object for each enemy

  return (
    <div className={classes.enemy}>
      <div className={classes.container}>
        <p className={classes.name}>{name}</p>
        <div className={classes.info}>
          <p>
            Lvl: <span>0</span>
          </p>
          <p>
            HP: <span>0</span> / <span>0</span>
          </p>
        </div>
        <progress max="100" value="50">
          Health Bar
        </progress>
      </div>
      <div className={classes.image}></div>
    </div>
  );
}
