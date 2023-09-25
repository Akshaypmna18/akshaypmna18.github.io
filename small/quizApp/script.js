const questions = [
  {
    question: "Which is the largest animal in the world",
    answers: [
      { text: "Shark", correct: false },
      { text: "Elephant", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the largest continent in the world",
    answers: [
      { text: "Asia", correct: true },
      { text: "Africa", correct: false },
      { text: "Europe", correct: false },
      { text: "Australia", correct: false },
    ],
  },
  {
    question: "Which is the smallest bird in the world",
    answers: [
      { text: "Sparrow", correct: false },
      { text: "Ostrich", correct: false },
      { text: "Humming bird", correct: true },
      { text: "Parrot", correct: false },
    ],
  },
  {
    question: "Which team won the world cup in 2022",
    answers: [
      { text: "Brazil", correct: false },
      { text: "Portugal", correct: false },
      { text: "Germany", correct: false },
      { text: "Argentina", correct: true },
    ],
  },
  {
    question: "Which country is going to host the Cricket World Cup in 2023",
    answers: [
      { text: "Australia", correct: false },
      { text: "India", correct: true },
      { text: "South Africa", correct: false },
      { text: "England", correct: false },
    ],
  },
];

const question = $("#question");
const answersList = $("#answers");
const nextBtn = $("#next-btn");
const startBtn = $("#start-btn");
const continueBtn = $("#continue-btn");
const exitBtn = $("#exit-btn");
const exitQuizBtn = $("#exit-quiz-btn");
const container = $("#container");
const startBtnContainer = $("#start-btn-container");
const rulesContainer = $("#rules-container");
const heading = $("#heading");
const timeLeft = $("#time-left");
const time = $("#time-left > span");
const btnWrapper = $("#btn-wrapper");

function startQuizPage() {
  startBtnContainer.removeClass("d-none");
  rulesContainer.addClass("d-none");
}

exitQuizBtn.on("click", function () {
  startQuizPage();
  heading.addClass("d-sm-none");
  container.addClass("d-none");
});

startBtn.on("click", function () {
  startBtnContainer.addClass("d-none");
  rulesContainer.removeClass("d-none");
});

continueBtn.on("click", function () {
  rulesContainer.addClass("d-none");
  container.removeClass("d-none");
  heading.addClass("d-sm-block").removeClass("d-sm-none");
  quiz();
});

exitBtn.on("click", function () {
  startQuizPage();
});

let currentQuestionIndex = 0;
let score = 0;

function quiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

let countDown = 10;
let timerInterval;

function startTimer() {
  time.text(countDown + "s");
  countDown--;
  if (countDown < 0) {
    clearInterval(timerInterval);
    countDown = 10;
    handleNextBtn();
  }
}

function timer() {
  timerInterval = setInterval(startTimer, 1000);
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;
  question.text(questionNum + "." + currentQuestion.question + " ?");
  timer();

  currentQuestion.answers.forEach((answers) => {
    const button = $("<button>")
      .addClass("btn btn-outline-light d-block my-1 w-100 fs-4 text-start")
      .text(answers.text);
    answersList.append(button);
    if (answers.correct) {
      button.attr("data-correct", answers.correct);
    }
    button.on("click", selectAnswer);
  });
}

function resetState() {
  countDown = 10;
  nextBtn.addClass("d-none");
  answersList.empty();
  exitQuizBtn.addClass("d-none");
  nextBtn.text("NEXT").addClass("btn-light").removeClass("btn-success");
  question.removeClass("text-center");
  timeLeft.removeClass("d-none");
  btnWrapper
    .addClass("justify-content-between")
    .removeClass("justify-content-center");
}

function selectAnswer() {
  $('.btn[data-correct="true"]')
    .removeClass("btn-outline-light")
    .addClass("btn-success");
  const selectedBtn = $(this);
  const isCorrect = selectedBtn.data("correct") === true;
  $("#answers>.btn").not('[data-correct="true"]').prop("disabled", true);
  selectedBtn.removeClass("btn-outline-light");
  if (isCorrect) {
    selectedBtn.addClass("btn-success");
    score++;
  } else {
    selectedBtn.addClass("btn-danger");
  }
  nextBtn.removeClass("d-none");
}

function showScore() {
  resetState();
  question.text("Your scored " + score + " Out of " + questions.length + " !");
  question.addClass("text-center");
  nextBtn.removeClass("d-none");
  nextBtn.removeClass("btn-light").addClass("btn-success");
  nextBtn.text("Play Again");
  exitQuizBtn.removeClass("d-none");
  timeLeft.addClass("d-none");
  btnWrapper
    .removeClass("justify-content-between")
    .addClass("justify-content-center");
}

function handleNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.on("click", function () {
  clearInterval(timerInterval);
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    quiz();
  }
});
