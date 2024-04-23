import classes from "./GameWindow.module.css";

import BottomContent from "./BottomContent/BottomContent";
import MiddleContent from "./MiddleContent/MiddleContent";
import TopContent from "./TopContent/TopContent";
import { useEffect } from "react";
import combatLoop from "../../store/combat-actions";

// Imports to pass dispatches to combatLoop
import { playerActions } from "../../store/player-slice";
import { heroActions } from "../../store/hero-slice";
import { dungeonActions } from "../../store/dungeon-slice";

export default function GameWindow() {
  useEffect(() => {
    const dispatches = {
      playerActions,
      heroActions,
      dungeonActions,
    };

    combatLoop(dispatches);
  }, []);

  return (
    <div className={classes.window}>
      <TopContent />
      {/* TOP 20% Height */}

      <MiddleContent />
      {/* MIDDLE 55% Height */}

      <BottomContent />
      {/* BOTTOM 25% Height */}
    </div>
  );
}
