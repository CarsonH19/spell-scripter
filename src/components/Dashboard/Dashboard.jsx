import classes from "./Dashboard.module.css";

import DungeonColumn from "./DungeonColumn/DungeonColumn";
import PlayerColumn from "./PlayerColumn/PlayerColumn";
import TomeColumn from "./TomeColumn/TomeColumn";

export default function Dashboard() {
  return (
    <div className={classes.dashboard}>
      <TomeColumn />
      {/* TOME COLUMN */}
      {/* Tomes */}
      {/* View Tomes List */}
      {/* See concepts mastered */}
      {/* See number of mastery points gained */}

      <PlayerColumn />

      <DungeonColumn />
      {/* DUNGEON COLUMN */}
      {/* Dungeon Select */}
      {/* Dungeon details and story */}
      {/* Dungeon difficulty */}
      {/* See quests completed */}
    </div>
  );
}
