import { useDispatch, useSelector } from "react-redux";
import classes from "./RoomSummaryModal.module.css";
import { dungeonActions } from "../../../store/dungeon-slice";
import { useEffect } from "react";
import { playerActions } from "../../../store/player-slice";

export default function RoomSummaryModal() {
  const dispatch = useDispatch();
  const enemies = useSelector((state) => state.dungeon.contents.enemies);
  const itemsLooted = useSelector((state) => state.dungeon.contents.items);

  useEffect(() => {
    // Toggle off danger
    dispatch(dungeonActions.dangerToggle());

    // Add items looted from room/enemies to player's inventory
    for (let i = 0; i < itemsLooted.length; i++) {
      console.log("ITEM", itemsLooted[i]);
      dispatch(
        playerActions.changeInventory({ item: itemsLooted[i], change: "ADD" })
      );
    }
  }, [dispatch]);

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
        {itemsLooted.length > 0 && (
          <div>
            <h4>Items Looted</h4>
            <ul>
              {itemsLooted.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
