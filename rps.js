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
      userWin++;
      consoleMessage(computerChoice, userChoice, "You Win!");
    } else if (userChoice === "scissors") {
      computerWin++;
      consoleMessage(computerChoice, userChoice, "Computer Wins T_T");
    }
  } else if (computerChoice === "paper") {
    if (userChoice === "rock") {
      computerWin++;
      consoleMessage(computerChoice, userChoice, "Computer Wins T_T");
    } else if (userChoice === "scissors") {
      userWin++;
      consoleMessage(computerChoice, userChoice, "You Win!");
    }
  } else if (computerChoice === "scissors") {
    if (userChoice === "rock") {
      userWin++;
      consoleMessage(computerChoice, userChoice, "You Win!");
    } else if (userChoice === "paper") {
      computerWin++;
      consoleMessage(computerChoice, userChoice, "Computer Wins T_T");
    }
  } else if (computerChoice === userChoice) {
    tie++;
    consoleMessage(
      computerChoice,
      userChoice,
      "What a coincedence!! It's a tie!"
    );
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

function consoleMessage(computerChoice, userChoice, message) {
  console.log("Computer played: " + computerChoice);
  console.log("You played: " + userChoice);
  console.log(message);
}

playGame();
