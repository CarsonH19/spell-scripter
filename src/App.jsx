import Dashboard from "./components/Dashboard/Dashboard";
import StartGame from "./components/StartGame/StartGame";
import GameWindow from "./components/GameWindow/GameWindow";
import Modal from "./components/Modals/Modal";
import Narration from "./components/Narration/Narration";
import Dialogue from "./components/Dialogue/Dialogue";
import { useSelector } from "react-redux";

function App() {
  const start = useSelector((state) => state.ui.startIsVisible);
  const dashboard = useSelector((state) => state.ui.dashboardIsVisible);
  const game = useSelector((state) => state.ui.gameWindowIsVisible);
  const modal = useSelector((state) => state.ui.modalIsVisible);
  const dialogue = useSelector((state) => state.dialogue);

  return (
    <>
      {dialogue.active && <Dialogue />}
      <Narration />
      {modal && <Modal />}
      {start && <StartGame />}
      {!start && !game && dashboard && <Dashboard />}
      {!start && game && !dashboard && <GameWindow />}
    </>
  );
}

export default App;
