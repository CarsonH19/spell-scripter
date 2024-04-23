import classes from "./GameWindow.module.css";

import BottomContent from "./BottomContent/BottomContent";
import MiddleContent from "./MiddleContent/MiddleContent";
import TopContent from "./TopContent/TopContent";
import { useEffect } from "react";
import combatLoop from "../../store/combat-actions";

import { useDispatch } from "react-redux";

export default function GameWindow() {
  const dispatch = useDispatch();

  useEffect(() => {
    combatLoop(dispatch);
  }, [dispatch]);

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
