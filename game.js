let green = document.getElementById("green");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");
let colors = [green, red, blue, yellow];
let gameStarted = false;
let level;

// starting the game

document.addEventListener("keydown", (event) => {
  if (!gameStarted) startGame();
});

async function processStep(step) {
  step.classList.add("pressed");
  await new Promise((resolve) => setTimeout(resolve, 800));
  step.classList.remove("pressed");
}

async function startGame() {
  gameStarted = true;
  level = 1;
  let answers = [];
  let random = Math.floor(Math.random() * 4);
  sequence += colors[random];
  for (let i = 0; i < sequence.length; i++) {
    await processStep(sequence[i]);
  }
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
