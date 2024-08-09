// import { v4 as uuidv4 } from "uuid";
import classes from "./DamageDisplay.module.css";
import { useDispatch } from "react-redux";
import { combatActions } from "../../../store/combat-slice";
import { useEffect } from "react";

export default function DamageDisplay({ character }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(combatActions.removeDamageDisplayItem({ id: character.id }));
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [character.damageDisplay]);

  return (
    <ul className={classes["damage-display"]}>
      {character.damageDisplay.map((item, index) => {
        console.log(item);
        return (
          <li key={index} className={classes[item.style]}>
            {item.item}
          </li>
        );
      })}
    </ul>
  );
}
