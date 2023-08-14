// Global variables used in functions

let userScore = 0;
let computerScore = 0;
let roundResult;
let playerChoice;

// Event listener for the button options of rock, paper, scissors and inputs the player's choice + starts a round against the computer

    const btn = document.querySelectorAll('.btn');
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', function() {
                playerChoice = btn[i].innerText.toLowerCase();
                logSeries();
            });
        };
    
    function getPlayerChoice() {
        return playerChoice;
    }

// computer rando picks one of the three options

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
    
// program compares the two chosen values made by computer and user and a winner is chosen (implied this is where we tell the program conditions of victory [rock beats scissor, scissors beats paper, paper beats rock], no points awarded for a tie).
// user is met with a statement of winning or losing the round, also a if else part if an input a user put in is not valid

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
        } else if (userChoice == 'reset series') {
            roundResult = 'The battle has been reset';    
        } else {
            roundResult = 'invalid input, reload page and try again';
        }
    }
    

// Function calling the playRound() function and seriesScore() function with inputs for the latter functions to prompt user when 
// they want to start a game, and computer choice is not made until that time as well

    function startRound() {
        playRound(getPlayerChoice(), getComputerChoice());
        seriesScore(roundResult);
        const computerChoiceDiv = document.querySelector('.computer-choice');
        const playerChoiceDiv = document.querySelector('.player-choice'); 
        const imBattleField = document.querySelector('.round-result');
        const txtBattleField = document.createElement('p');
        txtBattleField.classList.add('battle-txt');
        const imgPlayer = document.createElement('img');
        const imgComputer = document.createElement('img');
        imBattleField.replaceChild(txtBattleField,imBattleField.lastElementChild);
        if (roundResult === 'You both picked rock, its a tie!') {  
            imgPlayer.src = ("./img/icons8-fist-100.png");
            imgComputer.src = ("./img/icons8-fist-100.png");
            playerChoiceDiv.removeChild(playerChoiceDiv.lastElementChild);
            computerChoiceDiv.removeChild(computerChoiceDiv.lastElementChild);
            playerChoiceDiv.appendChild(imgPlayer);
            computerChoiceDiv.appendChild(imgComputer);
            txtBattleField.textContent = 'You both picked rock, its a tie!';
        } else if (roundResult === 'Paper beats rock, you lose!') {
            imgPlayer.src = ("./img/icons8-fist-100.png");
            imgComputer.src = ("./img/icons8-hand-100.png");
            playerChoiceDiv.removeChild(playerChoiceDiv.lastElementChild);
            computerChoiceDiv.removeChild(computerChoiceDiv.lastElementChild);
            playerChoiceDiv.appendChild(imgPlayer);
            computerChoiceDiv.appendChild(imgComputer);
            txtBattleField.textContent = 'Paper beats rock, you lose!';
        } else if (roundResult === 'Rock beats scissors, you win!') {
            imgPlayer.src = ("./img/icons8-fist-100.png");
            imgComputer.src = ("./img/icons8-hand-scissors-100.png");
            playerChoiceDiv.removeChild(playerChoiceDiv.lastElementChild);
            computerChoiceDiv.removeChild(computerChoiceDiv.lastElementChild);
            playerChoiceDiv.appendChild(imgPlayer);
            computerChoiceDiv.appendChild(imgComputer);
            txtBattleField.textContent = 'Rock beats scissors, you win!';
        } else if (roundResult === 'Paper beats rock, you win!'){
            imgPlayer.src = ("./img/icons8-hand-100.png");
            imgComputer.src = ("./img/icons8-fist-100.png");
            playerChoiceDiv.removeChild(playerChoiceDiv.lastElementChild);
            computerChoiceDiv.removeChild(computerChoiceDiv.lastElementChild);
            playerChoiceDiv.appendChild(imgPlayer);
            computerChoiceDiv.appendChild(imgComputer);
            txtBattleField.textContent = 'Paper beats rock, you win!';
        } else if (roundResult === 'You both picked paper, its a tie!') {
            imgPlayer.src = ("./img/icons8-hand-100.png");
            imgComputer.src = ("./img/icons8-hand-100.png");
            playerChoiceDiv.removeChild(playerChoiceDiv.lastElementChild);
            computerChoiceDiv.removeChild(computerChoiceDiv.lastElementChild);
            playerChoiceDiv.appendChild(imgPlayer);
            computerChoiceDiv.appendChild(imgComputer);
            txtBattleField.textContent = 'You both picked paper, its a tie!';
        } else if (roundResult === 'Scissors beats paper, you lose!') {
            imgPlayer.src = ("./img/icons8-hand-100.png");
            imgComputer.src = ("./img/icons8-hand-scissors-100.png");
            playerChoiceDiv.removeChild(playerChoiceDiv.lastElementChild);
            computerChoiceDiv.removeChild(computerChoiceDiv.lastElementChild);
            playerChoiceDiv.appendChild(imgPlayer);
            computerChoiceDiv.appendChild(imgComputer);
            txtBattleField.textContent = 'Scissors beats paper, you lose!';
        } else if (roundResult === 'Rock beats scissors, you lose!') {
            imgPlayer.src = ("./img/icons8-hand-scissors-100.png");
            imgComputer.src = ("./img/icons8-fist-100.png");
            playerChoiceDiv.removeChild(playerChoiceDiv.lastElementChild);
            computerChoiceDiv.removeChild(computerChoiceDiv.lastElementChild);
            playerChoiceDiv.appendChild(imgPlayer);
            computerChoiceDiv.appendChild(imgComputer);
            txtBattleField.textContent = 'Rock beats scissors, you lose!';
        } else if (roundResult === 'Scissors beats paper, you win!') {
            imgPlayer.src = ("./img/icons8-hand-scissors-100.png");
            imgComputer.src = ("./img/icons8-hand-100.png");
            playerChoiceDiv.removeChild(playerChoiceDiv.lastElementChild);
            computerChoiceDiv.removeChild(computerChoiceDiv.lastElementChild);
            playerChoiceDiv.appendChild(imgPlayer);
            computerChoiceDiv.appendChild(imgComputer);
            txtBattleField.textContent = 'Scissors beats paper, you win!';
        } else if (roundResult === 'The battle has been reset') {
            imgPlayer.src = ("./img/icons8-user-100.png");
            imgComputer.src = ("./img/icons8-workstation-100.png");
            playerChoiceDiv.removeChild(playerChoiceDiv.lastElementChild);
            computerChoiceDiv.removeChild(computerChoiceDiv.lastElementChild);
            playerChoiceDiv.appendChild(imgPlayer);
            computerChoiceDiv.appendChild(imgComputer);
            txtBattleField.textContent = 'The battle has been reset';
        } else {
            imgPlayer.src = ("./img/icons8-hand-scissors-100.png");
            imgComputer.src = ("./img/icons8-hand-scissors-100.png");
            playerChoiceDiv.removeChild(playerChoiceDiv.lastElementChild);
            computerChoiceDiv.removeChild(computerChoiceDiv.lastElementChild);
            playerChoiceDiv.appendChild(imgPlayer);
            computerChoiceDiv.appendChild(imgComputer);
            txtBattleField.textContent = 'You both picked scissors, its a tie!';
        }
        txtBattleField.setAttribute('style', 'font-weight: bold; font-size: 25px;')
    }

