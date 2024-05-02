import Dashboard from "./components/Dashboard/Dashboard";
import StartGame from "./components/StartGame/StartGame";
import GameWindow from "./components/GameWindow/GameWindow";
import Modal from "./components/Modals/Modal";
import { useSelector } from "react-redux";

function App() {
  const start = useSelector((state) => state.ui.startIsVisible);
  const dashboard = useSelector((state) => state.ui.dashboardIsVisible);
  const game = useSelector((state) => state.ui.gameWindowIsVisible);
  const modal = useSelector((state) => state.ui.modalIsVisible);

  return (
    <>
      {modal && <Modal />}
      {start && <StartGame />}
      {!start && !game && dashboard && <Dashboard />}
      {!start && game && !dashboard && <GameWindow />}
    </>
  );
}

export default App;
