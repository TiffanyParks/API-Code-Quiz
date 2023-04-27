let start = document.querySelector("sa");
let duration = 5;
// var timeRemaining = duration;
let timerEl = document.getElementById("timer");

let viewHighscore = document.querySelector("viewHighscore");
let saveBtn = document.querySelector("save");
let resetHighscore = document.querySelector("resetHighscore");
let playAgain = document.querySelector("playAgain");
let score = document.querySelector("score");

// Get the question
let questionContainer = document.querySelector("optionsContainer");
let question = document.getElementById("question");

// Get question options
let op1 = document.getElementById('op1');
let op2 = document.getElementById('op2');
let op3 = document.getElementById('op3');
let op4 = document.getElementById('op4');



var questions = [
    {
        q: "Which option is a special value in JavaScript that refers to the absence of a value?",
        op1: "String",
        op2: "Operator",
        op3: "Null",
        op4: "Argument",
        a: "3"
    }, {
        q: "What function makes a pop-up box appear inside the browser window, but needs a string as an argument to tell the function what message to display?",
        op1: "clickMe()",
        op2: "hello()",
        op3: "sort()",
        op4: "alert()",
        a: "4"
    }, {
        q: "______ are containers that store values.",
        op1: "Tags",
        op2: "Elements",
        op3: "Variables",
        op4: "Properties",
        a: "3"
    }, {
        q: "Which of the following methods is used to access HTML elements using Javascript?",
        op1: "getElementById()",
        op2: "getHtmlById()",
        op3: "Both Options Are True",
        op4: "None of the above",
        correct: "1"
    }, {
        q: "What does CSS stand for?",
        op1: "Cascading Script Sheet",
        op2: "Cascading Style Sheet",
        op3: "Cascading Script Shell", op4: "None of the above",
        correct: "2"
    }
];

function startTimer() {
    var timerInterval = setInterval(function () {
        duration--;
        timerEl.innerText = duration;

        console.log(duration);

        if (duration === 0) {
            clearInterval(timerInterval);
            alert('Game Over!')
            console.log('Game Over!');
            gameOver();
        }
    }, 1000); // 1000 milliseconds = 1 second
}

// function to display questions
function displayQuestions() {
    let q = questions[runningQuestionIndex];

    question.innerHTML = "<p>" + q.q + "</p>";
    op1.innerHTML = q.op1;
    op2.innerHTML = q.op2;
    op3.innerHTML = q.op3;
    op4.innerHTML = q.op4;
}

// function to check the answer

function checkAnswer(answer) {
    if (questions[runningQuestionIndex].correct == answer) {
        score++;
        console.log('Correct!');
    } else {
        duration -= 10;
        console.log('Wrong!');
    }
    if (runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        displayQuestions();
    } else {
        gameOver();
    }
}

// function to end game
function gameOver() {
    // show score
    score.innerHTML = "Your score is " + score;
    // hide question
    questionContainer.style.display = "none";
    viewHighscore.style.display = "block";
    // reset timer
    duration = 0;
}

function startQuiz() {
    // Hide start page
    start.style.display = "none";
    // Start timer
    startTimer();
    // Show first question
    displayQuestions();
    questionContainer.style.display = "block";
}

start.addEventListener("click", startQuiz);
// event listener for question options

op1.addEventListener("click", function () {
    checkAnswer(1);
});
op2.addEventListener("click", function () {
    checkAnswer(2);
});
op3.addEventListener("click", function () {
    checkAnswer(3);
});
op4.addEventListener("click", function () {
    checkAnswer(4);
});

// event listener for save button
saveBtn.addEventListener("click", function () {
    // get value of input box
    let initials = document.querySelector("#initials").value;

    // make sure value wasn't empty
    if (initials !== "") {

        // get saved scores from localstorage, or if not any, set to empty array
        let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

        // format new score object for current user
        let newScore = {
            score: score,
            initials: initials
        };

               // save to localstorage
               highscores.push(newScore);
               window.localStorage.setItem("highscores", JSON.stringify(highscores));
       
               // redirect to next page
               window.location.href = "highscores.html";
           } else {
               alert("Initials cannot be blank");
           }
       });
// event listener for reset button
resetHighscore.addEventListener("click", function () {
    window.localStorage.removeItem("highscores");
    window.location.reload();
});

// event listener for play again button
playAgain.addEventListener("click", function () {
    window.location.href = "game.html";
});



// Getting the options



// Providing option text
// op1.innerText = questions[id].a[0].text;
// op2.innerText = questions[id].a[1].text;
// op3.innerText = questions[id].a[2].text;
// op4.innerText = questions[id].a[3].text;

// Providing the true or false value to the options
// op1.value = questions[id].a[0].isCorrect;
// op2.value = questions[id].a[1].isCorrect;
// op3.value = questions[id].a[2].isCorrect;
// op4.value = questions[id].a[3].isCorrect;

// var selected = "";

// Getting the result display section
// var result = document.getElementsByClassName("result");
// result[0].innerText = "";

// function startGame(questions) 


// question.innerText = questions[0].q.text;


// function iterate(id) {
// };



// function startGame() {
//     question = document.getElementById("question");
//     question.innerText = questions[0].q;
// }

// startGame();

// Show selection for op1
// op1.addEventListener("click", () => {
//     selected = op1.value;
// })

// Show selection for op2
// op2.addEventListener("click", () => {
//     selected = op2.value;
// })

// Show selection for op3
// op3.addEventListener("click", () => {
//     selected = op3.value;
// })

// Show selection for op4
// op4.addEventListener("click", () => {
//     selected = op4.value;
// })

// Grabbing the evaluate button
// const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
// evaluate[0].addEventListener("click", () => {
//     if (selected == "true") {
//         result[0].innerHTML = "True";
//         result[0].style.color = "green";
//     } else {
//         result[0].innerHTML = "False";
//         result[0].style.color = "red";
//     }
// });

// }

// if (start) {
//     iterate(0);
// }

// Next button and method
// const next = document.getElementsByClassName('next')[0];
// var id = 0;

// next.addEventListener("click", () => {
//     start = false;
//     if (id < 2) {
//         id++;
//         iterate(id);
//         console.log(id);
//     }

// })



var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var shuffledQustions =undefined
var currentQuestionIndex = undefined
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)


function startGame() {
    console.log('Started')
    // startButton.classList.add('hide')
    shuffledQustions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    // questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerHTML = question.question
}


function selectAnswer() {

}


//Questions for the quiz
let questions = [
    {
        question: "Which option is a special value in JavaScript that refers to the absence of a value?",
        answers: [
            { text: "Operator", correct: false },
            { text: "String", correct: false },
            { text: "Null", correct: true },
            { text: "Argument", correct: false },
        ]
    }]


    function getScore(){
        if (q.A === q.answer){
            console.log("correct");
        }
        else if (q.B === q.answer){
            console.log("correct");
        }
        else if (q.C === q.answer){
            console.log("correct");
        }
        else if (q.D === q.answer){
            console.log("correct");
        }
        else (secondsLeft--)
    };