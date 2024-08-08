import classes from "./Tooltip.module.css";

import { useState } from "react";

export default function Tooltip({
  title,
  text,
  detailOne,
  detailTwo,
  detailThree,
  detailFour,
  children,
  position = "tooltip",
  container = "container"
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
      className={classes[container]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className={`${classes[position]}`}>
          {title && <p className={classes.title}>{title}</p>}
          {text && <p className={classes.text}>{text}</p>}
          {detailOne && <p className={classes.detail}>{detailOne}</p>}
          {detailTwo && <p>{detailTwo}</p>}
          {detailThree && <p>{detailThree}</p>}
          {detailFour && <p>{detailFour}</p>}

        </div>
      )}
    </div>
  );
}
