//Starts game
let startBtn = document.querySelector(".startBtn");

//Displays remaining time and score
let timer = document.querySelector(".timer");

//Get question, options, and answer result
let quesionChoice = document.getElementById("question");
let quizContainer = document.querySelector(".quizContainer");
let answerContainer = document.querySelector(".answerContainer");
let viewHighscores = document.getElementById("viewHighscores");
let optionsContainer = document.querySelector(".optionsContainer");
let optionA = document.getElementById("optionA");
let optionB = document.getElementById("optionB");
let optionC = document.getElementById("optionC");
let optionD = document.getElementById("optionD");
let scoreBoard = document.querySelector(".scoreBoard");
let resultPanel = document.querySelector(".resultPanel");

//Store Score
let form = document.querySelector(".form");
let initialName = document.querySelector(".formInput");
let viewHighscore = document.querySelector(".viewHighscore");
let storeInfo = document.querySelector(".storeInfo");
let resetHighscore = document.querySelector(".resetHighscore");
let playAgain = document.querySelector(".playAgain");
let saveBtn = document.querySelector(".saveBtn");

//Questions
let questions = [
    {
        question: "Which option is a special value in JavaScript that refers to the absence of a value?",
        optionA: "String",
        optionB: "Operator",
        optionC: "Null",
        optionD: "Argument",
        answer: "C"
    },
    {
        question: "What function makes a pop-up box appear inside the browser window, but needs a string as an argument to tell the function what message to display?",
        optionA: "clickMe()",
        optionB: "hello()",
        optionC: "sort()",
        optionD: "alert()",
        answer: "D"
    },
    {
        question: "______ are containers that store values.",
        optionA: "Tags",
        optionB: "Elements",
        optionC: "Variables",
        optionD: "Properties",
        answer: "C"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        optionA: "getElementById()",
        optionB: "getHtmlById()",
        optionC: "Both Options Are True",
        optionD: "None of the above",
        answer: "A"
    },
    {
        question: "What does CSS stand for?",
        optionA: "Cascading Script Sheet",
        optionB: "Cascading Style Sheet",
        optionC: "Cascading Script Shell",
        optionD: "None of the above",
        answer: "B"
    },
];


console.log(questions);
console.log(questions[0].question);


for (var i = 0; i < questions.length; i++) {
    console.log("This is the result of i: " + questions[i].question);
}

let secondsLeft = 60;
let score = 0;
let questLeft = 0;
let lastQues = question.lenght - 1;
let currentQues = 0

optionA.addEventListener('click', function(event){
    console.log(event.target)
    currentQues++
    getOption()
})

//get question 
function getOption() {
    let q = questions[currentQues];

    quesionChoice.textContent = q.question;
    optionA.textContent = q.optionA;
    optionB.textContent = q.optionB;
    optionC.textContent = q.optionC;
    optionD.textContent = q.optionD;
}

//  //getOption function 
// function getOption() { 



//     let optionsContainer = document.querySelector(".optionsContainer");

//     optionsContainer.innerHTML += `<button class="option" id="optionA" onclick="checkAnswer('A')">${quest}

let timerIsRunning = false
//timer function 
function startTimer() {

    if (timerIsRunning) {
        return
    }
    secondsLeft = 5
    timerIsRunning = true

    let timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0 || questLeft === lastQues) {  //game over condition 
            clearInterval(timerInterval);  //stop the timer 

            timerIsRunning = false
            // if (questLeft === lastQues) { //if all questions are answered correctly 

            alert("game over");

        }
    }, 1000);
}

function startQuiz() {
    let questionNumber = Math.floor(Math.random() * questions.length);
    let currentQuestion = questions[questionNumber];

    quesionChoice.innerHTML = currentQuestion.question;
    

    getOption()
    startTimer();
}

saveBtn.addEventListener("click", (event) => {
    startBtn.textContent = `click count: ${event.detail}`
});


startBtn.addEventListener("click", startQuiz);






// // sets questions for the quiz everytime a question is answered
// function startQuiz(){
//     setTime();
//     setQuestion();
// }

// function setTime() {

//     let timerInterval = setInterval(function () {
//         timer.textContent = "Time: " + secondsLeft;
//         secondsLeft--;
//         if (secondsLeft === 0 || secondsLeft<0) {
//             clearInterval(timerInterval);
//             timer.textContent = "TIMES UP";
//             totalScores.innerHTML = "Your Score: " + score;
//         }
//     }, 1000)
// }
// //event listeners for button to start the quiz.
// startBtn.addEventListener("click", startBtn);