// running total of the series updated also tells user the score in the series

    function seriesScore(roundResult) {
        const seriesInfo = document.querySelector('.series-info');
        const score = document.createElement('p');
        if (roundResult == 'Rock beats scissors, you win!' || roundResult == 'Paper beats rock, you win!' || roundResult == 'Scissors beats paper, you win!') {
            userScore = 1 + userScore;
            score.textContent = 'The current score is ' + userScore + ' for the player, and ' + computerScore + ' for the computer!';
            seriesInfo.removeChild(seriesInfo.lastElementChild);
            seriesInfo.appendChild(score);
        } else if (roundResult == 'Paper beats rock, you lose!' || roundResult == 'Scissors beats paper, you lose!' || roundResult == 'Rock beats scissors, you lose!') {
            computerScore = 1 + computerScore;
            score.textContent = 'The current score is ' + userScore + ' for the player, and ' + computerScore + ' for the computer!';
            seriesInfo.removeChild(seriesInfo.lastElementChild);
            seriesInfo.appendChild(score);
        } else if (roundResult == 'The battle has been reset') {
            userScore = 0;
            computerScore = 0;
            score.textContent = 'The current score is ' + userScore + ' for the player, and ' + computerScore + ' for the computer!';
            seriesInfo.removeChild(seriesInfo.lastElementChild);
            seriesInfo.appendChild(score);
        } else {
            score.textContent = 'The current score is ' + userScore + ' for the player, and ' + computerScore + ' for the computer!';
            seriesInfo.removeChild(seriesInfo.lastElementChild);
            seriesInfo.appendChild(score);
        } 
        seriesInfo.setAttribute('style', 'font-weight: bold; font-size: 25px;');
    }

// Once the user or computer wins 5 games outputs a victory or defeat message

    function logSeries() {
        startRound();
        const seriesInfo = document.querySelector('.series-info');
        const message = document.createElement('p');
        if (userScore === 5) {
            message.textContent = 'Congrats you have defeated the computers and have saved us all!!';
            seriesInfo.removeChild(seriesInfo.lastElementChild);
            seriesInfo.appendChild(message);
            computerScore = 0;
            userScore = 0;
        } else if (computerScore === 5) {
            message.textContent = 'You have been defeated by the computers, now compute pi for the next 2000 years!';
            seriesInfo.removeChild(seriesInfo.lastElementChild);
            seriesInfo.appendChild(message);
            computerScore = 0;
            userScore = 0;
        } else {
            return;
        }
        message.setAttribute('style','font-weight: bold; font-size: 25px;');
    };

