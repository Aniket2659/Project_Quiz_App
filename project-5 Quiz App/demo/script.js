const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextButton");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

// 
const questions = [
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is the largest mammal on Earth?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Hippopotamus", correct: false }
        ]
    },
    {
        question: "Which programming language is often used for web development?",
        answers: [
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Java", correct: false },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Gold", correct: false },
            { text: "Silver", correct: false },
            { text: "Iron", correct: false }
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "1912", correct: true },
            { text: "1920", correct: false },
            { text: "1905", correct: false },
            { text: "1935", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Father of Modern Physics'?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Niels Bohr", correct: false }
        ]
    }
];

// You can use this 'questions' array in your quiz app to display questions and answer options.











const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "Madrid", correct: false }
        ]
    }
    // Add more questions as needed
];

function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = "";

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    const selectedBtn = event.target;
    const isCorrect = answer.correct;

    if (isCorrect) {
        selectedBtn.classList.add("bg-green-500");
        score++;
    } else {
        selectedBtn.classList.add("bg-red-500");
        // Highlight the correct answer if the selected one is wrong
        answerButtonsElement.querySelector('[data-correct="true"]').classList.add("bg-green-500");
    }

    // Disable all buttons after an answer is selected
    answerButtonsElement.querySelectorAll(".answer-btn").forEach(button => {
        button.disabled = true;
    });

    // Display the "Next" button
    nextButton.style.display = "block";

    // Update the score display
    scoreElement.innerText = "Score: " + score;
}

function nextQuestion() {
    // Reset styles for the next question
    answerButtonsElement.querySelectorAll(".answer-btn").forEach(button => {
        button.classList.remove("bg-green-500", "bg-red-500");
        button.disabled = false;
    });

    // Hide the "Next" button
    nextButton.style.display = "none";

    // Move to the next question
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = "<h2>Quiz Completed</h2>";
    quizContainer.innerHTML += "<p>Your final score is: " + score + " out of " + questions.length + "</p>";
}

// Start the quiz
startQuiz();
