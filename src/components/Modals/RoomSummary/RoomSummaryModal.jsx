import { useSelector } from "react-redux";
import classes from "./RoomSummaryModal.module.css";

export default function RoomSummaryModal() {
  const enemies = useSelector((state) => state.dungeon.contents.enemies);

  return (
    <div className={classes.summary}>
      <h1>Room Cleared!</h1>
      <div className={classes.container}>
        <div>TOME PROGRESS BAR</div>
        <div>QTE QUESTIONS</div>
        <div>EVENTS</div>
        {enemies.length > 0 && (
          <div>
            <h4>Enemies Defeated</h4>
            <ul>
            {enemies.map((enemy) => {
              return <li key={enemy.id}>{enemy.name}</li>;
            })}
          </ul>
          </div>
          
        )}
        <div>ITEMS FOUND</div>
      </div>
    </div>
  );
}
