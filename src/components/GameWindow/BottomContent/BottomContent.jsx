import classes from "./BottomContent.module.css";

import Player from "./Player/Player";
import Actions from "./Actions/Actions";
import Buttons from "./Buttons/Buttons";
import Party from "./Party/Party";

export default function BottomContent() {
  return (
    <div className={classes.bottom}>
      <Party />
      <div className={classes.test}></div>
      {/* <Player /> */}
      {/* <Actions /> */}
      {/* <Buttons /> */}
    </div>
  );
}
