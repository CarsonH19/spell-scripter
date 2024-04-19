import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.image}></div>
      <div className={classes.container}>
        <p className={classes.name}>Hero Name</p>
        <div className={classes.info}>
          <p>
            HP: <span>0</span> / <span>0</span>
          </p>
          <p>
            Lvl: <span>0</span>
          </p>
        </div>
        <progress max="100" value="50">
          Health Bar
        </progress>
      </div>
    </div>
  );
}
