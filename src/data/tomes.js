// ALERT!
// tomes.js & tome-slice must contain the same number of indices

export const TOMES = [
  // =================================================
  //                     INTRODUCTION
  // =================================================

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
        code: `// Your journey starts here.`,
      },
      {
        page: 2,
        type: "QUESTION",
        question: "What is JavaScript?",
        answers: [
          "One of the most popular programming languages in the world.",
          "A web browser",
        ],
      },
      {
        page: 3,
        type: "INFO",
        title: "Output",
        text: [
          `The console is part of the web browser and allows you to log messages, run JavaScript code, and see errors and warnings. Let's kick things off by creating a program that displays "Hello World!" to the console using the console.log() function.`,
          "Try it out below!",
        ],
        code: `console.log("Hello World!")\n\n\n\n\n\n\n\n/*Click the double arrows\nto enlarge the Code Editor!*/`,
      },
      {
        page: 4,
        type: "QUESTION",
        question: "Which function is used to generate output to the console?",
        answers: ["console.log()", "output.console()", "print()", "write()"],
      },
      {
        page: 5,
        type: "INFO",
        title: "Text",
        text: [
          "To use text in JavaScript, we need to enclose it in quotes.",
          `Tap the "Run Code" button in the Code Editor to see output! Try and change the text yourself!`,
        ],
        code: `console.log("Change me!")`,
      },
      {
        page: 6,
        type: "QUESTION",
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
          `A computer program is a list of "instructions" to be "executed" by a computer. In a programming language, these programming instructions are called statements.`,
        ],
        code: `console.log("I'm a statement!")\nconsole.log("So am I!")`,
      },
      {
        page: 8,
        type: "INFO",
        title: "Numbers",
        text: [
          `When working with numbers, quotes are not needed.`,
          "How old are you? Try to change the code below to output your age!",
        ],
        code: `console.log(19)`,
      },
      {
        page: 9,
        type: "QUESTION",
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
        title: `Let's review what you've just learned:`,
        listItems: [
          `the console is part of the web browser and allows you to log messages, run JavaScript code, and see errors and warnings`,
          `console.log() is used to display a text to the console`,
        ],
      },
    ],
  },
  // =================================================
  //                     COMMENTS
  // =================================================
  {
    name: "Comments",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "Single-line Comments",
        text: [
          `Comments are explanatory statements that you can include in a program to benefit the person reading your code.`,
          `A single-line comment starts with //`,
          `The compiler ignores everything that appears in the comment, so none of that information affects the result.`,
        ],
        code: `// I'm a comment! So i'll be ignored!\nconsole.log("I'm not a comment!")`,
      },
      {
        page: 2,
        type: "QUESTION",
        question: `Which of the following is a valid JavaScript comment?`,
        answers: [
          `// Am I a comment?`,
          `# This is correct`,
          `<>This is a comment<>`,
          `/ What about this? /`,
        ],
      },
      {
        page: 3,
        type: "INFO",
        title: "Multi-line Comments",
        text: [
          `You can also create multi-line comments.`,
          `They start with /* and end with */, making everything in between a comment.`,
        ],
        code: `/* Using this syntax\nyou can write longer\ncomments across as many\nlines as you need!*/`,
      },
      {
        page: 4,
        type: "QUESTION",
        question: `What syntax do you use to make a multi-line comment?`,
        answers: [
          `/* Think carefully.... */`,
          `// Does this work? //`,
          `# Maybe me? #`,
          `/ Pick me! /`,
        ],
      },
      {
        page: 5,
        type: "SUMMARY",
        title: `Let's review what you've just learned:`,
        listItems: [
          `comments are used to explain the code to other developers.`,
          `single-line comments start with //`,
          `multi-line comments start with /* and end with */`,
        ],
      },
    ],
  },
  // =================================================
  //                SIMPLE OPERATIONS
  // =================================================
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
        ],
        code: `console.log(1+2);`,
      },
      {
        page: 2,
        type: "QUESTION",
        question: `What does console.log(3+4) output?`,
        answers: [`7`, `34`, `3+4`, `1`],
      },
      {
        page: 3,
        type: "INFO",
        title: "Multiple Calculations",
        text: [`You can perform multiple calculations within one statement`],
        code: `console.log(6+5-1);`,
      },
      {
        page: 4,
        type: "INFO",
        title: "Multiplication",
        text: [`Multiplication is done using an asterisk symbol (*).`],
        code: `console.log(5*3);`,
      },
      {
        page: 5,
        type: "QUESTION",
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
        text: [`Division is done using a slash.`],
        code: `console.log(16/4);`,
      },
      {
        page: 7,
        type: "INFO",
        title: "Order of Operations",
        text: [
          `Just like in regular math, multiplication and division is calculated before addition and subtraction.`,
        ],
        code: `console.log(4+2*5);`,
      },
      {
        page: 8,
        type: "QUESTION",
        question: `What is the output of console.log(1+2*3)?`,
        answers: [`7`, `6`, `3`, `9`],
      },
      {
        page: 9,
        type: "INFO",
        title: "Order of Operations",
        text: [
          `To control precedence, use parentheses to indicate the order in which you want to perform operations.`,
        ],
        code: `console.log((8+2)*3);`,
      },
      {
        page: 10,
        type: "QUESTION",
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
        title: `Let's review what you've just learned:`,
        listItems: [
          `Calculations can be done directly in the console.log() function`,
          `Multiplication and division have higher precedence than addition and subtraction have`,
          `You can control the precedence using parentheses`,
        ],
      },
    ],
  },
  // =================================================
  //                  VARIABLES
  // =================================================
  {
    name: "Variables",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "Creating Variables",
        text: [
          `In apps, we usually need to store some values and work with them throughout the program to make accessing them much more convenient. We do this by using variables, which are containers for storing values.`,
          `One way a variable can be created is by using the let keyword.`,
        ],
        code: `let spell;\n//"let" is the keyword used to create a variable\n//"spell" is the name of this variable`,
      },
      {
        page: 2,
        type: "QUESTION",
        question: `What are variables?`,
        answers: [`containers for storing values`, `values`, `functions`],
      },
      {
        page: 3,
        type: "INFO",
        title: "Initialization",
        text: [
          `After creating the variable we can give it a value. This is called initialization.`,
          `You can assign a value to a variable by using an equal sign (=).`,
        ],
        code: `let spell;\nspell = "Firebolt"\n//Now the spell variable has the value "Firebolt";`,
      },
      {
        page: 4,
        type: "QUESTION",
        question: `Which of the following correctly create a variable and assign it a value?`,
        answers: [
          `let action = "Attack";`,
          `let = "Guard";`,
          `variable = "Cast Spell";`,
          `let action = Use Item;`,
        ],
      },
      {
        page: 5,
        type: "INFO",
        title: "Initialize & Assign",
        text: [`You can also assign your variable a value during creation.`],
        code: `let game = "Spell Scripter";\n//Remember, we must enclose text values in quotes.`,
      },
      {
        page: 6,
        type: "INFO",
        title: "Output",
        text: [
          `After initializing a variable, we can output its value using console.log().`,
          `Use the Code Editor to modify the code, assign your name to the variable and output it.`,
        ],
        code: `let hero = "Siggurd";\nconsole.log(hero);`,
      },
      {
        page: 7,
        type: "QUESTION",
        question: `Which of the following output a variable?`,
        answers: [
          `console.log(damage);`,
          `console.log("damage");`,
          `console.log(let damage = 12);`,
          `console.log(9);`,
        ],
      },
      {
        page: 8,
        type: "INFO",
        title: "Changing Values",
        text: [
          `Variables can change their value during the program. That's why they are called variables.`,
          `What do you think the output of the code below will be?`,
        ],
        code: `let level = 7;\nlevel = 8\n\nconsole.log(level);`,
      },
      {
        page: 9,
        type: "QUESTION",
        question: `What is the output of this code?`,
        js: [
          `let health = 20;`,
          `health = 8;`,
          `health = 12`,
          `console.log(health)`,
        ],
        answers: [`12`, `20`, `8`, `40`],
      },
      {
        page: 10,
        type: "INFO",
        title: "Constants",
        text: [
          `There can be cases when you need to tell the program that the variable can't change its value throughout the program. Constants are variables declared using the const keyword.`,
          `Constants must have a value when declared and they cannot change their value.`,
        ],
        code: `const spell = "Firebolt";\nconsole.log(spell);\nspell = "Frostbite"; // this will result in an error`,
      },
      {
        page: 11,
        type: "INFO",
        title: "Rules of Naming Variables",
        text: [
          `variable names must begin with a letter, an underscore _ or a dollar sign $. They cannot contain spaces and can only contain letters, numbers, underscores, or dollar signs.`,
          `Variable names are case-sensitive, which means that, for example, "Name" and "name" variables would be different`,
        ],
        code: `let enemy* = "Skeleton" // this will result in an error`,
      },
      {
        page: 12,
        type: "QUESTION",
        question: `Which of the following variables are named correctly?`,
        answers: [
          `let _Evocation = "School";`,
          `let 1enemy = "Skeleton";`,
          `let new item = "Potion";`,
          `let +spell = "Bark Skin"`,
        ],
      },
      {
        page: 13,
        type: "SUMMARY",
        title: `Let's review what you've just learned:`,
        listItems: [
          `variables are containers for storing values`,
          `variables can be created with the let keyword and can change their values`,
          `constants are created with the const keyword. They are similar to variables, but can't change their values after initialization`,
        ],
      },
    ],
  },
  // =================================================
  //                     DATA TYPES
  // =================================================
  {
    name: "Data Types",
    lesson: [
      {
        page: 1,
        type: "INFO",
        title: "Strings",
        text: [
          `The term 'data type' refers to the types of values a program can work with. We've already gotten familiar with two types of data: text and number.`,
          `Text in quotes, like "Hello World" is called a string.`,
        ],
        code: `let msg = "I am a string";\nlet msg2 = 'I am a string as well';\nconsole.log(msg);\nconsole.log(msg2);`,
      },
      {
        page: 2,
        type: "QUESTION",
        question: `Which of the following is a string?`,
        answers: [`"Twenty Nine"`, `"Warrior`, `Dungeon`, `14`],
      },
      {
        page: 3,
        type: "INFO",
        title: "Strings",
        text: [
          `Everything in quotes is a string, even numbers.`,
          `In the code below, 15 is a string, not a number, which means that the program will treat it as a text consisting of two symbols: "1" and "5".`,
        ],
        code: `console.log("15");`,
      },
      {
        page: 4,
        type: "QUESTION",
        question: `What is the data type of the given value?`,
        js: [`let number = "3"`],
        answers: [`String`, `Number`],
      },
      {
        page: 5,
        type: "INFO",
        title: "Numbers",
        text: [`Numbers can be written with or without decimals.`],
        code: `let x = 5; //whole number\nlet y = 8.4; //decimal\nconsole.log(x);\nconsole.log(y);`,
      },
      {
        page: 6,
        type: "INFO",
        title: "Numbers",
        text: [
          `You can add, subtract and multiply numbers, producing another number as a result.`,
        ],
        code: `let x = 54;\nlet y = 6;\nconsole.log(x*y);\nconsole.log(x/y);`,
      },
      {
        page: 7,
        type: "QUESTION",
        question: `What is the output of the following code?`,
        js: [`let x = 4`, `let y = 8`, `console.log(x + y)`],
        answers: [`12`, `4`, `8`, `10`],
      },
      {
        page: 8,
        type: "INFO",
        title: "Booleans",
        text: [
          `Very often, in programming, you will need a data type that can only have one of two values. For example, a yes or no.`,
          `For this, JavaScript has the Boolean data type which can only take the values true or false.`,
        ],
        code: `let isEnemy = true;\nlet isHero = false;\nconsole.log(isEnemy);\nconsole.log(isHero);`,
      },
      {
        page: 9,
        type: "QUESTION",
        question: `Which of the following values is a Boolean?`,
        answers: [`false`, `4`, `spellbook`, `"true"`],
      },
      {
        page: 10,
        type: "SUMMARY",
        title: `Let's review what you've just learned:`,
        listItems: [
          `the term data type refers to the types of values a program can work with.`,
          `everything in quotes is a string, even numbers`,
          `both whole numbers and decimals in JavaScript belong to the one number data type`,
          `boolean data type is used to only have one of two values: true or false`,
        ],
      },
    ],
  },
  // =================================================
  //                     COMMENTS
  // =================================================
  {
    name: "Operators",
    lesson: [],
  },
  // =================================================
  //              ASSIGNMENT OPERATORS
  // =================================================
  {
    name: "Assignment Operators",
    lesson: [],
  },
  // =================================================
  //                 STRINGS
  // =================================================
  {
    name: "Strings",
    lesson: [],
  },
  // =================================================
  //              TEMPLATE LITERALS
  // =================================================
  {
    name: "Template Literals",
    lesson: [],
  },
  // =================================================
  //             STRING CONCANTENATION
  // =================================================
  {
    name: "String Concatenation",
    lesson: [],
  },
];
