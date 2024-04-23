import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initiativeActions } from "../../../../store/initiative-slice";
import classes from "./Icon.module.css";

const Icon = ({ character }) => {
  const dispatch = useDispatch();

  // Use direct equality check instead of useSelector to avoid unnecessary rerenders
  const isHighlighted = useSelector((state) => state.initiative.highlightedCharacter === character.id);

  const handleMouseEnter = () => {
    dispatch(initiativeActions.highlightCharacter(character.id));
  };

  const handleMouseLeave = () => {
    dispatch(initiativeActions.clearHighlight());
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
