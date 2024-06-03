import classes from "./QTE.module.css";

import Question from "./Question";

import { tomeOfTesting } from "../../../data/questions";

export default function QuickTimeEventModal() {
  // CHANGE: Dynamically select the active tome, review, or proceed to next tome
  const question = getRandomQuestion(tomeOfTesting);

  return (
    <div className={classes.quiz}>
      <Question question={question} />
    </div>
  );
}

function getRandomQuestion(questions) {
  // Filter out only the incomplete questions
  const incompleteQuestions = questions.filter((q) => !q.complete);

  // Return null if no incomplete questions are found
  if (incompleteQuestions.length === 0) {
    return null;
  }

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * incompleteQuestions.length);

  return incompleteQuestions[randomIndex];
}
