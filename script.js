const computerOptions = [`rock`, `paper`, `scissors`];
const container = document.getElementById(`container`);
const playButtons = document.getElementsByClassName('playBtns');
const btnReset = document.getElementById(`resetBtn`);
let playerScore = 0;
let computerScore = 0;
const playListeners = function (e) {
  playRound(e.target.id, getComputerChoice());
  showResetBtn();
  trackScores();
}

btnReset.style.visibility = `hidden`;

btnReset.addEventListener(`click`, resetGame);

function showResetBtn() {
  if (playerScore < 5 && computerScore < 5) {
    resetBtn.style.visibility = `hidden`;
  }
  else {
    resetBtn.style.visibility = `visible`;
  }
}

function resetGame() {
  container.innerHTML = "";
  playerScore = 0;
  computerScore = 0;
  btnReset.style.visibility = `hidden`;
  for (i of playButtons) {
    i.style.cursor = `pointer`;
    i.addEventListener('click', playListeners);
  }
}

for (i of playButtons) {
  i.addEventListener('click', playListeners);
}


function getComputerChoice() {
  return (computerOptions[Math.floor(Math.random() * computerOptions.length)]);
}

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === `rock` && computerSelection === `scissors`) || (playerSelection === `paper` && computerSelection === `rock`) || (playerSelection === `scissors` && computerSelection === `paper`)) {
    [playerScore += 1, container.innerHTML = `You win ${playerSelection} beats ${computerSelection}! Your score is: ${playerScore}, the computers' score is: ${computerScore}. <br /> <br />`];
  } else if ((playerSelection === `rock` && computerSelection === `paper`) || (playerSelection === `paper` && computerSelection === `scissors`) || (playerSelection === `scissors` && computerSelection === `rock`)) {
    [computerScore += 1, container.innerHTML = `You lose ${computerSelection} beats ${playerSelection}! Your score is: ${playerScore}, the computers' score is: ${computerScore}. <br /> <br />`];
  } else if (playerSelection === computerSelection) {
    container.innerHTML = [`It's a draw.  Your score is: ${playerScore}, the computers' score is: ${computerScore}. <br /> <br />`];
  }
}

function trackScores() {
  if (playerScore == 5) {
    container.innerHTML += `<br /> <h2> You beat the super-computer, congrats! <h2>`;
    removePlayEvtLsts();
  } else if (computerScore == 5) {
    container.innerHTML += `<br />  <h2> The super-computer has won, run for your life! <h2>`;
    removePlayEvtLsts();
  }
}

function removePlayEvtLsts() {
  for (i of playButtons) {
    i.removeEventListener('click', playListeners);
    i.style.cursor = `not-allowed`;
  }
}