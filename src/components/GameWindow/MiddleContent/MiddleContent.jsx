import classes from "./MiddleContent.module.css";

import Party from "./Party/Party";
import EventOptions from "./EventOptions/EventOptions";
import Enemies from "./Enemies/Enemies";
import { useSelector } from "react-redux";

export default function MiddleContent() {
  const event = useSelector((state) => state.dungeon.contents.event);

  return (
    <div className={classes.middle}>
      <Party />
      {event && <EventOptions />}
      <Enemies />
    </div>
  )
}