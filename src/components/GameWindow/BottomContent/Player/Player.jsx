import classes from "./Player.module.css";

export default function Player() {
  return (
    <div className={classes.player}>
      <div className={classes.image}></div>
      <div>
        <p>Strength: 0</p>
        <p>Dexterity: 0</p>
        <p>Faith: 0</p>
        <p>Arcana: 0</p>
      </div>
    </div>
  );
}
