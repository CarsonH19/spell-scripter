import store from "../../../store/index";

import classes from "./QTE.module.css";

import Question from "./Question";

export default function QuickTimeEventModal() {
  const { questionIndex, tomeIndex } = getRandomQuestionIndices();

  return (
    <div className={classes.quiz}>
      <Question questionIndex={questionIndex} tomeIndex={tomeIndex} />
    </div>
  );
}

function getRandomQuestionIndices() {
  const tomes = store.getState().tome;

  let tomeIndices = [];
  let questionIndices = [];
  let isReviewQuestion;
  let randomTomeIndex;
  let questions;

  let tomeIndex;
  let questionIndex;

  let loop;

  while (!loop) {
    tomeIndices = [];
    questionIndices = [];
    isReviewQuestion = Math.random() < 0.2;

    // Finding the tomeIndices
    if (isReviewQuestion) {
      // Collect indices of all unlocked tomes
      for (let i = 0; i < tomes.length; i++) {
        if (tomes[i].unlocked) {
          tomeIndices.push(i);
        }
      }
    } else {
      // Collect indices of unlocked & unmastered tomes
      for (let i = 0; i < tomes.length; i++) {
        if (!tomes[i].mastered && tomes[i].unlocked) {
          tomeIndices.push(i);
        }
      }
    }

    if (tomeIndices.length === 0) {
      continue; // No tomes available, retry
    }

    // Generate a random tomeIndex from the tomeIndices array
    randomTomeIndex =
      tomeIndices[Math.floor(Math.random() * tomeIndices.length)];

    // Select the questions array from the random tomeIndex
    questions = tomes[randomTomeIndex].questions;

    // Finding the questionIndices
    if (isReviewQuestion) {
      // Collect indices for all answered questions
      for (let i = 0; i < questions.length; i++) {
        if (questions[i].answered) {
          questionIndices.push(i);
        }
      }
    } else {
      // Collect indices for all unanswered questions
      for (let i = 0; i < questions.length; i++) {
        if (!questions[i].answered) {
          questionIndices.push(i);
        }
      }
    }

    if (questionIndices.length === 0) {
      continue; // No questions available, retry
    }

    // Generate a random index from the questionIndices array
    const randomQuestionIndex =
      questionIndices[Math.floor(Math.random() * questionIndices.length)];

    questionIndex = randomQuestionIndex;
    tomeIndex = randomTomeIndex;

    // Exit the while loop
    loop = true;
  }
  
  // Return tomeIndex & questionIndex
  return {
    questionIndex,
    tomeIndex,
  };
}
