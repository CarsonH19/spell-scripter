import { createSlice } from "@reduxjs/toolkit";

// ALERT!
// tomes.js & tome-slice must contain the same number of indices

const tomeSlice = createSlice({
  name: "tome",
  initialState: [
    {
      name: "Introduction",
      unlocked: true,
      complete: false,
      mastered: false,
      questions: [
        { id: "q1", answered: false },
        { id: "q2", answered: false },
        { id: "q3", answered: false },
      ],
    },
    {
      name: "JavaScript in HTML",
      unlocked: false,
      complete: false,
      mastered: false,
      questions: [
        { id: "q1", answered: false },
        { id: "q2", answered: false },
        { id: "q3", answered: false },
      ],
    },
    {
      name: "Simple Operations",
      unlocked: false,
      complete: false,
      mastered: false,
      questions: [
        { id: "q1", answered: false },
        { id: "q2", answered: false },
        { id: "q3", answered: false },
      ],
    },
  ],
  reducers: {
    complete(state, action) {
      // action.payload is the index of the tome in the state array
      state[action.payload].complete = true;
    },
    unlock(state, action) {
      // action.payload is the index of the tome in the state array
      const { tomeIndex } = action.payload;

      // Check if >50% have been answered
      const isHalfAnswered = (questions) => {
        const answeredCount = questions.filter((q) => q.answered).length;
        return answeredCount > questions.length / 2;
      };

      if (isHalfAnswered(state[tomeIndex].questions)) {
        state[tomeIndex + 1].unlocked = true;
      }
    },
    answerQuestion(state, action) {
      // action.payload is an object containing tomeIndex and questionIndex
      const { tomeIndex, questionIndex } = action.payload;
      state[tomeIndex].questions[questionIndex].answered = true;
    },
    master(state, action) {
      const { tomeIndex } = action.payload;

      // Check if all questions are answered
      const allAnswered = state[tomeIndex].questions.every((q) => q.answered);

      if (allAnswered) {
        state[tomeIndex].mastered = true;
        console.log("Tome Mastered");
      }
    },
    // unlock(state, action) {
    //   Check if Tome is mastered unlock next tomes
    // },
  },
});

export const tomeActions = tomeSlice.actions;

export default tomeSlice;
