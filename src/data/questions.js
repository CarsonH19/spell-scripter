export const QUESTIONS = [
  {
    // =================================================
    //                     INTRODUCTION
    // =================================================
    name: "Introduction",
    questions: [
      {
        id: "q1",
        text: "What can you do with JavaScript?",
        answers: [
          "Create dynamic and interactive websites, mobile apps, games, process data, etc.",
          "Only design website layouts",
        ],
      },
      {
        id: "q2",
        text: "What is the role of the console in JavaScript?",
        answers: [
          "A part of the web browser that allows you to log messages, run JavaScript code, and see errors and warnings.",
          "A function used to style text on a webpage.",
        ],
      },
      {
        id: "q3",
        text: "Which of the following correctly logs the text 'Hello JavaScript!' to the console?",
        answers: [
          "console.log('Hello JavaScript!');",
          "log.console('Hello JavaScript!');",
          "console.log{'Hello JavaScript!'};",
        ],
      },
      {
        id: "q4",
        text: "How would you output the text 'Success!' using the console.log function?",
        answers: [
          "console.log('Success!');",
          "console.log{Success!};",
          "console.log(Success!);",
        ],
      },
      {
        id: "q5",
        text: "True or False: You need to use quotes when logging numbers to the console.",
        answers: ["False", "True"],
      },
      {
        id: "q6",
        text: "How do you write multiple console.log statements?",
        answers: [
          "Write each statement on a new line.",
          "Combine them into one log statement using commas.",
        ],
      },
      {
        id: "q7",
        text: "What function is used to generate output to the console?",
        answers: ["console.log()", "output.console()", "print()", "write()"],
      },
      {
        id: "q8",
        text: "How many times can you use console.log() in your program?",
        answers: [
          "As many times as you want.",
          "Only once per program.",
          "Three times per program.",
          "It depends on the browser.",
        ],
      },
      {
        id: "q9",
        text: "What do you wrap around text so that it is displayed in the console?",
        answers: [
          `Quotes ""`,
          "Brackets []",
          "Parentheses ()",
          "Curly braces {}",
        ],
      },
      {
        id: "q10",
        text: "What do you wrap around numbers to be displayed in the console?",
        answers: ["Nothing", `Quotes ""`, "Brackets []", "Parentheses ()"],
      },
    ],
  },
  // =================================================
  //                     COMMENTS
  // =================================================
  {
    name: "Comments",
    questions: [
      {
        id: "q1",
        text: "Which of the following is a valid JavaScript comment?",
        answers: [
          "// Am I a comment?",
          "# This is correct",
          "<>This is a comment<>",
          "/ What about this? /",
        ],
      },
      {
        id: "q2",
        text: "What syntax do you use to make a multi-line comment?",
        answers: [
          "/* Think carefully.... */",
          "// Does this work? //",
          "# Maybe me? #",
          "/ Pick me! /",
        ],
      },
      {
        id: "q3",
        text: "How do you write a single-line comment in JavaScript?",
        answers: [
          "// This is a comment",
          "/* This is a comment */",
          "# This is a comment",
          "<> This is a comment <>",
        ],
        // code: `// This is a comment\nconsole.log("This is code!");`,
      },
      {
        id: "q4",
        text: "How do you write a multi-line comment in JavaScript?",
        answers: [
          "/* This is a multi-line comment */",
          "// This is a multi-line comment //",
          "# This is a multi-line comment #",
          "<> This is a multi-line comment <>",
        ],
        // code: `/* This is a multi-line comment */\nconsole.log("This is code!");`,
      },
      {
        id: "q5",
        text: "What do comments do in a JavaScript program?",
        answers: [
          "They explain the code to other developers and are ignored by the compiler.",
          "They are displayed in the console.",
          "They are required to run the program.",
          "They change the output of the code.",
        ],
      },
      {
        id: "q6",
        text: "What is the output of this code?",
        code: `console.log(5);\n// console.log("Hello");`,
        answers: ["5", "Hello", "5\nHello", "No output"],
      },
    ],
  },
  // =================================================
  //               SIMPLE OPERATIONS
  // =================================================
  {
    name: "Simple Operations",
    questions: [
      {
        id: "q1",
        text: "What does console.log(3+4) output?",
        answers: ["7", "34", "3+4", "1"],
        code: `console.log(3+4);`,
      },
      {
        id: "q2",
        text: "Which of the following code snippets correctly multiplies 3 by 4?",
        answers: [
          "console.log(3*4);",
          "console.log(3x4);",
          "console.log('3*4');",
          "console.log(34);",
        ],
        code: `// Choose the correct snippet`,
      },
      {
        id: "q3",
        text: "What is the output of console.log(6+5-1)?",
        answers: ["10", "11", "12", "9"],
        code: `console.log(6+5-1);`,
      },
      {
        id: "q4",
        text: "How do you perform division in JavaScript?",
        answers: [
          "Using the slash symbol (/)",
          "Using the backslash symbol (\\)",
          "Using the asterisk symbol (*)",
          "Using the percent symbol (%)",
        ],
      },
      {
        id: "q5",
        text: "What is the output of console.log(4+2*5)?",
        answers: ["14", "30", "20", "6"],
        code: `console.log(4+2*5);`,
      },
      {
        id: "q6",
        text: "Which code would give you the result of 7?",
        answers: [
          "console.log((1+1)+(10/2));",
          "console.log(2*(9/3));",
          "console.log((3+4)*2);",
          "console.log(6/3-1);",
        ],
        code: `// Choose the correct snippet`,
      },
      {
        id: "q7",
        text: "What is the output of console.log(1+2*3)?",
        answers: ["7", "6", "3", "9"],
        code: `console.log(1+2*3);`,
      },
      {
        id: "q8",
        text: "How can you control the order of operations in a calculation?",
        answers: [
          "By using parentheses",
          "By using brackets",
          "By using slashes",
          "By using asterisks",
        ],
      },
      {
        id: "q9",
        text: "Which operation is performed first in console.log(8+2*3)?",
        answers: ["Multiplication", "Addition", "Subtraction", "Division"],
        code: `console.log(8+2*3);`,
      },
      {
        id: "q10",
        text: "What will be the output of the following code: console.log((8+2)*3)?",
        answers: ["30", "24", "14", "10"],
        code: `console.log((8+2)*3);`,
      },
    ],
  },
  // =================================================
  //                     VARIABLES
  // =================================================
  {
    name: "Variables",
    questions: [
      {
        id: "q1",
        text: "What are variables in JavaScript?",
        answers: ["containers for storing values", "values", "functions"],
      },
      {
        id: "q2",
        text: "What is the correct way to create a variable and assign it a value?",
        answers: [
          "let action = 'Attack';",
          "let = 'Guard';",
          "variable = 'Cast Spell';",
          "let action = Use Item;",
        ],
      },
      {
        id: "q3",
        text: "How do you assign a value to a variable after creating it?",
        answers: [
          "Using an equal sign (=)",
          "Using a colon (:)",
          "Using a period (.)",
          "Using a semicolon (;)",
        ],
        code: `let spell;\nspell = "Firebolt";`,
      },
      {
        id: "q4",
        text: "Which of the following outputs the value of a variable?",
        answers: [
          "console.log(damage);",
          "console.log('damage');",
          "console.log(let damage = 12);",
          "console.log(9);",
        ],
      },
      {
        id: "q5",
        text: "What will be the output of the following code?",
        answers: ["8", "7", "5", "error"],
        code: `let level = 7;\nlevel = 8;\nconsole.log(level);`,
      },
      {
        id: "q6",
        text: "How do you declare a constant in JavaScript?",
        answers: [
          "Using the const keyword",
          "Using the let keyword",
          "Using the var keyword",
          "Using the constant keyword",
        ],
      },
      {
        id: "q7",
        text: "What will happen if you try to change the value of a constant?",
        answers: [
          "An error will occur",
          "The value will change",
          "The program will ignore the change",
          "The program will reset the value",
        ],
        code: `const spell = "Firebolt";\nspell = "Frostbite";`,
      },
      {
        id: "q8",
        text: "Which of the following is a correctly named variable?",
        answers: [
          "let _Evocation = 'School';",
          "let 1enemy = 'Skeleton';",
          "let new item = 'Potion';",
          "let +spell = 'Bark Skin';",
        ],
      },
      {
        id: "q9",
        text: "Which keyword do you use to create a variable that can change its value?",
        answers: ["let", "const", "var", "new"],
      },
      {
        id: "q10",
        text: "Which of the following statements about variable names is true?",
        answers: [
          "Variable names can start with a letter, underscore, or dollar sign.",
          "Variable names can start with a number.",
          "Variable names can contain spaces.",
          "Variable names are not case-sensitive.",
        ],
      },
    ],
  },
  // =================================================
  //                   DATA TYPES
  // =================================================
  {
    name: "Data Types",
    questions: [
      {
        id: "q1",
        text: "Which of the following is a string?",
        answers: [`"Twenty Nine"`, `"Warrior`, `Dungeon`, `14`],
        code: `console.log("Twenty Nine");`,
      },
      {
        id: "q2",
        text: "What is the data type of the value '3' in the code below?",
        code: `let number = "3";`,
        answers: [`String`, `Number`],
      },
      {
        id: "q3",
        text: "What will be the output of the following code?",
        answers: [`"15"`, `15`, `"1" + "5"`, `"1 5"`],
        code: `console.log("15");`,
      },
      {
        id: "q4",
        text: "Which code correctly defines a number variable with a decimal value?",
        answers: [
          `let y = 8.4;`,
          `let y = "8.4";`,
          `let y = 8;`,
          `let y = '8.4';`,
        ],
      },
      {
        id: "q5",
        text: "What is the result of the following code?",
        answers: [`324`, `60`, `18`, `30`],
        code: `console.log(54 * 6);`,
      },
      {
        id: "q6",
        text: "What will the following code output?",
        answers: [`12`, `4`, `8`, `10`],
        code: `let x = 4;\nlet y = 8;\nconsole.log(x + y);`
      },
      {
        id: "q7",
        text: "Which of the following is a Boolean value?",
        answers: [`false`, `4`, `spellbook`, `"true"`],
      },
      {
        id: "q8",
        text: "How are strings represented in JavaScript?",
        answers: [
          "By enclosing text in quotes",
          "By using square brackets",
          "By using curly braces",
          "By using parentheses",
        ],
      },
      {
        id: "q9",
        text: "What is the result of this code?",
        answers: [`2`, `4`, `8`, `16`],
        code: `console.log(8 / 4);`,
      },
      {
        id: "q10",
        text: "Which of the following statements is true about the Boolean data type?",
        answers: [
          "It can only be true or false",
          "It can be any number",
          "It can be any string",
          "It can have multiple values like 'yes' or 'no'",
        ],
      },
    ],
  },
  // =================================================
  //                   OPERATORS
  // =================================================
  {
    name: "Operators",
    questions: [
      {
        id: "q1",
        text: "Test Question #16",
        answers: ["A", "B", "C", "D"],
      },
      {
        id: "q2",
        text: "Test Question #17",
        answers: ["A", "B", "C", "D"],
      },
      {
        id: "q3",
        text: "Test Question #18",
        answers: ["A", "B", "C", "D"],
      },
    ],
  },
  // =================================================
  //               ASSIGNMENT OPERATORS
  // =================================================
  {
    name: "Assignment Operators",
    questions: [
      {
        id: "q1",
        text: "Test Question #19",
        answers: ["A", "B", "C", "D"],
      },
      {
        id: "q2",
        text: "Test Question #20",
        answers: ["A", "B", "C", "D"],
      },
      {
        id: "q3",
        text: "Test Question #21",
        answers: ["A", "B", "C", "D"],
      },
    ],
  },
  // =================================================
  //                     STRINGS
  // =================================================
  {
    name: "Strings",
    questions: [
      {
        id: "q1",
        text: "Test Question #22",
        answers: ["A", "B", "C", "D"],
      },
      {
        id: "q2",
        text: "Test Question #23",
        answers: ["A", "B", "C", "D"],
      },
      {
        id: "q3",
        text: "Test Question #24",
        answers: ["A", "B", "C", "D"],
      },
    ],
  },
  // =================================================
  //               TEMPLATE LITERALS
  // =================================================
  {
    name: "Template Literals",
    questions: [
      {
        id: "q1",
        text: "Test Question #25",
        answers: ["A", "B", "C", "D"],
      },
      {
        id: "q2",
        text: "Test Question #26",
        answers: ["A", "B", "C", "D"],
      },
      {
        id: "q3",
        text: "Test Question #27",
        answers: ["A", "B", "C", "D"],
      },
    ],
  },
  // =================================================
  //              STRING CONCATENATION
  // =================================================
  {
    name: "String Concatenation",
    questions: [
      {
        id: "q1",
        text: "Test Question #28",
        answers: ["A", "B", "C", "D"],
      },
      {
        id: "q2",
        text: "Test Question #29",
        answers: ["A", "B", "C", "D"],
      },
      {
        id: "q3",
        text: "Test Question #30",
        answers: ["A", "B", "C", "D"],
      },
    ],
  },
];
