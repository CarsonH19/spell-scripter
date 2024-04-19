import classes from "./MiddleContent.module.css";

import Party from "./Party/Party";
import EventOptions from "./EventOptions/EventOptions";
import Enemies from "./Enemies/Enemies";

export default function MiddleContent() {
  return (
    <div className={classes.middle}>
      <Party />
      <EventOptions />
      <Enemies />
    </div>
  )
}