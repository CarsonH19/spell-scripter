import classes from "./Enemies.module.css";

import Enemy from "./Enemy/Enemy";

import { useSelector } from "react-redux";

export default function Enemies() {
  const order = useSelector((state) => state.combat.order);

  return (
    <div className={classes.enemies}>
      {order.map((enemy) => {
        if (enemy.identifier === "ENEMY") {
          return <Enemy key={enemy.id} enemy={enemy} />;
        }
      })}
    </div>
  );
}
