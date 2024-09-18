const readline = require('readline');

// Provided questions array
const questions = [
  {
    question: "What does HTML stand for?",
    choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What is the purpose of CSS?",
    choices: ["To add functionality to a website", "To structure content", "To define the style and layout of a web page", "To interact with databases"],
    answer: "To define the style and layout of a web page"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    choices: ["Angular", "Django", "Rails", "Laravel"],
    answer: "Angular"
  },
  {
    question: "What does HTTP stand for?",
    choices: ["Hyper Text Transfer Protocol", "Hyper Tool Transfer Protocol", "Hyperlink Transfer Text Protocol", "Hyper Text Transit Protocol"],
    answer: "Hyper Text Transfer Protocol"
  },
  {
    question: "Which of the following is used to make a website responsive?",
    choices: ["JavaScript", "HTML", "CSS Media Queries", "PHP"],
    answer: "CSS Media Queries"
  },
  {
    question: "Which HTML element is used to define the title of a document?",
    choices: ["<meta>", "<header>", "<title>", "<head>"],
    answer: "<title>"
  },
  {
    question: "Which JavaScript method can be used to select an element by its ID?",
    choices: ["getElementById()", "getElementsByClassName()", "querySelector()", "getElementsByTagName()"],
    answer: "getElementById()"
  },
  {
    question: "What is the correct syntax for linking an external stylesheet?",
    choices: ["<link rel='stylesheet' href='style.css'>", "<stylesheet>style.css</stylesheet>", "<style src='style.css'>", "<link src='style.css'>"],
    answer: "<link rel='stylesheet' href='style.css'>"
  },
  {
    question: "Which protocol is used for secure communication over the internet?",
    choices: ["HTTP", "FTP", "HTTPS", "TCP"],
    answer: "HTTPS"
  },
  {
    question: "What does DOM stand for?",
    choices: ["Document Object Model", "Data Object Management", "Document Order Model", "Display Object Model"],
    answer: "Document Object Model"
  }
];


const questionTimeLimit = 15000; // 10 seconds per question
const totalQuizTime = 90000; // 60 seconds total quiz duration

let currentQuestionIndex = 0;
let score = 0;
let totalQuizTimer, questionTimer;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Start the quiz
function startQuiz() {
  console.log("Quiz started! You have 90 seconds to complete all questions.");

  // Start the total quiz timer
  totalQuizTimer = setTimeout(() => {
    console.log("Time's up!");
    endQuiz();
  }, totalQuizTime);

  // Ask the first question
  askNextQuestion();
}

// Function to ask the next question
function askNextQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
    return;
  }

  const question = questions[currentQuestionIndex];
  console.log(`\nQuestion ${currentQuestionIndex + 1}: ${question.question}`);
  question.choices.forEach((choice, index) => console.log(`${index + 1}. ${choice}`));

  // Start the timer for the current question
  let timeLeft = questionTimeLimit / 1000;
  console.log(`You have ${timeLeft} seconds to answer...`);

  questionTimer = setInterval(() => {
    timeLeft -= 1;
    if (timeLeft === 0) {
      clearInterval(questionTimer);
      console.log("Time's up for this question!");
      moveToNextQuestion();
    }
  }, 1000);

  // Get the user's answer asynchronously
  rl.question("\nYour answer (enter number 1-4): ", answer => {
    clearInterval(questionTimer); // Clear the question timer
    handleAnswer(answer);
  });
}

// Handle the user's answer
function handleAnswer(answer) {
  const question = questions[currentQuestionIndex];
  const correctAnswer = question.answer;
  const chosenAnswer = question.choices[parseInt(answer) - 1];

  const answerNumber = parseInt(answer);

  if (isNaN(answerNumber) || answerNumber < 1 || answerNumber > 4) {
    console.log("Invalid input! Please enter a number between 1 and 4.");
    askNextQuestion();
    return;
  }

  if (chosenAnswer === correctAnswer) {
    console.log("Correct!");
    score++;
  } else {
    console.log(`Wrong! The correct answer was: ${correctAnswer}`);
  }

  moveToNextQuestion();
}

// Move to the next question
function moveToNextQuestion() {
  currentQuestionIndex++;
  askNextQuestion();
}

// End the quiz and show the final score
function endQuiz() {
  clearTimeout(totalQuizTimer);
  rl.close();
  console.log(`\nQuiz Over! Your final score is ${score}/${questions.length}.`);
}


startQuiz();
