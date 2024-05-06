import classes from "./RoomSummaryModal.module.css";

export default function RoomSummaryModal() {
  return (
    <div className={classes.summary}>
      <h1>Room Cleared!</h1>
      <div className={classes.container}>
        <div>QTE</div>
        <div>TOME PROGRESS BAR</div>
        <div>EVENT</div>
        <div>ENEMIES DEFEATED</div>
        <div>ITEMS FOUND</div>
      </div>
    </div>
  );
}
