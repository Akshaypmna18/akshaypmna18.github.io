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
const nextBtn = $("#next");

let currentQuestionIndex = 0;
let score = 0;

function quiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;
  question.text(questionNum + "." + currentQuestion.question + " ?");

  currentQuestion.answers.forEach((answers) => {
    const button = $("<button>")
      .addClass("btn btn-outline-dark d-block my-1 w-100 fs-4 text-start")
      .text(answers.text);
    answersList.append(button);
    if (answers.correct) {
      button.attr("data-correct", answers.correct);
    }
    button.on("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.addClass("d-none");
  answersList.empty();
  nextBtn.text("NEXT");
  question.removeClass("text-center");
}

function selectAnswer() {
  $('.btn[data-correct="true"]')
    .removeClass("btn-outline-dark")
    .addClass("btn-success");
  const selectedBtn = $(this);
  const isCorrect = selectedBtn.data("correct") === true;
  $("#answers>.btn").not('[data-correct="true"]').prop("disabled", true);
  selectedBtn.removeClass("btn-outline-dark");
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
  nextBtn.text("Play Again");
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
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    quiz();
  }
});

quiz();
