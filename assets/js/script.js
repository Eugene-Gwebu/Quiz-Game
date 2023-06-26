const questions = [
    {
        question: "In Avengers: Endgame, what does Thanos say to Iron-Man before snapping his fingers?",
        answers: [
            { text: '"I am Legend"', correct: false },
            { text: '"I am Inevitable"', correct: true },
            { text: '"I am the captain now"', correct: false },
            { text: '"I am your father"', correct: false },
        ]
    },
    {
        question: "How many costumes has Spider-Man worn throughout the MCU so far?",
        answers: [
            { text: '6', correct: false },
            { text: '8', correct: false },
            { text: '7', correct: true },
            { text: '4', correct: false },
        ]
    },
    {
        question: "Which superhero goes by the name Scott Lang?",
        answers: [
            { text: 'Falcon', correct: false },
            { text: 'Vision', correct: false },
            { text: 'Hawkeye', correct: false },
            { text: 'Ant-man', correct: true },
        ]
    },
    {
        question: "Who is Captain America's Best Friend?",
        answers: [
            { text: 'Natasha Romanoff', correct: false },
            { text: 'Bucky Barnes', correct: true },
            { text: 'Sam Wilson', correct: false },
            { text: 'Tony Stark', correct: false },
        ]
    },
    {
        question: "Which MCU character doesn't have a superpower?",
        answers: [
            { text: 'The Winter Soldier', correct: false },
            { text: 'Falcon', correct: true },
            { text: 'Captain America', correct: false },
            { text: 'Thor', correct: false },
        ]
    },
    {
        question: "How many Infinity Stones are there?",
        answers: [
            { text: '6', correct: true },
            { text: '3', correct: false },
            { text: '7', correct: false },
            { text: '1', correct: false },
        ]
    },
    {
        question: "Which MCU character is a talking tree?",
        answers: [
            { text: 'Rocket', correct: false },
            { text: 'Loki', correct: false },
            { text: 'Groot', correct: true },
            { text: 'Heimdall', correct: false },
        ]
    },
    {
        question: "Who is the most powerful MCU character?",
        answers: [
            { text: 'Dr Strange', correct: false },
            { text: 'The Hulk', correct: false },
            { text: 'Scarlet Witch', correct: true },
            { text: 'Captain Marvel', correct: false },
        ]
    },
    {
        question: "Which MCU character is a talking racoon?",
        answers: [
            { text: 'Groot', correct: false },
            { text: 'Drax', correct: false },
            { text: 'Nebula', correct: false },
            { text: 'Rocket', correct: true },
        ]
    },
    {
        question: "In which movie does Black Panther make his first appearance?",
        answers: [
            { text: 'Black widow', correct: false },
            { text: 'Avengers: Infinity War', correct: false },
            { text: 'Captain America: Civil War', correct: true },
            { text: 'Black Panther', correct: false },
        ]
    },

];

let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let submitButton = document.getElementById("submit-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    submitButton.innerHTML = "submit";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        let button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("button-a");
        answerButtons.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    submitButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(a) {
    let selectedButton = a.target;
    let isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disable = true;
    });
    submitButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You got ${score} out of ${questions.length}!`;
    submitButton.innerHTML = "Play Again!";
    submitButton.style.display = "block";
}

function handleSubmitButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

submitButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleSubmitButton();
    } else {
        startQuiz();
    }

});

startQuiz();


