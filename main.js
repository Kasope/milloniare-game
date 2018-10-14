
var currentQuestion = 0;
var amt = 0;
var totQuestions = questions.length;

 
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
    
};


function loadNextQuestion(){
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        document.getElementById('amt').innerHTML = "Your Balance is : &#8358;0";      
    }
   var answers = selectedOption.value;
    if(questions[currentQuestion].answer == answers){
        amt +=100000;
        document.getElementById('amt').innerHTML = "Your Balance is : &#8358;" + amt ; 

    }
    if(questions[currentQuestion].answer !== answers){
        document.getElementById('quizContainer').innerHTML = "<h1>GAME OVER</h1>";
        return; 
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totQuestions){
        container.style.display = "none";
        resultCont.style.display = "";
        resultCont.textContent = 'Game Over: You are now a Milloniare';
        return;
    }
    loadQuestion(currentQuestion);

}
loadQuestion(currentQuestion);


function action(){
    var one = document.getElementById('opt1');
    var three = document.getElementById('opt3');
    document.getElementById("fifty").style.visibility = "hidden";
    one.style.visibility = "hidden";
    three.style.visibility = "hidden";
};

function act(){
    document.getElementById('quizContainer').innerHTML = "<h1>Since You decide to Walk away: GAME OVER!</h1>";
    return; 
}