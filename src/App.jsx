import Dashboard from "./components/Dashboard/Dashboard";
import StartGame from "./components/StartGame/StartGame";
import GameWindow from "./components/GameWindow/GameWindow";

import { useSelector } from "react-redux";

function App() {
  const start = useSelector((state) => state.ui.startIsVisible);
  const dashboard = useSelector((state) => state.ui.dashboardIsVisible);
  const game = useSelector((state) => state.ui.gameWindowIsVisible);

  return (
    <>
      {start && <StartGame />}
      {!start && !game && dashboard && <Dashboard />}
      {!start && game && !dashboard && <GameWindow />}

      {/* {!start && <GameWindow />} */}
    </>
  );
}

export default App;
