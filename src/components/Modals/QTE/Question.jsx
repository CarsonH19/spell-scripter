import { useState, useEffect } from "react";
import classes from "./QTE.module.css";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { QUESTIONS } from "../../../data/questions.js";
import { setResult } from "../../../util/cast-spell.js";

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  const [isCompleted, setIsCompleted] = useState(false);

  let timer = 30000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  useEffect(() => {
    if (answer.isCorrect !== null) {
      setTimeout(() => setIsCompleted(true), 2000);
    }
  }, [answer.isCorrect]);

  function handleSelectAnswer(selectedAnswer) {
    setAnswer({
      selectedAnswer,
      isCorrect: null,
    });

    setTimeout(() => {
      const isCorrect = QUESTIONS[index].answers[0] === selectedAnswer;
      setAnswer({
        selectedAnswer,
        isCorrect,
      });

      setResult(isCorrect);
      console.log("setResult", isCorrect);

      setTimeout(() => {
        onSelectAnswer(selectedAnswer);
        setIsCompleted(true);
      }, 2000);
    }, 1000);
  }

  function handleSkipAnswer() {
    setAnswer({
      selectedAnswer: null,
      isCorrect: false,
    });

    setTimeout(() => {
      onSkipAnswer();
      setIsCompleted(true);
    }, 2000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div className={classes.question}>
      {!isCompleted && (
        <>
          <QuestionTimer
            key={timer}
            timeout={timer}
            onTimeout={answer.selectedAnswer === "" ? handleSkipAnswer : null}
            mode={answerState}
          />
          <h2>{QUESTIONS[index].text}</h2>
          <Answers
            answers={QUESTIONS[index].answers}
            selectedAnswer={answer.selectedAnswer}
            answerState={answerState}
            onSelect={handleSelectAnswer}
          />
        </>
      )}
      {isCompleted && <div className={classes.completed}>Question completed.</div>}
    </div>
  );
}
