let green = document.getElementById("green");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");
let title = document.getElementById("level-title");

let colors = [green, red, blue, yellow];
let gameStarted = false;
let level, random, isCorrect;
let playerInput = [];
let sequence = [];
let clickedCount = 0;

// starting the game

document.addEventListener("keydown", (event) => {
  if (!gameStarted) startGame();
});

function startGame() {
  gameStarted = true;
  sequence = [];
  level = 1;
  document.body.style = "";
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

function gameOver() {
  title.innerHTML = `Game Over! Press Any Key to Restart`;
  gameStarted = false;
  document.body.style = "background-color : red;";
  setTimeout(() => {
    document.body.style = "";
  }, 200);
  addAudio("./sounds/wrong.mp3");
}

function handlePlayerInput() {
  if (playerInput.length > sequence.length) {
    return false;
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
