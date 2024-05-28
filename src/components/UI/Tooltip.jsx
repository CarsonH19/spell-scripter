import classes from "./Tooltip.module.css";

import { useState } from "react";

export default function Tooltip({
  title,
  text,
  detailOne,
  detailTwo,
  children,
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className={classes.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className={classes.tooltip}>
          {title && <p className={classes.title}>{title}</p>}
          {text && <p className={classes.text}>{text}</p>}
          {detailOne && <p className={classes.detail}>{detailOne}</p>}
          {detailTwo && <p>{detailTwo}</p>}
        </div>
      )}
    </div>
  );
}
