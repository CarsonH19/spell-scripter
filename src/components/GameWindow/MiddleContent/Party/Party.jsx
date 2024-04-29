import classes from "./Party.module.css";

import Hero from "./Hero/Hero";

import { useSelector } from "react-redux";

export default function Party() {
  const order = useSelector((state) => state.combat.order);

  return (
    <div className={classes.party}>
      {order.map((hero) => {
        if (hero.identifier === "HERO") {
          return <Hero key={hero.id} hero={hero} />;
        }
      })}
    </div>
  );
}
