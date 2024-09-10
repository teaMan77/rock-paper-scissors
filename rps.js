// Rock Paper Scissors
let computerWin = 0;
let userWin = 0;
let tie = 0;
function getComputerChoice() {
  let choice = Math.random() * 10;

  if (choice <= 3) {
    return "Rock";
  } else if (choice > 3 && choice <= 7) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getUserChoice() {
  let userChoice = prompt(
    "Please enter your choice -- Rock, Paper, Scissors -- Which one do you choose? "
  ).toLowerCase();
  let computerChoice = getComputerChoice().toLowerCase();

  if (computerChoice === "rock") {
    if (userChoice === "paper") {
      console.log("Computer played: " + computerChoice);
      console.log("You played: " + userChoice);
      console.log("You Win!");
      userWin++;
    } else if (userChoice === "scissors") {
      console.log("Computer played: " + computerChoice);
      console.log("You played: " + userChoice);
      console.log("Computer Wins T_T");
      computerWin++;
    }
  } else if (computerChoice === "paper") {
    if (userChoice === "rock") {
      console.log("Computer played: " + computerChoice);
      console.log("You played: " + userChoice);
      console.log("Computer Wins T_T");
      computerWin++;
    } else if (userChoice === "scissors") {
      console.log("Computer played: " + computerChoice);
      console.log("You played: " + userChoice);
      console.log("You Win!");
      userWin++;
    }
  } else if (computerChoice === "scissors") {
    if (userChoice === "rock") {
      console.log("Computer played: " + computerChoice);
      console.log("You played: " + userChoice);
      console.log("You Win!");
      userWin++;
    } else if (userChoice === "paper") {
      console.log("Computer played: " + computerChoice);
      console.log("You played: " + userChoice);
      console.log("Computer Wins T_T");
      computerWin++;
    }
  } else if (computerChoice === userChoice) {
    console.log("Computer played: " + computerChoice);
    console.log("You played: " + userChoice);
    console.log("What a coincedence!! It's a tie!");
    tie++;
  }
}
function playGame() {
  let rounds = parseInt(
    prompt("How many rounds do you wish to play the game?")
  );

  for (let i = 0; i < rounds; i++) {
    getUserChoice();
  }

  console.log("Total Wins: " + userWin);
  console.log("Total Losses: " + computerWin);
  console.log("Total Ties: " + tie);
}

playGame();
