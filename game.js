let title = document.getElementById("level-title");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let red = document.getElementById("red");

let colors = [green, red, blue, yellow];
let level, random, isCorrect;
let gameStarted = false;
let clickedCount = 0;
let playerInput = [];
let sequence = [];

// starting the game

document.addEventListener("keydown", (event) => {
  if (!gameStarted) startGame();
});

function startGame() {
  gameStarted = true;
  sequence = [];
  level = 1;
  startNewRound();
}

function startNewRound() {
  playerInput = [];
  clickedCount = 0;
  title.innerHTML = `Level ${level}`;
  generateSequence();
  addAnimation(sequence[sequence.length - 1]);
  for (const color of colors) {
    color.onclick = (event) => {
      playerInput.push(color);
      clickedCount++;
      addAnimation(color);
      handlePlayerInput();
    };
  }
}

function generateSequence() {
  random = Math.floor(Math.random() * 4);
  sequence.push(colors[random]);
}

function addAnimation(color) {
  color.classList.remove("color-animation");
  setTimeout(() => {
    color.classList.add("color-animation");
  }, 10);

  addAudio("./sounds/" + color.id + ".mp3");
}

function addAudio(path) {
  const audio = new Audio(path);
  audio.play();
}

function handlePlayerInput() {
  if (playerInput.length > sequence.length) {
    gameOver();
  }
  for (let i = 0; i < playerInput.length; i++) {
    if (playerInput[i].id !== sequence[i].id) {
      gameOver();
    }
  }
  if (clickedCount === level && gameStarted) {
    setTimeout(() => {
      level++;
      startNewRound();
    }, 500);
  }
}

function gameOver() {
  title.innerHTML = `Game Over! Press Any Key to Restart`;
  gameStarted = false;
  document.body.style = "background-color : red;";
  setTimeout(() => {
    document.body.style = "";
  }, 200);
  addAudio("./sounds/wrong.mp3");
}
