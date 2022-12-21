import { questions, results } from "./data.js";

// QUESTION PAGE
const progressValue = document.querySelector("progress");
const numberEl = document.querySelector(".question-number");
const questionEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");

let currentNumber = 0;
let mbti = "";

function renderQuestion() {
  console.log(questions.length);
  console.log(currentNumber);

  let value = (100 / questions.length) * (currentNumber + 1);
  const question = questions[currentNumber];

  progressValue.value = value;
  numberEl.innerHTML = question.number;
  questionEl.innerHTML = question.question;
  choice1El.innerHTML = question.choices[0].text;
  choice2El.innerHTML = question.choices[1].text;
}

function nextQuestions(choiceNumber) {
  if (currentNumber === questions.length - 1) {
    showResult();
    return;
  }
  const question = questions[currentNumber];
  mbti = mbti + question.choices[choiceNumber].value;
  currentNumber = currentNumber + 1;

  renderQuestion();
}

function showResult() {
  location.href = "/results.html?mbti=" + mbti; // 쿼리스트링 (기존 url에 값 전달)
}

choice1El.addEventListener("click", function () {
  nextQuestions(0);
});

choice2El.addEventListener("click", function () {
  nextQuestions(1);
});

renderQuestion();
