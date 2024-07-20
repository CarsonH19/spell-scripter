import classes from "./GameWindow.module.css";

import BottomContent from "./BottomContent/BottomContent";
import MiddleContent from "./MiddleContent/MiddleContent";
import TopContent from "./TopContent/TopContent";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { startCombat } from "../../store/combat-actions";
import Buttons from "./Buttons/Buttons";

export default function GameWindow() {
  const dispatch = useDispatch();
  const room = useSelector((state) => state.dungeon);
  
  useEffect(() => {
    // If there is no event in the dungeon-slice combat will begin
    if (!room.contents.event) {
      startCombat(dispatch);
    } 
  }, [room.roomCounter]);

  return (
    <div
      className={classes.window}
      style={{
        backgroundImage: `url(${room.image})`,
      }}
    >
      <TopContent />
      <MiddleContent />
      <BottomContent />
      <Buttons />
    </div>
  );
}
