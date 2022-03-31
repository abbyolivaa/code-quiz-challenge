
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
var highscoreLogPage = document.getElementById ('highscoreLog')
var submitBtn = document.getElementById('submitBtn');
var finalScore = document.querySelector('#finalScore') 


highscoreLogPage.classList.add('hide');
highScorePage.classList.add('hide');
quizBox.classList.add('hide');

let shuffledQues, currentQuesIndex

var highscoreBtn = document.querySelector("#highscoreBtn");

highscoreBtn.addEventListener('click', () => {
    startPage.classList.add('hide');
    highScorePage.classList.add('hide');
    quizBox.classList.add('hide');  
    highscoreLogPage.classList.remove('hide');    
})

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
                highscoreLog.classList.add ('hide');
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
        timeLeft -=10;
    }
    finalScore.textContent = 'Your final score is ' + score
    var highScore = localStorage.getItem("highscore");

    if (highScore === null) {
        highScore = 0;
    }

    localStorage.setItem("highscore", score);
    return highScore;
}

submitBtn.addEventListener('click', () => {
    var initials = document.querySelector("#initials");
    console.log(initials.value);
    var initialsValue = initials.value
    localStorage.setItem("initials", initialsValue);
    highScorePage.classList.add('hide');
    highscoreLogPage.classList.remove ('hide');
})

var arrayOfKeys = Object.keys(localStorage);

var arrayOfValues = [score];
for(var i in localStorage){
    if(localStorage.hasOwnProperty(i)){
        arrayOfValues.push(localStorage[i]);
    }
}

var playerScore = [localStorage.getItem("initials"),localStorage.getItem("highscore")]
var highscoreLog = document.querySelector("#prevHighscores")
highscoreLog.textContent = playerScore


var goBackBtn = document.querySelector("#return");
var clearBtn = document.querySelector("#clear");

goBackBtn.addEventListener('click' , () => {
    highscoreLogPage.classList.add('hide');
    highScorePage.classList.add('hide');
    startPage.classList.remove('hide');
    startBtn.classList.remove('hide');
    startQuiz();
})

clearBtn.addEventListener('click', () => {
    localStorage.clear();
    highscoreLog.textContent = "";
})


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



