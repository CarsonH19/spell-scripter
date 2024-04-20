import classes from "./Player.module.css";

export default function Player() {
  return (
    // <div className={classes.container}>
    <>
      <div className={classes.player}>
        <div className={classes.health}>
          <p className={classes.name}>Player Name</p>
          <div className={classes.info}>
            <p>
              HP: <span>0</span> / <span>0</span>
            </p>
            <p>
              Exp: <span>0</span> /<span>0</span>
            </p>
            <p>
              Lvl: <span>0</span>
            </p>
          </div>
          <progress max="100" value="100">
            100%
          </progress>
        </div>
        <div className={classes.image}></div>
        <div>
          <p>Strength: 0</p>
          <p>Dexterity: 0</p>
          <p>Faith: 0</p>
          <p>Arcana: 0</p>
        </div>
      </div>
    </>
    // </div>
  );
}
