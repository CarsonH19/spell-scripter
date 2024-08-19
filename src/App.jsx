import { Suspense, lazy } from "react";
import FadeEffect from "./components/UI/FadeEffect";
import Narration from "./components/Narration/Narration";
import { useSelector } from "react-redux";

import GameWindow from "./components/GameWindow/GameWindow";
import Dialogue from "./components/Dialogue/Dialogue";
import Dashboard from "./components/Dashboard/Dashboard";

import classes from "./components/Modals/Modal.module.css";

// Lazy load non-essential components
const Modal = lazy(() => import("./components/Modals/Modal"));
const StartGame = lazy(() => import("./components/StartGame/StartGame"));

function App() {
  const {
    startIsVisible,
    dashboardIsVisible,
    gameWindowIsVisible,
    modalIsVisible,
  } = useSelector((state) => state.ui);
  const dialogueActive = useSelector((state) => state.dialogue.active);

  return (
    <>
      <FadeEffect />
      <Narration />
      {dialogueActive && <Dialogue />}
      {modalIsVisible && (
        <Suspense fallback={<div className={classes.loading}>Loading . . .</div>}>
          <Modal />
        </Suspense>
      )}
      {startIsVisible ? (
        <Suspense fallback={<div className={classes.loading}>Loading . . .</div>}>
          <StartGame />
        </Suspense>
      ) : gameWindowIsVisible ? (
        <GameWindow />
      ) : dashboardIsVisible ? (
        <Dashboard />
      ) : null}
    </>
  );
}

export default App;
