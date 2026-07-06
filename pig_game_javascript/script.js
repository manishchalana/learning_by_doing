"use strict";

let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;
let currentScore = 0;

const randomDiceGenerator = () => Math.floor(Math.random() * 6) + 1;
const imageGetterForDiceValue = (diceValue) => `dice-${diceValue}.png`;

const switchPlayer = () => {
  document
    .querySelector(`${currentPlayer === 1 ? ".player--0" : ".player--1"}`)
    .classList.remove("player--active");
  document
    .querySelector(`${currentPlayer === 1 ? ".player--1" : ".player--0"}`)
    .classList.add("player--active");

  currentPlayer = currentPlayer === 1 ? 2 : 1;
  currentScore = 0;
  updateCurrentScore();
};

const rollDice = function () {
  let diceValue = randomDiceGenerator();
  displayDiceRoll(diceValue);
  if (diceValue === 1) {
    switchPlayer();
  } else {
    currentScore += diceValue;
    updateCurrentScore();
  }
};

const resetGame = function () {
  player1Score = 0;
  player2Score = 0;
  currentPlayer = 1;
  currentScore = 0;
  updatePlayerScore();
  updateCurrentScore();
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
};

const displayDiceRoll = function (diceValue) {
  document.querySelector(".dice").src = imageGetterForDiceValue(diceValue);
};

const updateCurrentScore = function () {
  document.querySelector(
    `${currentPlayer === 1 ? "#current--0" : "#current--1"}`,
  ).textContent = currentScore;
};

const updatePlayerScore = function () {
  document.querySelector("#score--0").innerHTML = player1Score;
  document.querySelector("#score--1").innerHTML = player2Score;
};

const holdScore = function () {
  if (currentPlayer === 1) {
    player1Score += currentScore;
    updatePlayerScore();
  } else {
    player2Score += currentScore;
    updatePlayerScore();
  }
  if (player1Score >= 100 || player2Score >= 100) {
    alert(`Player ${currentPlayer} wins!`);
    resetGame();
  } else {
    switchPlayer();
  }
};

document.querySelector(".btn--roll").addEventListener("click", rollDice);
document.querySelector(".btn--new").addEventListener("click", resetGame);
document.querySelector(".btn--hold").addEventListener("click", holdScore);
resetGame();
