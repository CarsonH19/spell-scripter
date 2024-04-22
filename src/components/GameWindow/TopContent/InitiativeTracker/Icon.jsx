import classes from "./Icon.module.css";

export default function Icon({
  character,
  onMouseEnter,
  onMouseLeave,
  isHighlighted,
}) {
  return (
    <div
      className={isHighlighted ? classes.highlighted : classes.icon}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    ></div>
  );
}
