import { createSlice } from "@reduxjs/toolkit";

// ALERT!
// tomes.js & tome-slice must contain the same number of indices and have their data in the same order
// questions.js & tome-slice questions must also have matching id's

const tomeSlice = createSlice({
  name: "tome",
  initialState: [
    {
      name: "Introduction",
      unlocked: true,
      mastered: true,
      questions: [
        { id: "q1", answered: true },
        { id: "q2", answered: true },
        { id: "q3", answered: true },
        { id: "q4", answered: true },
        { id: "q5", answered: true },
        { id: "q6", answered: true },
        { id: "q7", answered: true },
        { id: "q8", answered: true },
        { id: "q9", answered: true },
        { id: "q10", answered: true },
      ],
    },
    {
      name: "Comments",
      unlocked: true,
      mastered: true,
      questions: [
        { id: "q1", answered: true },
        { id: "q2", answered: true },
        { id: "q3", answered: true },
        { id: "q4", answered: true },
        { id: "q5", answered: true },
        { id: "q6", answered: true },
      ],
    },
    {
      name: "Simple Operations",
      unlocked: true,
      mastered: false,
      questions: [
        { id: "q1", answered: true },
        { id: "q2", answered: true },
        { id: "q3", answered: true },
        { id: "q4", answered: true },
        { id: "q5", answered: false },
        { id: "q6", answered: false },
        { id: "q7", answered: false },
        { id: "q8", answered: false },
        { id: "q9", answered: false },
        { id: "q10", answered: false },
      ],
    },
    {
      name: "Variables",
      unlocked: false,
      mastered: false,
      questions: [
        { id: "q1", answered: false },
        { id: "q2", answered: false },
        { id: "q3", answered: false },
        { id: "q4", answered: false },
        { id: "q5", answered: false },
        { id: "q6", answered: false },
        { id: "q7", answered: false },
        { id: "q8", answered: false },
        { id: "q9", answered: false },
        { id: "q10", answered: false },
      ],
    },
    {
      name: "Data Types",
      unlocked: false,
      mastered: false,
      questions: [
        { id: "q1", answered: false },
        { id: "q2", answered: false },
        { id: "q3", answered: false },
        { id: "q4", answered: false },
        { id: "q5", answered: false },
        { id: "q6", answered: false },
        { id: "q7", answered: false },
        { id: "q8", answered: false },
        { id: "q9", answered: false },
        { id: "q10", answered: false },
      ],
    },
    {
      name: "Arithmetic Operators",
      unlocked: false,
      mastered: false,
      questions: [
        { id: "q1", answered: false },
        { id: "q2", answered: false },
        { id: "q3", answered: false },
        { id: "q4", answered: false },
        { id: "q5", answered: false },
        { id: "q6", answered: false },
        { id: "q7", answered: false },
        { id: "q8", answered: false },
        { id: "q9", answered: false },
        { id: "q10", answered: false },
      ],
    },
    {
      name: "Assignment Operators",
      unlocked: false,
      mastered: false,
      questions: [
        { id: "q1", answered: false },
        { id: "q2", answered: false },
        { id: "q3", answered: false },
        { id: "q4", answered: false },
        { id: "q5", answered: false },
        { id: "q6", answered: false },
        { id: "q7", answered: false },
        { id: "q8", answered: false },
        { id: "q9", answered: false },
        { id: "q10", answered: false },
      ],
    },
    {
      name: "Strings",
      unlocked: false,
      mastered: false,
      questions: [
        { id: "q1", answered: false },
        { id: "q2", answered: false },
        { id: "q3", answered: false },
        { id: "q4", answered: false },
        { id: "q5", answered: false },
        { id: "q6", answered: false },
        { id: "q7", answered: false },
        { id: "q8", answered: false },
        { id: "q9", answered: false },
        { id: "q10", answered: false },
      ],
    },
    {
      name: "Template Literals",
      unlocked: false,
      mastered: false,
      questions: [
        { id: "q1", answered: false },
        { id: "q2", answered: false },
        { id: "q3", answered: false },
        { id: "q4", answered: false },
        { id: "q5", answered: false },
        { id: "q6", answered: false },
        { id: "q7", answered: false },
        { id: "q8", answered: false },
        { id: "q9", answered: false },
        { id: "q10", answered: false },
      ],
    },
    {
      name: "String Concatenation",
      unlocked: false,
      mastered: false,
      questions: [
        { id: "q1", answered: false },
        { id: "q2", answered: false },
        { id: "q3", answered: false },
        { id: "q4", answered: false },
        { id: "q5", answered: false },
        { id: "q6", answered: false },
        { id: "q7", answered: false },
        { id: "q8", answered: false },
        { id: "q9", answered: false },
        { id: "q10", answered: false },
      ],
    },
  ],
  reducers: {
    complete(state, action) {
      // action.payload is the index of the tome in the state array
      state[action.payload].complete = true;
    },
    // unlock(state, action) {
    //   // action.payload is the index of the tome in the state array
    //   const { tomeIndex } = action.payload;

    //   // Check if >50% have been answered
    //   const isHalfAnswered = (questions) => {
    //     const answeredCount = questions.filter((q) => q.answered).length;
    //     return answeredCount > questions.length / 2;
    //   };

    //   if (isHalfAnswered(state[tomeIndex].questions)) {
    //     state[tomeIndex + 1].unlocked = true;
    //   }
    // },
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
        state[tomeIndex + 1].unlocked = true;
      }
    },
  },
});

export const tomeActions = tomeSlice.actions;

export default tomeSlice;
