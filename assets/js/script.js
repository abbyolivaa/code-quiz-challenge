var startBtn = document.getElementById('startBtn');
var startPage = document.getElementById('startPage');
var quizBox = document.getElementById('quizBox');
var nextBtn = document.getElementById('nextBtn');
var questionEl = document.getElementById('ques')
var answerButtonsEl = document.getElementById('answers')
var answerBtn = document.getElementById('choice')
var timerEl = document.getElementById('timer')


quizBox.classList.add('hide');

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', setNextQuestion);

let shuffledQues, currentQuesIndex

function timer() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {

      if (timeLeft > 0) {
         timerEl.textContent = "Time left: " + timeLeft
    
        timeLeft--;
      } else if (timeLeft <= 0) {
        timerEl.textContent = "Time's up!"
      }else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage ();
      }
    }, 1000);
  }

function startQuiz() {
    console.log ('started');
    startPage.classList.add ('hide');
    quizBox.classList.remove('hide');
    shuffledQues = questions.sort(() => Math.random() - .5);
    currentQuesIndex = 0
    timer();
    setNextQuestion();
}



function setNextQuestion(){
    resetState()
    console.log('next');
    showQuestion(shuffledQues[currentQuesIndex])
}

function showQuestion(question){
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        answerBtn.innerText = answer.text
        if(answer.correct) {
            answerBtn.dataset.correct = answer.correct
        }
        answerBtn.addEventListener ('click', selectAnswer)
        answerButtonsEl.appendChild(answerBtn)
    })
}

function resetState(){
    nextBtn.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function selectAnswer(e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(answerBtn =>{
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct){
       alert("Correct!")
    }
    else{
        alert("Wrong")
    }
}

function showHighScores (){

}

function inputInitial () {

}

const questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            {text: 'Hybrid Text Markup Language', correct: false},
            {text: 'Hyperlink Tech Markup Language', correct: false},
            {text: 'Hybrid Tech Markup Language', correct: false},
            {text: 'Hypertext Markup Language', correct: true},

        ]
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            {text: 'Categorized stylesheet', correct: false},
            {text: 'Cascading style slide', correct: false},
            {text: 'Chicken', correct: false},
            {text: 'Cascading stylesheet', correct: true},

        ]
    },
    {
        question: 'Which is NOT a flexbox function?',
        answers: [
            {text: 'flex-direction', correct: false},
            {text: 'flex-wrap', correct: false},
            {text: 'flex-grow', correct: false},
            {text: 'flex-up', correct: true},

        ]
    },
    {
        question: 'Which is NOT a third-party library?',
        answers: [
            {text: 'Bootstrap', correct: false},
            {text: 'jQueryUI', correct: false},
            {text: 'jQuery', correct: false},
            {text: 'HTML5 library', correct: true},

        ]
    },
    {
        question: 'Which library  will we use for CSS styles?',
        answers: [
            {text: 'CSS.com', correct: false},
            {text: 'HTML5 library', correct: false},
            {text: 'jQueryIU', correct: false},
            {text: 'Bootstrap', correct: true},

        ]
    },   
]



