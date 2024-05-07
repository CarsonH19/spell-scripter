import classes from "./GameWindow.module.css";

import BottomContent from "./BottomContent/BottomContent";
import MiddleContent from "./MiddleContent/MiddleContent";
import TopContent from "./TopContent/TopContent";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { combatActions } from "../../store/combat-slice";

import combatLoop from "../../store/combat-actions";


export default function GameWindow() {
  const dispatch = useDispatch();
  const room = useSelector((state) => state.dungeon);
  const currentOrder = useSelector((state) => state.combat.order);
  const characters = [...room.contents.enemies, ...currentOrder];
  
  useEffect(() => {
    // If there is no event in the dungeon-slice combat will begin
    if (!room.contents.event) {
      dispatch(combatActions.setInitiative({ characters }));
      combatLoop(dispatch);
    }

    // Dependency: Update when room counter increments
  }, [dispatch, room.roomCounter]);

  return (
    <div className={classes.window}>
      <TopContent />
      <MiddleContent />
      <BottomContent />
    </div>
  );
}
