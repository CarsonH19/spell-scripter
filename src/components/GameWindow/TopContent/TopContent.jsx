import classes from "./TopContent.module.css";

import DungeonInfo from "./DungeonInfo/DungeonInfo";
import InitiativeTracker from "./InitiativeTracker/InitiativeTracker";
import Boss from "./Boss/Boss";

export default function TopContent() {
  return (
    <div>
      <div className={classes.topContent}>
        <DungeonInfo />
        <InitiativeTracker />
        <Boss />
      </div>
      {/*  TOP-FULL-BOTTOM CONTENT - Boss HP Bar  */}
    </div>
  );
}
