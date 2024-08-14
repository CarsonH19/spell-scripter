import Dashboard from "./components/Dashboard/Dashboard";
import StartGame from "./components/StartGame/StartGame";
import GameWindow from "./components/GameWindow/GameWindow";
import Modal from "./components/Modals/Modal";
import Narration from "./components/Narration/Narration";
import Dialogue from "./components/Dialogue/Dialogue";
import FadeEffect from "./components/UI/FadeEffect";
import startScreenVideo from "./assets/start-screen.mp4";

import { useSelector } from "react-redux";

function App() {
  const start = useSelector((state) => state.ui.startIsVisible);
  const dashboard = useSelector((state) => state.ui.dashboardIsVisible);
  const game = useSelector((state) => state.ui.gameWindowIsVisible);
  const modal = useSelector((state) => state.ui.modalIsVisible);
  const dialogue = useSelector((state) => state.dialogue);

  return (
    <>
      <FadeEffect />
      {dialogue.active && <Dialogue />}
      <Narration />
      {modal && <Modal />}
      {start && <StartGame />}
      {start && (
        <video autoPlay loop muted playsInline className="background-video">
          <source src={startScreenVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {!start && !game && dashboard && <Dashboard />}
      {!start && game && !dashboard && <GameWindow />}
    </>
  );
}

export default App;
