# Node.js Quiz Application


## Description

This is a command-line quiz application built with Node.js. The quiz tests basic web development knowledge with multiple-choice questions. It leverages the Node.js event loop, asynchronous operations, and timers to handle timed questions and dynamic question progression.


## Features

* Timed Questions: Each question has a 15-second time limit.
* Total Quiz Timer: The entire quiz must be completed in 90 seconds.
* Asynchronous Question Handling: User input is handled asynchronously without blocking the event loop.
* Dynamic Question Progression: Moves to the next question after the current one is answered or time runs out.
* Quiz Termination: The quiz ends when all questions are answered or time runs out.
* Error Handling: Handles invalid inputs and displays appropriate messages.


## Prerequisites

* Node.js
* npm (installed with Node.js)


## Installation

1. Clone the repository:

```
    git clone https://github.com/ComfortN/quiz-app.git
```

2. Navigate to the project directory:

```
    cd quiz-app
```

3. Install dependencies:

```
    npm install
```

4. Start the quiz:

```
    node quiz.js
```
This will start the quiz in the terminal.

5. Answering Questions:

The quiz will ask you multiple-choice questions, and you can answer by entering the corresponding number (1-4).
You have 15 seconds to answer each question. If the time runs out, the quiz will automatically move to the next question.
You must complete the entire quiz within 90 seconds. When the time runs out, the quiz will stop, and your score will be displayed.


## Technologies Used

* Node.js: To handle asynchronous operations, timers, and the event loop.
* readline: For handling user input in the command-line environment.