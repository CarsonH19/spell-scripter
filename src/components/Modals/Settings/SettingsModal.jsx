import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

export default function SettingsModal() {
  const dispatch = useDispatch();

  const handleExitDungeon = () => {
    dispatch(uiActions.toggle({ modal: "dashboardIsVisible" })); // true
    dispatch(uiActions.toggle({ modal: "gameWindowIsVisible" })); // false
    dispatch(uiActions.toggle({ modal: "modalIsVisible" })); // set to false
  };

  return (
    <div>
      <h1>This is the Settings Modal!</h1>
      <button onClick={handleExitDungeon}>Exit Dungeon</button>
    </div>
  );
}
