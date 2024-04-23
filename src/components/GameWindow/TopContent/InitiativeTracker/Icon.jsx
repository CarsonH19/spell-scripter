import classes from "./Icon.module.css";

import { useDispatch, useSelector } from "react-redux";

import { initiativeActions } from "../../../../store/initiative-slice";

export default function Icon({ character }) {
  const dispatch = useDispatch();

  const isHighlighted = useSelector(
    (state) => state.initiative.highlightedCharacter
  );

  const handleMouseEnter = (character) => {
    dispatch(initiativeActions.highlightCharacter(character.id));
  };

  const handleMouseLeave = () => {
    dispatch(initiativeActions.clearHighlight());
  };

  return (
    <div
      className={
        isHighlighted === character.id ? classes.highlighted : classes.icon
      }
      onMouseEnter={() => handleMouseEnter(character)}
      onMouseLeave={handleMouseLeave}
    ></div>
  );
}
