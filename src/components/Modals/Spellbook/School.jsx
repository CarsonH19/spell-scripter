import classes from "./SpellbookModal.module.css";

export default function School({ text, school, active, onChangeSchool }) {
  return (
    <li
      className={active ? classes["active-school"] : classes["inactive-school"]}
      onClick={onChangeSchool}
    >
      {text}
    </li>
  );
}
