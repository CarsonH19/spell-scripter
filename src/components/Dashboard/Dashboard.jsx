import { useEffect } from "react";
import { useSelector } from "react-redux";

import classes from "./Dashboard.module.css";

import DungeonColumn from "./DungeonColumn/DungeonColumn";
import PlayerColumn from "./PlayerColumn/PlayerColumn";
import TomeColumn from "./TomeColumn/TomeColumn";
import { useDispatch } from "react-redux";
import { playerActions } from "../../store/player-slice";

export default function Dashboard() {
  const dispatch = useDispatch();

  const tomeSlice = useSelector((state) => state.tome);

  useEffect(() => {
    // Check if player should level up after mastering a new tome
    dispatch(playerActions.checkForLevelUp({ tomeSlice }));
  });

  return (
    <div className={classes.dashboard}>
      <TomeColumn />
      <PlayerColumn />
      <DungeonColumn />
    </div>
  );
}
