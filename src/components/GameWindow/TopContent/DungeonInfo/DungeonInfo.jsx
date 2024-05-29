import { useSelector } from "react-redux";
import classes from "./DungeonInfo.module.css";

export default function DungeonInfo() {
  const dungeon = useSelector((state) => state.dungeon);

  return (
    <div className={classes.info}>
      <h2>{dungeon.name}</h2>
      <h4>Rooms Cleared: {dungeon.roomCounter}</h4>
    </div>
  );
}
