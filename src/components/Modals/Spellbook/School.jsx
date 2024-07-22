import classes from "./SpellbookModal.module.css";

export default function School({ text, active, onChangeSchool }) {
  return (
    <li
      className={active ? classes["active-school"] : classes["inactive-school"]}
      onClick={onChangeSchool}
      style={text === "?" ? { opacity: "0.5",
      pointerEvents: "none",
      borderColor: "var(--secondary)" } : {}}    >
      {text}
    </li>
  );
}
