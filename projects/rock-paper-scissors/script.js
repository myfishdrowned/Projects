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
console.log(getComputerChoice())

function getHumanChoice(str) {
    if (str === 'rock') {
        return 'rock'
    }
    else if (str === 'paper') {
        return 'paper'
    }
    else if (str === 'scissors') {
        return 'scissors'
    }
}
let str = prompt('rock, paper, or scissors? ')
console.log(getHumanChoice(str))

let humanScore = 0
let computerScore = 0

function playRound(humanSelection, computerSelection) {
    if (computerSelection === 'rock' && humanSelection === 'paper') {
        humanScore += 1;
        console.log('You\'ve won this round!')
    }
    if (computerSelection === 'rock' && humanSelection === 'rock') {
        console.log('You\'ve tied this round.')
    }
    if (computerSelection === 'rock' && humanSelection === 'scissors') {
        computerScore += 1;
        console.log('The computer has won this round!')
    }
    // -----------------------------------------------------------------
    if (computerSelection === 'paper' && humanSelection === 'paper') {
        console.log('You\'ve tied this round.')
    }
    if (computerSelection === 'paper' && humanSelection === 'rock') {
        computerScore += 1;
        console.log('The computer has won this round!')
    }
    if (computerSelection === 'paper' && humanSelection === 'scissors') {
        humanScore += 1;
        console.log('You\'ve won this round!')
    }
    // -----------------------------------------------------------------
    if (computerSelection === 'scissors' && humanSelection === 'rock') {
        humanScore += 1;
        console.log('You\'ve won this round!')
    }
    if (computerSelection === 'scissors' && humanSelection === 'paper') {
        computerScore += 1;
        console.log('The computer has won this round!')
    }
    if (computerSelection === 'scissors' && humanSelection === 'scissors') {
        console.log('You\'ve tied this round.')
    }
}

const humanSelection = getHumanChoice(str);
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(`Computer's score: ${computerScore}`)
console.log(`Your score: ${humanScore}`)
