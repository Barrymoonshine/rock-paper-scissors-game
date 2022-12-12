const computerOptions = [`rock`, `paper`, `scissors`];

function getComputerChoice() {
 return (computerOptions[Math.floor(Math.random()*computerOptions.length)]);
} 

let playerScore = 0;
let computerScore = 0;

const btnRock = document.getElementsByClassName('rock');

function playerSelectionRock() {
    playRound(`rock`,getComputerChoice());
    resetBtnVisibility ();
}

btnRock[0].addEventListener("click", playerSelectionRock);

const btnPaper = document.getElementsByClassName('paper');

function playerSelectionPaper() {
    playRound(`paper`,getComputerChoice());
    resetBtnVisibility ();
}

btnPaper[0].addEventListener('click', playerSelectionPaper);

const btnScissors = document.getElementsByClassName('Scissors');

function playerSelectionScissors() {
    playRound(`scissors`,getComputerChoice());
    resetBtnVisibility ();
}

btnScissors[0].addEventListener('click', playerSelectionScissors);

const container = document.querySelector('#container');

function playRound(playerSelection, computerSelection) {
 if (playerScore < 4 && computerScore < 4) {
    if ((playerSelection === `rock` && computerSelection === `scissors`) || (playerSelection === `paper` && computerSelection === `rock`) || (playerSelection === `scissors` && computerSelection === `paper`)) {
        return [playerScore +=1, container.innerHTML += `Player wins ${playerSelection} beats ${computerSelection}, the players' score is ${playerScore} and the computers' score is ${computerScore} <br />`];
    } else if ((playerSelection === `rock` && computerSelection === `paper`) || (playerSelection === `paper` && computerSelection === `scissors`) || (playerSelection === `scissors` && computerSelection === `rock`)) {
        return [computerScore +=1, container.innerHTML += `Computer wins ${computerSelection} beats ${playerSelection}, the computers' score is ${computerScore} and the players' score is ${playerScore} <br />`];
    } else if (playerSelection === computerSelection ) {
       return container.innerHTML += `It's a draw, the players' score is ${playerScore} and the computers' score is ${computerScore} <br />`;
    }
 }
  else if (playerScore == 4 && computerScore < 4) {
    if ((playerSelection === `rock` && computerSelection === `scissors`) || (playerSelection === `paper` && computerSelection === `rock`) || (playerSelection === `scissors` && computerSelection === `paper`)) {
      return [playerScore +=1, container.innerHTML += `Player wins ${playerSelection} beats ${computerSelection}, the players' score is ${playerScore} and the computers' score is ${computerScore}. <br /> <h2> You beat the super-computer, congrats! <h2>`];
  } else if ((playerSelection === `rock` && computerSelection === `paper`) || (playerSelection === `paper` && computerSelection === `scissors`) || (playerSelection === `scissors` && computerSelection === `rock`)) {
      return [computerScore +=1, container.innerHTML += `Computer wins ${computerSelection} beats ${playerSelection}, the computers' score is ${computerScore} and the players' score is ${playerScore} <br />`];
  } else if (playerSelection === computerSelection ) {
     return container.innerHTML += `It's a draw, the players' score is ${playerScore} and the computers' score is ${computerScore} <br />`;
  }
}
  else if (playerScore < 4 && computerScore == 4) { 
    if ((playerSelection === `rock` && computerSelection === `scissors`) || (playerSelection === `paper` && computerSelection === `rock`) || (playerSelection === `scissors` && computerSelection === `paper`)) {
      return [playerScore +=1, container.innerHTML += `Player wins ${playerSelection} beats ${computerSelection}, the players' score is ${playerScore} and the computers' score is ${computerScore} <br />`];
  } else if ((playerSelection === `rock` && computerSelection === `paper`) || (playerSelection === `paper` && computerSelection === `scissors`) || (playerSelection === `scissors` && computerSelection === `rock`)) {
      return [computerScore +=1, container.innerHTML += `Computer wins ${computerSelection} beats ${playerSelection}, the computers' score is ${computerScore} and the players' score is ${playerScore} <br /> <h2> The super-computer has won, run for your life! <h2>`];
  } else if (playerSelection === computerSelection ) {
     return container.innerHTML += `It's a draw, the players' score is ${playerScore} and the computers' score is ${computerScore} <br />`;
  }
}
  else if (playerScore == 4 && computerScore == 4) { 
    if ((playerSelection === `rock` && computerSelection === `scissors`) || (playerSelection === `paper` && computerSelection === `rock`) || (playerSelection === `scissors` && computerSelection === `paper`)) {
      return [playerScore +=1, container.innerHTML += `Player wins ${playerSelection} beats ${computerSelection}, the players' score is ${playerScore} and the computers' score is ${computerScore}. <br /> <h2> The humans have won to fight another day! <h2>`];
  } else if ((playerSelection === `rock` && computerSelection === `paper`) || (playerSelection === `paper` && computerSelection === `scissors`) || (playerSelection === `scissors` && computerSelection === `rock`)) {
      return [computerScore +=1, container.innerHTML += `Computer wins ${computerSelection} beats ${playerSelection}, the computers' score is ${computerScore} and the players' score is ${playerScore} <br /> <h2> The computers have won, run for your life! <h2>`];
  } else if (playerSelection === computerSelection ) {
     return container.innerHTML += `It's a draw, the players' score is ${playerScore} and the computers' score is ${computerScore} <br />`;
  }  
}
}

const btnReset = document.getElementById('resetBtn');

function resetGame() {
  window.location.reload();
}

btnReset.addEventListener("click", resetGame);

resetBtn.style.visibility = 'hidden';

function resetBtnVisibility () {
  if (playerScore < 5 && computerScore < 5) {
    resetBtn.style.visibility = 'hidden';
  }
  else {
    resetBtn.style.visibility = 'visible';
  }
}

