// index.js

const gameVersion = "Ver 1. 2025/06";
document.getElementById("resultActual").textContent = gameVersion;

// Background color (Apple trickery)
document.querySelector("html").style.backgroundColor = "#212529";
document.body.style.backgroundColor = "#212529";

// Variables
let player1Name, player1Result, player1Score = 0;
let player2Name, player2Result, player2Score = 0;
let gameResult;
let gameResultText;
let dieFaces = 6;

// Button functionality
document.getElementById("buttonActual").addEventListener("click", throwDice);

function throwDice() {

  document.getElementById("buttonActual").disabled = true;

  document.getElementById("resultActual").classList.replace("resultActualBig", "text-secondary");
  document.getElementById("resultActual").textContent = "Rolling...";

  // Throw dice animation
  throwDiceAnimation();

  setTimeout(stopDice, 1500);

}

function throwDiceAnimation() {

  // Throw dice animation

  document.querySelectorAll(".diceActual").forEach(el => el.setAttribute("src","./images/diceSpinning.svg"));
  
}

function stopDice() {

  // player names
  player1Name = document.getElementById("player1NameActual").value;
  player2Name = document.getElementById("player2NameActual").value;

  if (player1Name === "") {
    player1Name = "Alice";
  }
  if (player2Name === "") {
    player2Name = "Bob";
  }

  // Randomize results
  player1Result = (Math.floor(Math.random() * dieFaces) + 1);
  player2Result = (Math.floor(Math.random() * dieFaces) + 1);

  // See who won
  if (player1Result > player2Result) {
    gameResult = 1; // player 1 wins
    gameResultText = player1Name + " wins!";
    player1Score++;
  } else if (player1Result === player2Result) {
    gameResult = 0; // tie
    gameResultText = "The game is tied.";
  } else {
    gameResult = 2; // player 2 wins
    gameResultText = player2Name + " wins!";
    player2Score++;
  }

  stopDiceAnimation(player1Result, player2Result);

  console.log(".:. Results: " + player1Name + ": " + player1Result + " - " + player2Name + ": " + player2Result +
    " - " + gameResultText + " .:. Match score: " + player1Name + ": " + player1Score + " - " + player2Name +
    ": " + player2Score + " .:.");
  
  document.getElementById("resultActual").classList.replace("text-secondary", "resultActualBig");
  document.getElementById("resultActual").textContent = gameResultText;
  document.getElementById("player1ScoreSpan").textContent = "Score: " + player1Score;
  document.getElementById("player2ScoreSpan").textContent = "Score: " + player2Score;

  document.getElementById("buttonActual").disabled = false;
}

function stopDiceAnimation(dice1Figure, dice2Figure) {

  // Stop dice animation

  document.getElementById("player1DiceActual").setAttribute("src","./images/dice" + dice1Figure + "f.svg");
  document.getElementById("player1DiceActual").setAttribute("alt",dice1Figure);
  document.getElementById("player2DiceActual").setAttribute("src","./images/dice" + dice2Figure + "f.svg");
  document.getElementById("player2DiceActual").setAttribute("alt",dice2Figure);

}