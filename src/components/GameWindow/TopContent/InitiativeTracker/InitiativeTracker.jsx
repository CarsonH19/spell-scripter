import { useSelector } from "react-redux";

import classes from "./InitiativeTracker.module.css";
import MemoizedIcon from "./Icon";

export default function InitiativeTracker() {
  const order = useSelector((state) => state.initiative.order);

  return (
    <div className={classes.tracker}>
      {order.map((character, index) => (
        <MemoizedIcon
          key={index}
          character={character}
        />
      ))}
    </div>
  );
}
