import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

export default function SettingsModal() {
  const dispatch = useDispatch();

  const handleExitDungeon = () => {
    dispatch(
      uiActions.changeUi({ element: "dashboardIsVisible", visible: true })
    ); 
    dispatch(
      uiActions.changeUi({ element: "gameWindowIsVisible", visible: false })
    );
    dispatch(uiActions.changeUi({ element: "modalIsVisible", visible: false }));
  };

  return (
    <div>
      <h1>This is the Settings Modal!</h1>
      <button onClick={handleExitDungeon}>Exit Dungeon</button>
    </div>
  );
}
