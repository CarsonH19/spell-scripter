import classes from "./EventOptions.module.css";

export default function EventOptions() {
  return (
    <div className={classes.events}>
      {/* Map a list of options based on situation */}
      <button>Option 1</button>
      <button>Option 2</button>
    </div>
  )
}