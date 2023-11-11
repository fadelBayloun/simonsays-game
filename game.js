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

// starting the game

document.addEventListener("keydown", (event) => {
  if (!gameStarted) startGame();
});

function startGame() {
  gameStarted = true;
  playerInput = [];
  sequence = [];
  level = 1;
  startNewRound();
}

function startNewRound() {
  title.innerHTML = `Level ${level}`;
  generateSequence();
  colorEvent(sequence[sequence.length - 1], "mousedown");
  setTimeout(() => {
    colorEvent(sequence[sequence.length - 1], "mouseup");
  }, 500);
  for (const color of colors) {
    color.onclick = (event) => {
      playerInput.push(color);
      isCorrect = handlePlayerInput();
    };
    if (!isCorrect) {
      gameOver();
    } else if (playerInput.length === sequence.length) {
      level++;
      startNewRound();
    }
  }
}

function gameOver() {
  title.innerHTML = `GameOver!`;
  gameStarted = false;
}

function handlePlayerInput() {
  if (playerInput.length > sequence.length) {
    return false;
  }
  if (playerInput.length === sequence.length) {
    for (let i = 0; i < playerInput.length; i++) {
      if (playerInput[i] !== sequence[i]) {
        return false;
      }
    }
    // Player completed the sequence correctly
    return true;
  }
  // Player's input is shorter than the correct sequence, continue!
  return true;
}

function generateSequence() {
  random = Math.floor(Math.random() * 4);
  sequence.push(colors[random]);
}

// adding press effect for colors

function colorEvent(color, eventType) {
  if (eventType === "mousedown") {
    color.classList.add("pressed");
  } else if (eventType === "mouseup") {
    color.classList.remove("pressed");
  }
}

for (const color of colors) {
  color.addEventListener("mousedown", (event) => {
    colorEvent(color, event.type);
  });

  color.addEventListener("mouseup", (event) => {
    colorEvent(color, event.type);
  });
}
