const quizData = [
    {
        question: "Who was the first President of India ?",
        a: "Dr Rajendra Prasad",
        b: "Dr. APJ Abdul Kalam",
        c: "Neelam Sanjeev Reddy",
        d: "Ram Nath Kovind",
        correct: "a"   
    }, {
        question: "What is the most used programming language in 2020?",
        a: "Java",
        b: "Python",
        c: "C++",
        d: "Javascript",
        correct: "d"
    }, {
        question: "Who is the President of US ?",
        a: "Barack Obama",
        b: "Donald Trump",
        c: "Joe Biden",
        d: "George Bush",
        correct: "c"
    }, {
        question: "What does JSON stand for ?",
        a: "Javascript Object Notation",
        b: "Javascript Outer Note",
        c: "Javascript Object Notion",
        d: "Javascript Object Node",
        correct: "a"
    }, {
        question: "Which of the following is a NoSQL database ?",
        a: "MongoDB",
        b: "PostGreSQL",
        c: "Oracle",
        d: "Cloud SQL",
        correct: "a"
    }
]
const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz')
let answer = undefined;

let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz(){
    deSelectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
        return answer;
}

function deSelectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
           
            score++;
        }
    }
    currentQuiz++;
    
    
    if(answer){
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            //show final score
            quiz.innerHTML = '<h2>You answered ' + score + "/" + quizData.length + ' correctly</h2>';
        }
        
    }else{
        document.getElementById("error").style.visibility = "visible";
    }
    
})