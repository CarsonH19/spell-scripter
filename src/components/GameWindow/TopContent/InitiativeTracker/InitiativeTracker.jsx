import { useSelector, useDispatch } from "react-redux";
import { initiativeActions } from "../../../../store/initiative-slice";

import classes from "./InitiativeTracker.module.css";
import Icon from "./Icon";

export default function InitiativeTracker() {
  const order = useSelector((state) => state.initiative.order);
  const highlightedCharacter = useSelector((state) => state.initiative.highlightedCharacter);
  const dispatch = useDispatch();

  const handleMouseEnter = (character) => {
    dispatch(initiativeActions.highlightCharacter(character));
  };

  const handleMouseLeave = () => {
    dispatch(initiativeActions.clearHighlight());
  };

  return (
    <div className={classes.tracker}>
      {order.map((character, index) => (
        <Icon
          key={index}
          character={character}
          onMouseEnter={() => handleMouseEnter(character)}
          onMouseLeave={handleMouseLeave}
          isHighlighted={highlightedCharacter === character}
        />
      ))}
    </div>
  );
}
