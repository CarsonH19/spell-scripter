import { useSelector } from "react-redux";

import classes from "./InitiativeTracker.module.css";
import Icon from "./Icon";

export default function InitiativeTracker() {
  const order = useSelector((state) => state.initiative.order);
  console.log(order);

  return (
    <div className={classes.tracker}>
      {order.map((character, index) => (
        <Icon
          key={index}
          character={character}
        />
      ))}
    </div>
  );
}
