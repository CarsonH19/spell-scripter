import classes from "./BottomContent.module.css";

import Player from "./Player/Player";
import Actions from "./Actions/Actions";
import Buttons from "./Buttons/Buttons";


export default function BottomContent() {
  return (
    <div className={classes.bottom}>
      <Player />
      <Actions />
      <Buttons />
    </div>
  )
}
