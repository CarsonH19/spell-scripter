import { createPortal } from "react-dom";

import classes from "./Narration.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Narration() {
  const narration = useSelector((state) => state.log.narration);

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
    const timeoutId = setTimeout(() => {
      setShowText(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [narration]);

  let text;
  if (narration.length > 0) {
    text = narration[0];
  }

  return createPortal(
    <div className={classes.narration}>{showText && <p>{text}</p>}</div>,
    document.getElementById("narration")
  );
}
