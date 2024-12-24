let humanScore = 0
let computerScore = 0
function trackScores() {
    document.querySelector('#user').textContent = `User Score: ${humanScore}`
    document.querySelector('#computer').textContent = `Computer Score: ${computerScore}`
}

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum < 1) {
        return 'rock';
    }
    else if (randomNum < 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}



function playGame() {
    function playRound(humanSelection, computerSelection) {
        let message;
        if (computerSelection === 'rock' && humanSelection === 'paper') {
            humanScore += 1;
            message = 'You\'ve won this round!'
        }
        if (computerSelection === 'rock' && humanSelection === 'rock') {
            message = 'You\'ve tied this round!'
        }
        if (computerSelection === 'rock' && humanSelection === 'scissors') {
            computerScore += 1;
            message = 'The computer has won this round.'
        }
        // -----------------------------------------------------------------
        if (computerSelection === 'paper' && humanSelection === 'paper') {
            message = 'You\'ve tied this round!'
        }
        if (computerSelection === 'paper' && humanSelection === 'rock') {
            computerScore += 1;
            message = 'The computer has won this round.'
        }
        if (computerSelection === 'paper' && humanSelection === 'scissors') {
            humanScore += 1;
            message = 'You\'ve won this round!'
        }
        // -----------------------------------------------------------------
        if (computerSelection === 'scissors' && humanSelection === 'rock') {
            humanScore += 1;
            message = 'You\'ve won this round!'
        }
        if (computerSelection === 'scissors' && humanSelection === 'paper') {
            computerScore += 1;
            message = 'The computer has won this round.'
        }
        if (computerSelection === 'scissors' && humanSelection === 'scissors') {
            message = 'You\'ve tied this round!'
        }
        trackScores();
        document.querySelector('#result').textContent = message;
    }

    document.querySelector('#rock').addEventListener('click', () => {
        playRound('rock', getComputerChoice());
    });

    document.querySelector('#paper').addEventListener('click', () => {
        playRound('paper', getComputerChoice());
    });

    document.querySelector('#scissors').addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
    });

}
playGame();