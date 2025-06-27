// index.js

const gameVersion = "Ver 1.1 2025/06";
$("#resultActual").text(gameVersion);

// Background color (Apple trickery)
$("html").css("background-color", "#212529");
$("body").css("background-color", "#212529");

// Variables
let player1Name, player1Result, player1Score = 0;
let player2Name, player2Result, player2Score = 0;
let gameResult;
let gameResultText;
let dieFaces = 6;

// Button functionality
$("#buttonActual").click(throwDice);

function throwDice() {

  $("#buttonActual").prop("disabled", true);

  $("#resultActual").removeClass("resultActualBig").addClass("text-secondary");
  $("#resultActual").text("Rolling...");

  // Throw dice animation
  throwDiceAnimation();

  setTimeout(stopDice, 1500);

}

function throwDiceAnimation() {

  // Throw dice animation

  $(".diceActual").attr("src","./images/diceSpinning.svg");
  
}

function stopDice() {

  // player names
  player1Name = $("#player1NameActual").val();
  player2Name = $("#player2NameActual").val();

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

  $("#resultActual").animate({opacity:0});

  setTimeout(function() {
    stopDiceAnimation(player1Result, player2Result);
  }, 500);
  
  console.log(".:. Results: " + player1Name + ": " + player1Result + " - " + player2Name + ": " + player2Result +
    " - " + gameResultText + " .:. Match score: " + player1Name + ": " + player1Score + " - " + player2Name +
    ": " + player2Score + " .:.");
  
  setTimeout(function() {
    $("#resultActual").removeClass("text-secondary").addClass("resultActualBig");
    $("#resultActual").text(gameResultText);

    $("#resultActual").animate({opacity:1});

    $("#player1ScoreSpan").text("Score: " + player1Score);
    $("#player2ScoreSpan").text("Score: " + player2Score);
    $("#buttonActual").prop("disabled",false);
  }, 500);
  
  
}

function stopDiceAnimation(dice1Figure, dice2Figure) {

  // Stop dice animation

  $("#player1DiceActual").attr("src","./images/dice" + dice1Figure + "f.svg");
  $("#player1DiceActual").attr("alt",dice1Figure);
  $("#player2DiceActual").attr("src","./images/dice" + dice2Figure + "f.svg");
  $("#player2DiceActual").attr("alt",dice2Figure);

}