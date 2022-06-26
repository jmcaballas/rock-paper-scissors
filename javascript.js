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
    
}

const playerSelection = "rock";
const computerSelection = computerPlay();
