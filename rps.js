// Rock Paper Scissors
let computerWin = 0;
let userWin = 0;
let tie = 0;
function getComputerChoice() {
  let choice = Math.random() * 10;

  if (choice <= 3) {
    return "rock";
  } else if (choice > 3 && choice <= 7) {
    return "paper";
  } else {
    return "scissors";
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  const userChoice = document.querySelectorAll(".b");

  for(let i = 0; i < 3; i++) {
    userChoice[i].addEventListener("click", playGame);
  }
});

const result = document.querySelector(".result");

const playGame = function(event) {
  let computerChoice = getComputerChoice();
  let userChoice = event.target.getAttribute("value").toLowerCase();

  if(userChoice === computerChoice) {
    result.textContent = "It's a tie!!!"
    tie++;
  } else {
    if(userChoice === "rock") {
      if(computerChoice === "scissors") {
        result.textContent = "Computer chose Scissors: Rock beats Scissors! You have won!!";
        userWin++;
      } else if(computerChoice === "paper") {
        result.textContent = "Computer chose Paper: Paper beats Rock! You have lost T_T";
        computerWin++;
      } 
    }
    if(userChoice === "paper") {
      if(computerChoice === "rock") {
        result.textContent = "Computer chose Rock: Paper beats Rock! You have won!!";
        userWin++;
      } else if(computerChoice === "scissors") {
        result.textContent = "Computer chose Scissors: Scissors beats Paper! You have lost T_T";
        computerWin++;
      }
    }
    if(userChoice === "scissors") {
      if(computerChoice === "paper") {
        result.textContent = "Computer chose Paper: Scissors beats Paper! You have won!!";
        userWin++;
      } else if(computerChoice === "rock") {
        result.textContent = "Computer chose Rock: Rock beats Scissors! You have lost T_T";
        computerWin++;
      }
    }
  }
  
  const gameResult1 = document.createElement("p");
  gameResult1.textContent = `Total Wins: ${userWin}`;
  result.appendChild(gameResult1);

  const gameResult2 = document.createElement("p");
  gameResult2.textContent = `Total Losses: ${computerWin}`;
  result.appendChild(gameResult2);

  const gameResult3 = document.createElement("p");
  gameResult3.textContent = `Total Ties: ${tie}`;
  result.appendChild(gameResult3);
}


