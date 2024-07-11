import classes from "./BottomContent.module.css";

import Player from "./Player/Player";
import Actions from "./Actions/Actions";
import Buttons from "../Buttons/Buttons";
import Party from "./Party/Party";
import Enemies from "./Enemies/Enemies";

export default function BottomContent() {
  return (
    <div className={classes.bottom}>
      <Party />
      <Actions/>
      <Enemies />      
    </div>
  );
}
