"use strict";

const getSecretNumber = () => Math.trunc(Math.random() * 20) + 1;
const getGuess = () => Number(document.querySelector(".guess").value);
let secretNumber = getSecretNumber();

console.log(secretNumber);
let score = 20;

let gameLost = false;
let highScore = 0;

function loseGame() {
  gameLost = true;

  // Update the message to show that the user lost the game and change the background color to red
  document.querySelector(".message").textContent = "💥 You lost the game!";
  document.body.style.backgroundColor = "#dc143c";

  // Show the secret number when the user loses the game
  document.querySelector(".number").textContent = secretNumber;
}

function isGuessLarge() {
  document.querySelector(".message").textContent = "📈 Too high!";

  // Decrease the score by 1 when the user guess is wrong and show it
  score--;
  document.querySelector(".score").textContent = score;

  if (score === 0) {
    loseGame();
  }
}

function isGuessSmall() {
  document.querySelector(".message").textContent = "📉 Too low!";

  // Decrease the score by 1 when the user guess is wrong and show it
  score--;
  document.querySelector(".score").textContent = score;

  if (score === 0) {
    loseGame();
  }
}

function isGuessEqual() {
  document.querySelector(".message").textContent = "🎉 Correct Number!";

  // Change the background color to green when the user guesses the correct number
  document.body.style.backgroundColor = "#60b347";

  // Also show the number on the screen when the user guesses the correct number
  document.querySelector(".number").textContent = secretNumber;

  // Update the high score if the current score is greater than the previous high score
  highScore = Math.max(highScore, score);
  document.querySelector(".highscore").textContent = highScore;
}
document.querySelector(".check").addEventListener("click", function () {
  const guess = getGuess();
  if (!gameLost) {
    if (!guess) {
      document.querySelector(".message").textContent = "⛔️ No number!";
    } else if (guess === secretNumber) {
      isGuessEqual();
    } else if (guess > secretNumber) {
      isGuessLarge();
    } else {
      isGuessSmall();
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // Either the game is won or lost, so we reset the game state and generate a new secret number
  const guess = getGuess();
  const gameWon = guess === secretNumber;
  if (!guess || gameWon || gameLost) {
    highScore = (gameWon || gameLost) && score > highScore ? score : highScore;

    // Reset the game state
    score = 20;
    gameLost = false;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.body.style.backgroundColor = "#222";
    document.querySelector(".highscore").textContent = highScore;

    // Reset the secret number
    secretNumber = getSecretNumber();
    console.log("New secret number", secretNumber);
  }
});
