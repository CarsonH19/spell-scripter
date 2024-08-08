import React, { useState, useEffect } from "react";
import classes from "./FadeEffect.module.css";
import { useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import store from "../../store/index";

const FadeEffect = () => {
  // const [fade, setFade] = useState(false);
  const isFade = useSelector((state) => state.ui.fade);

  useEffect(() => {
    handleFadeOut();
  }, [isFade]);

  const handleFadeOut = () => {
    // setFade(true);
    setTimeout(() => {
      // Perform any additional actions after fade-out completes
    }, 1000); // Duration should match the CSS animation duration
  };

  return (
    <div
      className={`${classes["fade-overlay"]} ${
        isFade ? classes["fade-in"] : classes["fade-out"]
      }`}
    />
  );
};

export default FadeEffect;

export async function callFadeTransition(dispatch, duration) {
  // update fadeDuration thus calling the FadeEffect component
  await dispatch(uiActions.updateFade({ change: "CALL" }));
  // Wait for the duration
  await delay(duration);
  // Clear the fade
  await dispatch(uiActions.updateFade({ change: "CLEAR" }));
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
