// prompt user to begin game/round with enter click (for later!)

// For now will keep in browser as a prompt to being to start game

// computer rando picks one of the three options

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerResult = Math.random();
    if (computerResult <= 0.33) {
        computerResult = "rock";
    } else if (computerResult >0.33 && computerResult <= 0.66) {
        computerResult = "paper";
    } else {
        computerResult = "scissors";
    }
    return computerResult;
}

// const computerChoice = getComputerChoice();
    
// user is prompted to type (make it not case sensitive) one of the three options

// const userChoice = prompt('Select Rock, Paper, or Scissors').toLowerCase();

// program compares the two chosen values made by computer and user and a winner is chosen (implied this is where we tell the program conditions of victory [rock beats scissor, scissors beats paper, paper beats rock], no points awarded for a tie).
// user is met with a statement of winning or losing the round

let roundResult;

function playRound(userChoice, computerChoice) {
    if (userChoice == 'rock' && computerChoice == 'rock') {
        roundResult =  'You both picked rock, its a tie!';
    } else if (userChoice == 'rock' && computerChoice == 'paper') {
        roundResult =  'Paper beats rock, you lose!';
    } else if (userChoice == 'rock' && computerChoice == 'scissors') {
        roundResult =  'Rock beats scissors, you win!';
    } else if (userChoice == 'paper' && computerChoice == 'rock') {
        roundResult =  'Paper beats rock, you win!';
    } else if (userChoice == 'paper' && computerChoice == 'paper') {
        roundResult =  'You both picked paper, its a tie!';
    } else if (userChoice == 'paper' && computerChoice == 'scissors') {
        roundResult =  'Scissors beats paper, you lose!';
    } else if (userChoice == 'scissors' && computerChoice == 'rock') {
        roundResult =  'Rock beats scissors, you lose!';
    } else if (userChoice == 'scissors' && computerChoice == 'paper') {
        roundResult =  'Scissors beats paper, you win!';
    } else if (userChoice == 'scissors' && computerChoice == 'scissors') {
        roundResult =  'You both picked scissors, its a tie!';
    } else {
        roundResult = 'invalid input, reload page and try again';
    }
}

// Function calling the playRound() function and seriesScore() function

function startRound() {
    playRound(prompt('Select Rock, Paper, or Scissors').toLowerCase(), getComputerChoice());
    console.log(roundResult);
    seriesScore(roundResult);
}

// running total of the series updated

function seriesScore(roundResult) {
    if (roundResult == 'Rock beats scissors, you win!' || roundResult == 'Paper beats rock, you win!' || roundResult == 'Scissors beats paper, you win!') {
        userScore = 1 + userScore;
        console.log('The current score is ' + userScore + ' for the player, and ' + computerScore + ' for the computer!');
    } else if (roundResult == 'Paper beats rock, you lose!' || roundResult == 'Scissors beats paper, you lose!' || roundResult == 'Rock beats scissors, you lose!') {
        computerScore = 1 + computerScore;
        console.log('The current score is ' + userScore + ' for the player, and ' + computerScore + ' for the computer!');
    } else {
        console.log('The current score is ' + userScore + ' for the player, and ' + computerScore + ' for the computer!');
    } 
    return userScore, computerScore; 
}

// loop the program for best of 9 series

function startSeries() {
    startRound();
    startRound();
    startRound();
    startRound();
    startRound();
    startRound();
    startRound();
    startRound();
    startRound();
    if (userScore == 5) {
        console.log('Congrats you have defeated the computer!');
    } else {
        console.log('The computers are taking over and you have failed us!');
    }
}

// after condition of user or computer winning five rounds of the loop user to be met with statement of winning or losing the series

// prompt for user to start another series is given (also should be able to pick this option in the middle of a already running series to start a new series before the current is done)

