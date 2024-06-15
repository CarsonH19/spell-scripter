import classes from "./PartyModal.module.css";

export default function PartyModal() {
  return (
    <div className={classes.party}>
      <h1>Party</h1>
      <div className={classes.container}>
        <div className={classes.images}>Character Images</div>
        <div className={classes.stats}>Stats</div>
      </div>
    </div>
  );
}
