import classes from "./PlayerColumn.module.css";

export default function PlayerColumn() {
  return (
    <div className={classes.column}>
      <div className={classes.player}>
        <div>
          <p>Player Name</p>
          <p>Level: 0</p>
          <p>Health: 0</p>
          <p>Mana: 0</p>
        </div>
        <div className={classes.image}></div>
        <div>
          <p>Strength: 0</p>
          <p>Dexterity: 0</p>
          <p>Faith: 0</p>
          <p>Arcana: 0</p>
        </div>
      </div>
      <hr />
      <div className={classes.menu}>
        <button>Spellbook</button>
        <button>Equipment</button>
        <button>Heroes</button>
        <button>Quests</button>
        <button>Stats</button>
        <button>Settings</button>
      </div>
    </div>
  );
}
