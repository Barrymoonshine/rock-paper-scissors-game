
const computerOptions = [`rock`, `paper`, `scissors`];

function getComputerChoice() {
 return (computerOptions[Math.floor(Math.random()*computerOptions.length)]);
} 

let playerScore = 0;
let computerScore = 0;

const btnRock = document.getElementsByClassName('rock');

function playerSelectionRock() {
    playRound(`rock`,getComputerChoice());
}

btnRock[0].addEventListener("click", playerSelectionRock);

const btnPaper = document.getElementsByClassName('paper');

function playerSelectionPaper() {
    playRound(`paper`,getComputerChoice());
}

btnPaper[0].addEventListener('click', playerSelectionPaper);

const btnScissors = document.getElementsByClassName('Scissors');

function playerSelectionScissors() {
    playRound(`scissors`,getComputerChoice());
}

btnScissors[0].addEventListener('click', playerSelectionScissors);

const container = document.querySelector('#container');

function playRound(playerSelection, computerSelection) {
 if (playerScore < 5 && computerScore < 5) {
    if ((playerSelection === `rock` && computerSelection === `scissors`) || (playerSelection === `paper` && computerSelection === `rock`) || (playerSelection === `scissors` && computerSelection === `paper`)) {
        return [playerScore +=1, container.innerHTML += `Player wins ${playerSelection} beats ${computerSelection}, the players' score is ${playerScore} and the computers' score is ${computerScore} <br />`];
    } else if ((playerSelection === `rock` && computerSelection === `paper`) || (playerSelection === `paper` && computerSelection === `scissors`) || (playerSelection === `scissors` && computerSelection === `rock`)) {
        return [computerScore +=1, container.innerHTML += `Computer wins ${computerSelection} beats ${playerSelection}, the computers' score is ${computerScore} and the players' score is ${playerScore} <br />`];
    } else if (playerSelection === computerSelection ) {
       return container.innerHTML += `It's a draw <br />`;
    }
  }
  else if (playerScore == 5 && computerScore != 5) {
    return container.innerHTML += `The humans have won to fight another day!`;
  }
  else if (computerScore == 5 && playerScore != 5) {
    return container.innerHTML += `The computers have won, run for your life!`;
  }
  else if (playerScore == 5 && computerScore == 5) {
  return container.innerHTML += `It's a draw!... Fight again?`;
  }
}
