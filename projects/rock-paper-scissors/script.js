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

