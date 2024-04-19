import GameWindow from "./components/GameWindow/GameWindow";

import { useSelector } from "react-redux";

function App() {
  const start = useSelector((state) => state.ui.start);

  return (
    <>
      {start && <StartGame />}
      {!start && <GameWindow />}
    </>
  );
}

export default App;
