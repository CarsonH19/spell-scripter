// ALERT!
// tomes.js & tome-slice must contain the same number of indices


export const TOMES = [
  // INTRODUCTION
  {
    name: "Introduction",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "Welcome to JavaScript!",
        text: [
          `In this course, we'll learn the basic concepts of JavaScript - one of the most popular programming languages that makes websites dynamic and interactive. With JavaScript, you can also create mobile apps and games, process data, and much more!`,
        ],
      },
      {
        page: 2,
        type: "QUESTION",
        title: "",
        question: "What is JavaScript?",
        answers: [
          "One of the most popular programming languages in the world.",
          "A web browser",
        ],
      },
      {
        page: 3,
        type: "INFO", // change type to "EDITOR"?
        title: "Output",
        text: [
          "The console is part of the web browser and allows you to log messages, run JavaScript code, and see errors and warnings.",
          `Let's kick things off by creating a program that displays "Hello World!" to the console using the <b>console.log()</b> function.`,
        ],
        codeEditor: true, // add code editor details here
      },
      {
        page: 4,
        type: "QUESTION",
        title: "",
        question: "Which function is used to generate output to the console?",
        answers: ["print()", "write()", "console.log()"],
      },
      {
        page: 5,
        type: "INFO",
        title: "Text",
        text: ["To use text in JavaScript, we need to enclose it in quotes:"],
        codeEditor: true,
      },
      {
        page: 6,
        type: "QUESTION",
        title: "",
        question: `How do you output "Game Over" to the console?`,
        answers: [
          `console.log("Game Over");`,
          `console.log{"Game Over"};`,
          `console.log(Game Over);`,
          `console."Game Over";`,
        ],
      },
      {
        page: 7,
        type: "INFO",
        title: "Output",
        text: [
          "You can use the console.log() function as many times as you want. Each statement outputs text from a new line.",
          `A computer program is a list of "instructions" to be "executed" by a computer.`,
          `In a programming language, these programming instructions are called statements.`,
        ],
        codeEditor: true,
      },
      {
        page: 8,
        type: "INFO",
        title: "Numbers",
        text: [`When working with numbers, quotes are not needed.`],
        codeEditor: true,
      },
      {
        page: 9,
        type: "QUESTION",
        title: "",
        question: `How do you output the number 19 to the console?`,
        answers: [
          `console.log(19);`,
          `console.log{"19"};`,
          `console.log("19");`,
          `console.19;`,
        ],
      },
      {
        page: 10,
        type: "SUMMARY",
        title: "Summary",
        text: [
          `Amazing, you have taken the first step! Let's summarize what you've just learned:`,
        ],
        listItems: [
          `The console is part of the web browser and allows you to log messages, run JavaScript code, and see errors and warnings.`,
          `console.log() is used to display a text to the console`,
        ],
      },
    ],
  },
  // NEW TOME
  // {
  //   name: "JavaScript in HTML",
  //   lesson: [],
  // },
  // {
  //   name: "Simple Operations",
  //   lesson: [],
  // },
  // {
  //   name: "Variables",
  //   lesson: [],
  // },
  // {
  //   name: "Data Types",
  //   lesson: [],
  // },
  // {
  //   name: "Operators",
  //   lesson: [],
  // },
  // {
  //   name: "Assignment Operators",
  //   lesson: [],
  // },
  // {
  //   name: "Strings",
  //   lesson: [],
  // },
  // {
  //   name: "Template Literals",
  //   lesson: [],
  // },
  // {
  //   name: "String Concatenation",
  //   lesson: [],
  // },
];

// Add a preview page to show mastery progress
// // add a "Overview Section"
// // add a progress bar with %
// // add a study button to the preview page

// Add a complete button on the last page.
// add a page counter
