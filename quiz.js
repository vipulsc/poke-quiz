let quesspace = document.querySelector(".question");
let ansspace = document.querySelector(".answer");
let button = document.querySelector(".butt");
let start = document.querySelector(".start");
let result = document.querySelector(".result");
let timeLefts = document.querySelector(".timeLeft");
let displayScore = document.querySelector(".displayScore");
let startAgain = document.querySelector(".startAgain");

let ques = [];
start.addEventListener("click", () => {
  console.log("working1");
  addQuiz();
  startQuiz();
});
function addQuiz() {
  ques = [
    {
      question: "Which Pokémon is known as the 'Electric Mouse'?",
      a: "Pikachu",
      b: "Raichu",
      c: "Jigglypuff",
      d: "Bulbasaur",
      correct: "a",
    },
    {
      question: "What type is Charizard?",
      a: "Fire/Flying",
      b: "Dragon/Fire",
      c: "Flying/Dragon",
      d: "Fire/Normal",
      correct: "a",
    },
    {
      question: "Which Pokémon says its own name the most in the anime?",
      a: "Meowth",
      b: "Pikachu",
      c: "Jigglypuff",
      d: "Psyduck",
      correct: "b",
    },
    {
      question: "Which Pokémon is the heaviest?",
      a: "Snorlax",
      b: "Steelix",
      c: "Groudon",
      d: "Celesteela",
      correct: "d",
    },
    {
      question: "Who is the first Pokémon in the Pokédex?",
      a: "Bulbasaur",
      b: "Charmander",
      c: "Squirtle",
      d: "Pikachu",
      correct: "a",
    },
    {
      question: "Which Pokémon is known for always being confused?",
      a: "Slowpoke",
      b: "Psyduck",
      c: "Wobbuffet",
      d: "Magikarp",
      correct: "b",
    },
    {
      question: "Which Pokémon can only say 'Magikarp' and 'Splash'?",
      a: "Magikarp",
      b: "Ditto",
      c: "Gyarados",
      d: "Jynx",
      correct: "a",
    },
    {
      question: "Which Pokémon loves to sing but puts people to sleep?",
      a: "Jigglypuff",
      b: "Clefairy",
      c: "Wigglytuff",
      d: "Togepi",
      correct: "a",
    },
    {
      question: "What does Ash's Pikachu hate the most?",
      a: "Ketchup",
      b: "Poké Balls",
      c: "Charizard",
      d: "Team Rocket",
      correct: "b",
    },
    {
      question: "Which Pokémon is basically a Pokéball with eyes?",
      a: "Voltorb",
      b: "Electrode",
      c: "Foongus",
      d: "All of the above",
      correct: "d",
    },
  ];
}

let currentIndex = 0;
let score = 0;
let timer = 0;
let timeLeft;
button.style.display = "none";

function startQuiz() {
  start.style.display = "none";
  button.style.display = "";
  currentIndex = 0;
  score = 0;
  render();
}

function render() {
  if (currentIndex >= ques.length) {
    endQuiz();
    return;
  }

  quesspace.innerHTML = "";
  ansspace.innerHTML = "";
  timeLeft = 20;

  const curr = ques[currentIndex];
  quesspace.innerHTML = `<p>${curr.question}</p>`;

  const options = ["a", "b", "c", "d"];
  for (let j = 0; j < 4; j++) {
    const label = document.createElement("label");
    const radio = document.createElement("input");

    radio.type = "radio";
    radio.name = `options${currentIndex}`;

    radio.value = options[j];

    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + curr[options[j]]));
    ansspace.appendChild(label);
    ansspace.appendChild(document.createElement("br"));
  }

  startTimer();
}

function startTimer() {
  clearInterval(timer);

  timeLefts.innerHTML = `${timeLeft}`;

  timer = setInterval(() => {
    timeLeft--;
    timeLefts.innerHTML = `${timeLeft}`;

    if (timeLeft == 0) {
      nextQuestion();
    }
  }, 1000);
}
button.addEventListener("click", () => {
  nextQuestion();
});

function nextQuestion() {
  clearInterval(timer);

  const selectedOption = document.querySelector(
    `input[name="options${currentIndex}"]:checked`
  );
  console.log(selectedOption);

  if (selectedOption && selectedOption.value === ques[currentIndex].correct) {
    score++;
  }
  currentIndex++;
  render();
}

function endQuiz() {
  result.innerHTML = `Quiz Completed `;
  displayScore.innerHTML = `Your Score is ${score}/${ques.length}`;
  ansspace.innerHTML = "";
  timeLefts.innerHTML = "";
  button.style.display = "none";
  quesspace.innerHTML = "";

  startAgain.style.display = "";
}

startAgain.addEventListener("click", () => {
  startAgain.style.display = "none";
  result.innerHTML = "";
  displayScore.innerHTML = "";
  ansspace.style.display = "";
  quesspace.style.display = "";
  startQuiz();
});
