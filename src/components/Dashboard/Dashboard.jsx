import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Dashboard.module.css";

import store from "../../store/index";

import DungeonColumn from "./DungeonColumn/DungeonColumn";
import PlayerColumn from "./PlayerColumn/PlayerColumn";
import TomeColumn from "./TomeColumn/TomeColumn";
import { playerActions } from "../../store/player-slice";
import { uiActions } from "../../store/ui-slice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const tomeSlice = useSelector((state) => state.tome);
  const playerLevel = useSelector((state) => state.player.level);
  const isModalOpen = useSelector((state) => state.ui.modalIsVisible);
  console.log("1st", playerLevel);

  useEffect(() => {
    dispatch(playerActions.checkForLevelUp({ tomeSlice }));
  }, [dispatch, tomeSlice]);

  useEffect(() => {
    const currentLevel = store.getState().player.level;
    console.log("2nd", currentLevel);

    if (playerLevel !== currentLevel && !isModalOpen) {
      console.log("Player level changed:", currentLevel);
      dispatch(uiActions.toggle({ modal: "modalIsVisible" })); // set to true
      dispatch(uiActions.toggleModal({ modal: "levelUpModal", open: "OPEN" }));
    }
  }, [dispatch, playerLevel]);

  return (
    <div className={classes.dashboard}>
      <TomeColumn />
      <PlayerColumn />
      <DungeonColumn />
    </div>
  );
}
