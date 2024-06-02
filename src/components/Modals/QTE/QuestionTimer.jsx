import { useState, useEffect } from 'react';

import classes from "./QTE.module.css";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log('SETTING INTERVAL');
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={classes[mode]}
    />
  );
}