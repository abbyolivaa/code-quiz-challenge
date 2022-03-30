
var startBtn = document.getElementById('startBtn');
var startPage = document.getElementById('startPage');
var quizBox = document.getElementById('quizBox');
var nextBtn = document.getElementById('nextBtn');
var questionEl = document.getElementById('question');
var answerButtonsEl = document.getElementById('answerButtons');
var choiceBtn = document.getElementById('choice');
var timerEl = document.getElementById('timer');
var highScorePage = document.getElementById ('highscoreBox');
var rightOrWrong = document.getElementById ('correct-or-wrong');
var highScoreLog = document.getElementById ('highscoreLog')
var submitBtn = document.getElementById('submitBtn');
var finalScore = document.querySelector('#finalScore') 


highScoreLog.classList.add('hide');
highScorePage.classList.add('hide');
quizBox.classList.add('hide');

let shuffledQues, currentQuesIndex

startBtn.addEventListener('click', startQuiz);

nextBtn.addEventListener('click', () => {
    rightOrWrong.textContent = "";
    currentQuesIndex++
    setNextQuestion();
});

var timeLeft = 59
function timer() {
    timeLeft;
        var timeInterval = setInterval(function() {
            if (timeLeft > 0) {
                timerEl.textContent = "Time left: " + timeLeft;
                timeLeft--;
            } else if (timeLeft <= 0) {
                timerEl.textContent = "Time's up!"
                quizBox.classList.add ('hide');
                highScorePage.classList.remove('hide');
            }else {
                timerEl.textContent = '';
                clearInterval(timeInterval);
                displayMessage ();
            }

        }, 1000);
};

var score;
function startQuiz() {
    console.log ('started');
    startPage.classList.add ('hide');
    shuffledQues = questions.sort(() => Math.random() - .5);
    currentQuesIndex = 0;
    score = 0
    quizBox.classList.remove('hide');
    timer();
    setNextQuestion();
}



function setNextQuestion(){
    resetState();
    console.log('next');
    showQuestion(shuffledQues[currentQuesIndex]);
}

function showQuestion(question){
    if (currentQuesIndex < 5) {
        questionEl.innerText = question.question
        question.answers.forEach(answer => {
            var button = document.createElement('button');
            button.innerText = answer.text
            button.classList.add('choice')
            if(answer.correct) {
                button.dataset.correct = answer.correct
            };
            button.addEventListener ('click', selectAnswer);
            answerButtonsEl.appendChild(button);
        }); 
    } else{
        quizBox.classList.add ('hide');
        highScorePage.classList.remove('hide');

    }
    
}

function resetState(){
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}


function selectAnswer(e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct 
    if (answer = correct) {
        rightOrWrong.textContent = "Correct!"
        score++
        console.log(score);
    }
    else{
        rightOrWrong.textContent = "Try Again!"
        timeLeft -=5;
    }
    finalScore.textContent = 'Your final score is ' + score
    var highScore = localStorage.getItem("highscore");

    if (highScore === null) {
        highScore = 0;
    }

    localStorage.setItem("highscore", score);
}

var submitInitials = function() {
    var initials = document.querySelector("#initials");
    initials= "";
    console.log(initials);
    return initials ; 
};

submitBtn.addEventListener('click', () => {
    var initials = document.querySelector("#initials");
    console.log(initials.value);
    localStorage.setItem("initials", initials.value);
    highScorePage.classList.add('hide');
})


//function inputInitial () {}

const questions= [
    {  
        question: 'What does HTML stand for?',
        answers: [
            {text: 'Hybrid Text Markup Language', correct: false},
            {text: 'Hyperlink Tech Markup Language', correct: false},
            {text: 'Hybrid Tech Markup Language', correct: false},
            {text: 'Hypertext Markup Language', correct: true}

        ]
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            {text: 'Categorized stylesheet', correct: false},
            {text: 'Cascading style slide', correct: false},
            {text: 'Chicken', correct: false},
            {text: 'Cascading stylesheet', correct: true}

        ]
    },
    {
        question: 'Which is NOT a flexbox function?',
        answers: [
            {text: 'flex-direction', correct: false},
            {text: 'flex-wrap', correct: false},
            {text: 'flex-grow', correct: false},
            {text: 'flex-up', correct: true}

        ]
    },
    {
        question: 'Which is NOT a third-party library?',
        answers: [
            {text: 'Bootstrap', correct: false},
            {text: 'jQueryUI', correct: false},
            {text: 'jQuery', correct: false},
            {text: 'HTML5 library', correct: true}

        ]
    },
    {
        question: 'Which library  will we use for CSS styles?',
        answers: [
            {text: 'CSS.com', correct: false},
            {text: 'HTML5 library', correct: false},
            {text: 'jQueryIU', correct: false},
            {text: 'Bootstrap', correct: true}

        ]
    }   
]



