import classes from "./LevelUpModal.module.css";

import Attributes from "../../Dashboard/PlayerColumn/Attributes";
import { useSelector } from "react-redux";

export default function LevelUpModal() {
  const playerLevel = useSelector((state) => state.player.level);
  return (
    <div className={classes["level-up"]}>
      <h1>Level Up!</h1>
      <h2>You Gained An Attribute Point!</h2>
      <div>
        <Attributes />
      </div>
    </div>
  );
}
