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
  container = "container",
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  let styles = {
    title: "",
    text: "",
    detailOne: "",
    detailTwo: "",
    detailThree: "",
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  if (position === "item") {
    styles.title = "";
    styles.text = text.toLowerCase();
    styles.detailOne = "description";
    styles.detailTwo = "";
    styles.detailThree = "";
  }

  return (
    <div
      className={classes[container]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className={`${classes[position]}`}>
          {title && <p className={`${classes.title}`}>{title}</p>}
          {text && (
            <p className={`${classes.text} ${classes[styles.text]}`}>{text}</p>
          )}
          {detailOne && (
            <p className={`${classes[styles.detailOne]}`}>{detailOne}</p>
          )}
          {detailTwo && (
            <p className={`${classes[styles.detailTwo]}`}>{detailTwo}</p>
          )}
          {detailThree && (
            <p className={`${classes[styles.detailThree]}`}>{detailThree}</p>
          )}
          {detailFour && (
            <p className={`${classes[styles.detailFour]}`}>{detailFour}</p>
          )}
        </div>
      )}
    </div>
  );
}
