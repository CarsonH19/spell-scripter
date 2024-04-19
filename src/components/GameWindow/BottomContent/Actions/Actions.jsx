import classes from "./Actions.module.css";

export default function Actions () {
  return (
    <div className={classes.actions}>
      <button>Cast Spell</button>
      <button>Guard</button>
      <button>Item</button>
      <button>Flee</button>
    </div>
  )
}