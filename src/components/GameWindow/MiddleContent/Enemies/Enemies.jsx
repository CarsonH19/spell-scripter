import classes from "./Enemies.module.css";

import Enemy from "./Enemy/Enemy";

import { useSelector } from "react-redux";

export default function Enemies() {
  const enemies = useSelector((state) => state.dungeon.contents.monsters);
  console.log(enemies);

  return (
    <div className={classes.enemies}>
      {enemies.map((enemy, index) => (
        <Enemy key={index} name={enemy.name}/>
      ))}
    </div>
  );
}
