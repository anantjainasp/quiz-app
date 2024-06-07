let quizData = [
    {
        question: "What is the capital of Italy?",
        options: ["Rome", "Berlin", "Madrid", "Paris"],
        answer: "Rome",
    },
    {
        question: "Which planet is known as Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
    },
    {
        question: "Which is the largest mammal in the world?",
        options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale",
    },
    {
        question: "In which year Christopher Columbus discovered America?",
        options: ["1506", "1451", "1492", "1495"],
        answer: "1492",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Willam Shakespeare", "Jane Austin", "Mark Twain"],
        answer: "Willam Shakespeare",
    },
    {
        question: "What is the largest ocean on Earth'?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean",
    },
];

let currentQuestionIndex = 0;
let userAnswer=[];

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const scoreContainer = document.getElementById("score-container");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");

nextButton.addEventListener("click",loadNextQuestion);

displayQuestion();

function loadNextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}


function selectAnswer(answer) {
    const optionButtons = document.querySelectorAll(".quiz-option");
    optionButtons.forEach((button) => button.classList.remove("selected"))
    const selectedOption = optionsContainer.querySelector(
        `.quiz-option[data-option="${answer}"]`
    );
    selectedOption.classList.add("selected");
    userAnswer[currentQuestionIndex]=answer;
}

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    const optionLetters = ["A", "B", "C", "D"];

    currentQuestion.options.forEach((option, index) => {
        const optionContainer = document.createElement("div");
        optionContainer.classList.add("quiz-card");

        const optionLabel = document.createElement("span");
        optionLabel.classList.add("option-label");
        optionLabel.textContent = optionLetters[index];
        optionContainer.appendChild(optionLabel);

        const optionButton = document.createElement("button");
        optionButton.classList.add("quiz-option");
        optionButton.textContent = option;

        optionButton.setAttribute("data-option", option);
        optionContainer.addEventListener("click", () => selectAnswer(option));

        optionContainer.appendChild(optionButton);

        optionsContainer.appendChild(optionContainer);
    });
}
function evaluateUserAnswer() {
    let score=0;
    quizData.forEach((question,index)=>{
        if(userAnswer[index]=== question.answer){
            score+=10;
        }
    });
    return score;
}

function showQuizResults() {
    const userScore=evaluateUserAnswer();
    scoreContainer.textContent=`Your Score: ${userScore} out of ${quizData.length*10}`
}
