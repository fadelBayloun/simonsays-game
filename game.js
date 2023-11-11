let green = document.getElementById("green");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");
let gameStarted = false;
let level;

// startin the game

document.addEventListener("keydown", (event) => {
  if (!gameStarted) startGame();
});

function startGame() {
  gameStarted = true;
  level = 1;
  let sequence = [];
  let answers = [];
}

// adding press effect for colors

function pressEffect(color) {
  color.classList.toggle("pressed");
}
green.addEventListener("mousedown", () => {
  pressEffect(green);
});
green.addEventListener("mouseup", () => {
  pressEffect(green);
});

red.addEventListener("mousedown", () => {
  pressEffect(red);
});
red.addEventListener("mouseup", () => {
  pressEffect(red);
});

blue.addEventListener("mousedown", () => {
  pressEffect(blue);
});
blue.addEventListener("mouseup", () => {
  pressEffect(blue);
});

yellow.addEventListener("mousedown", () => {
  pressEffect(yellow);
});
yellow.addEventListener("mouseup", () => {
  pressEffect(yellow);
});
