import classes from "./GameWindow.module.css";

import BottomContent from "./BottomContent/BottomContent";
import MiddleContent from "./MiddleContent/MiddleContent";
import TopContent from "./TopContent/TopContent";

export default function GameWindow() {
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