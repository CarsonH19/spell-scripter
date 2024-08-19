import { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Dashboard.module.css";

import store from "../../store/index";

import DungeonColumn from "./DungeonColumn/DungeonColumn";
import PlayerColumn from "./PlayerColumn/PlayerColumn";
import TomeColumn from "./TomeColumn/TomeColumn";
import { playerActions } from "../../store/player-slice";
import { openModal } from "../../store/ui-actions";

const Dashboard = memo(() => {
  const dispatch = useDispatch();
  const tome = useSelector((state) => state.tome);
  const level = useSelector((state) => state.player.level);

  console.log("DASHBOARD RENDERED");
  useEffect(() => {
    dispatch(playerActions.checkForLevelUp({ tome }));
  }, [dispatch, tome]);

  useEffect(() => {
    const currentLevel = store.getState().player.level;
    if (level !== currentLevel && !store.getState().ui.modalIsVisible) {
      openModal(dispatch, "attributeModal");
    }
  }, [dispatch, level]);

  return (
    <div className={classes.dashboard}>
      <TomeColumn />
      <PlayerColumn />
      <DungeonColumn />
    </div>
  );
});

export default Dashboard;
