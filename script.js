//Starts game
let startBtn = document.querySelector(".startBtn");
let nextBtn = document.getElementById('nextBtn')

//Displays remaining time and score
let timer = document.querySelector(".timer");

//Get question, options, and answer result
let questionChoice = document.getElementById("question");
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
let option = document.querySelector('.option')
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
        A: "Null",
        B: "Operator",
        C:  "String",
        D: "Argument",
        answer: "String"
    },
    {
        question: "What function makes a pop-up box appear inside the browser window, but needs a string as an argument to tell the function what message to display?",
        A: "clickMe()",
        B: "hello()",
        C: "alert()",
        D: "sort()",
        answer: "alert()"
    },
    {
        question: "______ are containers that store values.",
        A: "Tags",
        B: "Elements",
        C: "Variables",
        D: "Properties",
        answer:"Variables"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        A: "Both Options Are True",
        B: "getHtmlById()",
        C:"getElementById()" ,
        D: "None of the above", 
        answer: "getElementById()"
    },
    {
        question: "What does CSS stand for?",
        A: "Cascading Script Sheet",
        B: "Cascading Script Shell",
        C: "Cascading Style Sheet",
        D: "None of the above",
        answer: "Cascading Style Sheet"
    },
];


console.log(questions);
console.log(questions[0].question);


for (var i = 0; i < questions.length; i++) {
    console.log("This is the result of i: " + questions[i].question);
}
var newScore = 0
let secondsLeft = 60;
let score = 0;
let questLeft = 0;
let lastQues = question.lenght - 1;
let currentQues = 0

console.log(questions);

function setNextQuestion() {
    
    let q = questions[currentQues];
    questionChoice.textContent = q.question;
    optionA.textContent = q.A;
    optionB.textContent = q.B;
    optionC.textContent = q.C;
    optionD.textContent = q.D;

    console.log(q.answer);

    postScore()
}


function postScore(){


    for (i =0; i < questions.length; i++) {

    if ("String") {
        newScore++
       
    } 
    else if ("alert()") {
        newScore++
    }
    else if ("Variables") {
        newScore++
    }
    else if ("getElementById()") {
        newScore++
    }
    else if ("Cascading Style Sheet") {
        newScore++
    }else {
        secondsLeft - 5

    }
    scoreBoard.innerHTML = newScore
}
}
 // Set up local storage
let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// Store score in local storage
function storeHighscore() {
    localStorage.setItem("highscores", JSON.stringify(highscores));
}


let timerIsRunning = false
//timer function 
function startTimer() {

    if (timerIsRunning) {
        return
    }
    secondsLeft = 20
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

    questionChoice.innerHTML = currentQuestion.question;

    var newScore = 0

    for (i =0; i < questions.length; i++) {

    if ("String") {
        newScore++
       
    } 
    else if ("alert()") {
        newScore++
    }
    else if ("Variables") {
        newScore++
    }
    else if ("getElementById()") {
        newScore++
    }
    else if ("Cascading Style Sheet") {
        newScore++
    }else {
        secondsLeft - 5

    }

console.log(questionChoice);

    startTimer();
    setNextQuestion()
}}
    

startBtn.addEventListener("click", startQuiz);
// startBtn.addEventListener("click", setNextQuestion);

nextBtn.addEventListener('click', function (event) {
    console.log(event.target)
    currentQues++
    setNextQuestion()
})





//--------------------------------------------------------------------------//


// Workspace


// startBtn.addEventListener("click", startQuiz);

// updateScore()

// }


// optionC.addEventListener('click', function (event) {
//     var score = 0
//     if (optionC)
//     console.log("true");
//     score++


    
// })

//get question 


//     function optionClick(){

//     //     let q = questions[currentQues];
//     //   console.log(option.textContent)
    
    
//     if (optionC) {
//         console.log("This is the right answer")
//     } else {
//         console.log("This is the wrong answer") 
//         secondsLeft -= 10
    
//         }}}

// function localStorage() {

//     initialName =localStorage.getItem("value")
//     input.addEventListener("keyup", display);
//      localStorage.setItem('value', input.value);
//      initialName.innerHTML = localStorage.getItem('value)')
// }
// }

//     function optionClick(){

//     //     let q = questions[currentQues];
//     //   console.log(option.textContent)
    
    
//     if (optionC) {
//         console.log("This is the right answer")
//     } else {
//         console.log("This is the wrong answer") 
//         secondsLeft -= 10
    
//         }}}

// function localStorage() {

//     initialName =localStorage.getItem("value")
//     input.addEventListener("keyup", display);
//      localStorage.setItem('value', input.value);
//      initialName.innerHTML = localStorage.getItem('value)')
// }

// saveBtn.addEventListener("click", (event) => {
//     startBtn.textContent = `click count: ${event.detail}`
// });

//  //getOption function 
// function getOption() { 



//     let optionsContainer = document.querySelector(".optionsContainer");

//     optionsContainer.innerHTML += `<button class="option" id="optionA" onclick="checkAnswer('A')">${quest}

// DIV  WORK SPACE //
// let arrayValues = [C, D, C, A, B]
// let A = optionA
// let B = optionB
// let C = optionC
// let D = optionD

// if (arrayVaule.indexOf(clicked)) {
    
// } else {
 

// var rightAnswer = clickedBtnoptionD;
// wrongAnswer = 5; 
// if (rightAnswer) {    
// console.log("This is the right answer")
// } else {
// console.log("This is the wrong answer") 
// secondsLeft - wrongAnswer 
//         return
// }
// }

//     let q = questions[currentQues];
//   console.log(option.textContent)


// if (option.textContent === q.A) {
//     console.log("This is the right answer")
//     secondsLeft += 15
// } else {
//     console.log("This is the wrong answer") 
//     secondsLeft -= 15
// }



// optionA.addEventListener('mouseup', getScore);
// optionB.addEventListener('mouseup', getScore);
// optionC.addEventListener('mouseup', getScore);
// optionD.addEventListener('mouseup', getScore);


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
// console.log(questions[0].answer)
// console.log(questions[1].answer)
// console.log(questions[2].answer)
// console.log(questions[3].answer)
//     // let q. = questions[currentQues];

//     if (q.A === question){
//         console.log("correct");
//     }
//     else if (q.B === q.answer){
//         console.log("correct");
//     }
//     else if (q.C === q.answer){
//         console.log("correct");
//     }
//     else if (q.D === q.answer){
//         console.log("correct");
//     }
// / optionB.addEventListener('click', function (event) {
//     console.log(event.target)
//     currentQues++
//     setNextQuestion()
// })
// optionC.addEventListener('click', function (event) {
//     console.log(event.target)
//     currentQues++
//     setNextQuestion()
// })
// optionD.addEventListener('click', function (event) {
//     console.log(event.target)
//     currentQues++
//     setNextQuestion()
// })
