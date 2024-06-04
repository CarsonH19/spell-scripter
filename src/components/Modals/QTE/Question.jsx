import { useState } from "react";
import classes from "./QTE.module.css";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { setResult } from "../../../util/cast-spell.js";

export default function Question({ question }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 30000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(selectedAnswer) {
    setAnswer({
      selectedAnswer,
      isCorrect: null,
    });

    setTimeout(() => {
      const isCorrect = question.answers[0] === selectedAnswer;
      setAnswer({
        selectedAnswer,
        isCorrect,
      });

      setTimeout(() => {
        setResult(isCorrect);
        // FIX: If question is correct set question.complete to true.
      }, 2000);
    }, 1000);
  }

  function handleNoAnswer() {
    setAnswer({
      selectedAnswer: null,
      isCorrect: false,
    });

    setTimeout(() => {
      setResult(false);
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
      <>
        <QuestionTimer
          key={timer}
          timeout={timer}
          onTimeout={answer.selectedAnswer === "" ? handleNoAnswer : null}
          mode={answerState}
        />
        <h2>{question.text}</h2>
        <Answers
          answers={question.answers}
          selectedAnswer={answer.selectedAnswer}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </>
    </div>
  );
}