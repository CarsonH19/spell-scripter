import classes from "./TomeColumn.module.css";

export default function TomeColumn() {
  return (
    <div className={classes.column}>
      <h1>Tomes</h1>
      <hr />
      <p>Mastery Points: 0</p>
      <div className={classes.filter}>
        <button>All</button>
        <button>Mastered</button>
        <button>Incomplete</button>
      </div>
      <div className={classes.tomes}>
        {/* Add a filter button logic */}
        {/* Map each tome into a div element  */}
        {/* Add text into each div (Name) (Mastery %) */}
        {/* Allow overflow scrollbar */}
      </div>
    </div>
  );
}
