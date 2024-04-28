import classes from "./Tooltip.module.css";

import { useState } from "react";

export default function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className={classes.container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && <div className={classes.tooltip}>{text}</div>}
    </div>
  );
};