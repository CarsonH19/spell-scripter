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
        code: `console.log("Hello")`,
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
        answers: ["console.log()", "output.console()", "print()", "write()"],
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
  {
    name: "JavaScript Basics",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "The <script> Tag",
        text: [
          `You can add JavaScript code in an HTML document using the <script> tag.`,
        ],
      },
      {
        page: 2,
        type: "QUESTION",
        title: "",
        question: "Which HTML tag is used for JavaScript code?",
        answers: ["<script>", "<p>", "<img>", "<JavaScript>"],
      },
      {
        page: 3,
        type: "INFO",
        title: "Alert Box",
        text: [
          `Another way to display messages is an alert box.`,
          `You can generate them by using the <b>alert()</b> function`,
          `Just like with the console.log(), here the text should be enclosed in quotes.`,
        ],
      },
      {
        page: 4,
        type: "QUESTION",
        title: "",
        question: `How would you generate an alert box with the text "Wizard"?`,
        answers: [
          `alert("Wizard");`,
          `Alert("wizard");`,
          `alert.box("Wizard");`,
          `<alert>("Wizard");`,
        ],
      },
      {
        page: 5,
        type: "INFO",
        title: "Comments",
        text: [
          `Comments are explanatory statements that you can include in a program to benefit the person reading your code.`,
          `A single-line comment starts with //`,
          `The compiler ignores everything that appears in the comment, so none of that information affects the result.`,
        ],
      },
      {
        page: 6,
        type: "QUESTION",
        title: "",
        question: `Which of the following is a valid JavaScript comment?`,
        answers: [
          `// Am I a comment?`,
          `# This is correct`,
          `<>This is a comment<>;`,
          `/ What about this? /;`,
        ],
      },
      {
        page: 7,
        type: "INFO",
        title: "Comments",
        text: [
          `You can also create multi-line comments.`,
          `They start with /* and end with */, making everything in between a comment.`,
        ],
      },
      {
        page: 8,
        type: "QUESTION",
        title: "",
        question: `What syntax do you use to make a multi-line comment?`,
        answers: [
          `/* Think carefully.... */`,
          `// Does this work? //`,
          `# Maybe me? #`,
          `/ Pick me! /`,
        ],
      },
      {
        page: 9,
        type: "SUMMARY",
        title: "Summary",
        text: [`Let's summarize what you've just learned:`],
        listItems: [
          `you can add JavaScript code to an HTML document using the <script></script> tag`,
          `alert() generates an alert box with a message`,
          `comments are used to explain the code`,
        ],
      },
    ],
  },
  {
    name: "Simple Operations",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "Calculations",
        text: [
          `Let's talk about calculations! They are everywhere, including in programming. So, they will be in your future programs too!`,
          `Performing a calculation in JavaScript is simple, just enter it into the console.log() function`,
          `Example: console.log(1+2);`,
        ],
      },
      {
        page: 2,
        type: "QUESTION",
        title: "",
        question: `What does console.log(3+4) output?`,
        answers: [`7`, `34`, `3+4`, `1`],
      },
      {
        page: 3,
        type: "INFO",
        title: "Multiple Calculations",
        text: [
          `You can perform multiple calculations within one statement`,
          `Example: console.log(5+6-1);`,
        ],
      },
      {
        page: 4,
        type: "INFO",
        title: "Multiplication",
        text: [
          `Multiplication is done using an asterisk symbol (*).`,
          `Example: console.log(5*3);`,
        ],
      },
      {
        page: 5,
        type: "QUESTION",
        title: "",
        question: `Which code will output the result of multiplying 3 by 4?`,
        answers: [
          `console.log(3*4)`,
          `console.log(3x4)`,
          `console.log("3*4")`,
          `console.log(34)`,
        ],
      },
      {
        page: 6,
        type: "INFO",
        title: "Division",
        text: [
          `Division is done using a slash.`,
          `Example: console.log(16/4);`,
        ],
      },
      {
        page: 7,
        type: "INFO",
        title: "Order of Operations",
        text: [
          `Just like in regular math, multiplication and division is calculated before addition and subtraction.`,
          `Example: console.log(4+2*5);`,
        ],
      },
      {
        page: 8,
        type: "QUESTION",
        title: "",
        question: `What is the output of console.log(1+2*3)?`,
        answers: [`7`, `6`, `3`, `9`],
      },
      {
        page: 9,
        type: "INFO",
        title: "Order of Operations",
        text: [
          `To control precedence, use parentheses to indicate the order in which you want to perform operations.`,
          `Example: console.log((8+2)*3);`,
        ],
      },
      {
        page: 10,
        type: "QUESTION",
        title: "",
        question: `Which of the following would output 7?`,
        answers: [
          `console.log((1+1)+(10/2));`,
          `console.log(2*(9/3));`,
          `console.log((3+4)*2);`,
          `console.log(6/3-1);`,
        ],
      },
      {
        page: 11,
        type: "SUMMARY",
        title: "Summary",
        text: [`Let's summarize what you've just learned:`],
        listItems: [
          `Calculations can be done directly in the console.log() function`,
          `Multiplication and division have higher precedence than addition and subtraction have`,
          `You can control the precedence using parentheses`,
        ],
      },
    ],
  },
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
