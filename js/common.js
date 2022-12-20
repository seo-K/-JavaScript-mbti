import { questions } from "./data.js";
const progressValue = document.querySelector("progress");
const numberEl = document.querySelector(".question-number");
const questionEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");

let currentNumber = 0;
let mbti = "";

function renderQuestion() {
  let value = (100 / questions.length) * (currentNumber + 1);
  const question = questions[currentNumber];

  progressValue.value = value;

  numberEl.innerHTML = question.number;
  questionEl.innerHTML = question.question;
  choice1El.innerHTML = question.choices[0].text;
  choice2El.innerHTML = question.choices[1].text;
}

function nextQuestions(choiceNumber) {
  const question = questions[currentNumber];
  mbti = mbti + question.choices[choiceNumber].value;
  currentNumber = currentNumber + choiceNumber;

  renderQuestion();
}

choice1El.addEventListener("click", function () {
  nextQuestions(0);
  console.log("눌림");
});

choice2El.addEventListener("click", function () {
  nextQuestions(1);
  console.log("눌림");
});
renderQuestion();
