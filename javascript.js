function computerPlay() {
    let randomNumber = Math.floor(Math.random() * (3)) + 1;
    let computerChoice;
    if (randomNumber === 1) {
        computerChoice = 'ROCK';
    } else if (randomNumber === 2) {
        computerChoice = 'PAPER';
    } else if (randomNumber === 3) {
        computerChoice = 'SCISSORS';
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'ROCK') {
        return "Draw! ROCK equals ROCK";
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER') {
        return "You Lose! PAPER beats ROCK";
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS') {
        return "You Win! ROCK beats SCISSORS";
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK') {
        return "You Win! PAPER beats ROCK";
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'PAPER') {
        return "Draw! PAPER equals PAPER";
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSORS') {
        return "You Lose! SCISSORS beats PAPER";
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'ROCK') {
        return "You Lose! ROCK beats SCISSORS";
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER') {
        return "You Win! SCISSORS beats PAPER";
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'SCISSORS') {
        return "Draw! SCISSORS equals SCISSORS";
    }
}

function game(playRound) {
    let playerSelection;
    let computerSelection;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose ROCK, PAPER, or SCISSORS.");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game(playRound);
