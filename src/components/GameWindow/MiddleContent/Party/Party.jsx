import classes from "./Party.module.css";

// import Hero from "./Hero/Hero";
import Character from "../Character";

import { useSelector } from "react-redux";

export default function Party() {
  const order = useSelector((state) => state.combat.order);

  return (
    <div className={classes.party}>
      {order.map((hero) => {
        if (hero.identifier === "HERO") {
          return <Character key={hero.id} character={hero} />;
        }
      })}
    </div>
  );
}
