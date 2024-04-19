import classes from "./Buttons.module.css";

export default function Buttons() {
  return (
    <div className={classes.buttons}>
      <button>Inventory</button>
      <button>Tomes</button>
      <button>Hero</button>
      <button>Settings</button>
    </div>
  )
}