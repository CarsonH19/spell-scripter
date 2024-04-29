import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { combatActions } from "../../../../store/combat-slice";
import classes from "./Icon.module.css";

const Icon = ({ character }) => {
  const dispatch = useDispatch();

  // Use direct equality check instead of useSelector to avoid unnecessary rerenders
  const isHighlighted = useSelector((state) => state.combat.highlightedCharacter === character.id);

  const handleMouseEnter = () => {
    dispatch(combatActions.highlightCharacter(character.id));
  };

  const handleMouseLeave = () => {
    dispatch(combatActions.clearHighlight());
  };

  return (
    <div
      className={isHighlighted ? classes.highlighted : classes.icon}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Render your icon content here */}
    </div>
  );
};

// Memoize the Icon component to prevent unnecessary rerenders
const MemoizedIcon = memo(Icon);

export default MemoizedIcon;
