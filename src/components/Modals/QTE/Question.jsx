import { useState } from "react";
import classes from "./QTE.module.css";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { setResult } from "../../../util/cast-spell.js";
import { useDispatch } from "react-redux";

import { QUESTIONS } from "../../../data/questions";
import { tomeActions } from "../../../store/tome-slice.js";
import { dungeonActions } from "../../../store/dungeon-slice.js";

export default function Question({ questionIndex, tomeIndex }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  const dispatch = useDispatch();

  const question = QUESTIONS[tomeIndex].questions[questionIndex];
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

      if (isCorrect) {
        // Mark question as answered
        dispatch(tomeActions.answerQuestion({ tomeIndex, questionIndex }));
        // Check if a new tome should be unlocked (50%)
        dispatch(tomeActions.unlock({ tomeIndex }));
        // Check if the tome has been mastered (100%)
        dispatch(tomeActions.master({ tomeIndex }));
      }

      // Check if answer is wrong and increment threat
      if (!isCorrect) {
        dispatch(dungeonActions.addThreat(1));
      }

      setAnswer({
        selectedAnswer,
        isCorrect,
      });

      setTimeout(() => {
        setResult(dispatch, isCorrect);
        // FIX: If question is correct set question.complete to true.
      }, 2000);
    }, 1000);
  }

  function handleNoAnswer() {
    setAnswer({
      selectedAnswer: null,
      isCorrect: false,
    });

    dispatch(dungeonActions.addThreat(1));
    setResult(dispatch, false);
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
