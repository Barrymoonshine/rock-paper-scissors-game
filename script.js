// When the player inputs a choice = rock, paper or scissors (not case sensitive)
// Computer makes a random choice from rock, paper or scissors (not case sensitive)

// If the player chooses rock and the computer scissors return "You win, rock beats scissors" and the player receives a point
    // Else if the player chooses rock and the computer paper return "You lose, paper beats rock" and the computer receives a point 
    // Else if the player chooses scissors and the computer paper return "You win, scissors beat paper" and the player receives a point 
    // Else if the player chooses scissors and the computer rock return "You lose, rock beats scissors" and the computer receives a point 
    // Else if the player chooses paper and the computer rock return "You win, paper beats rock!" and the player receives a point 
    // Else if the player chooses paper and the computer scissors return "You lose, scissors beat paper" and the computer receives a point 
        // Else the player and computer make the same choice return "It's a drawer", and do not log a point to either the player or Computer
        // note - also check the player has entered the correct input, i.e. rock, paper or scissors (not case sensitive!)

// Run the game 5 times, totalling up the computer and player results each round 
// Calculate who won at the end of the 5 rounds and return an appropriate message, i.e. the player has won 

const results = [`rock`, `paper`, `scissors`] ;

function getComputerChoice() {
    return (results[Math.floor(Math.random()*results.length)]) ;
} 

let playerScore = 0 ;
let computerScore = 0 ;

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() !== `rock` && playerSelection.toLowerCase() !== `paper` && playerSelection.toLowerCase() !== `scissors`) {
        return (`Please enter either Rock, Paper or Scissors to play (not case sensitive bro!)`) ;
    } else if ((playerSelection.toLowerCase() === `rock` && computerSelection === `scissors`) || (playerSelection.toLowerCase() === `paper` && computerSelection === `rock`) || (playerSelection.toLowerCase() === `scissors` && computerSelection === `paper`)) {
        return [`Player wins ${playerSelection} beats ${computerSelection}`, playerScore +=1] ;
    } else if ((playerSelection.toLowerCase() === `rock` && computerSelection === `paper`) || (playerSelection.toLowerCase() === `paper` && computerSelection === `scissors`) || (playerSelection.toLowerCase() === `scissors` && computerSelection === `rock`)) {
        return [`Computer wins ${computerSelection} beats ${playerSelection}`, computerScore +=1] ;
    } else if (playerSelection.toLowerCase() === computerSelection ) {
       return (`It's a draw`) ;
    }
}

function game () {
    for (let i = 0; i < 5; i++) { 
        let playerSelection = prompt(`Please enter either rock, paper or scissors (not case sensitive!)`) ;
        let computerSelection = getComputerChoice() ;
        console.log(playRound(playerSelection,computerSelection)) ;
        console.log(playerScore) ;
        console.log(computerScore) ;
    }
}

game () ;

function gameResults () {
    if (playerScore > computerScore) {
        return `Humans have won to fight another day!` ;
    } else if (playerScore < computerScore) {
        return `The computers have won, run for your life!` ;
    } else if (playerScore === computerScore) {
        return `It's a draw!... Fight again!?` ;
    }
}

console.log(gameResults ()) ;