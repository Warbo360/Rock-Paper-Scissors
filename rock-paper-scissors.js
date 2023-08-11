// prompt user to begin game/round with enter click (for later!)
// For now will keep in browser as a prompt to being to start game

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

// Global variables used in functions

    let userScore = 0;
    let computerScore = 0;
    let roundResult;
    let playerChoice;

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

// const computerChoice = getComputerChoice();
    
// user is prompted to type (make it not case sensitive) one of the three options

    // prompt('Select Rock, Paper, or Scissors').toLowerCase(); commented out so the page loading does not prompt the user, instead inputed as a function argument that way user is prompted when they tell the program to start start a game

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
        } else {
            roundResult = 'invalid input, reload page and try again';
        }
    }
    

// Function calling the playRound() function and seriesScore() function with inputs for the latter functions to prompt user when they want to start a game, and computer choice is not made until that time as well

    function startRound() {
        playRound(getPlayerChoice(), getComputerChoice());
        console.log(roundResult);
        seriesScore(roundResult);
        const computerChoiceDiv = document.querySelector('.computer-choice');
        const playerChoiceDiv = document.querySelector('.player-choice'); 
        const imgPlayer = document.createElement('img');
        const imgComputer = document.createElement('img')
        imgPlayer.src = ('./img/emile-guillemot-tfFWBhEACcQ-unsplash.jpg');
        imgComputer.src = ('./img/emile-guillemot-tfFWBhEACcQ-unsplash.jpg');
        if (roundResult === 'You both picked rock, its a tie!') {  
            imgPlayer.src = ('./img/emile-guillemot-tfFWBhEACcQ-unsplash.jpg');
            imgComputer.src = ('./img/emile-guillemot-tfFWBhEACcQ-unsplash.jpg');
            playerChoiceDiv.removeChild(playerChoiceDiv.lastElementChild);
            computerChoiceDiv.removeChild(computerChoiceDiv.lastElementChild);
            playerChoiceDiv.appendChild(imgPlayer);
            computerChoiceDiv.appendChild(imgComputer);
        } else {
            return;
        }
        
    }

// running total of the series updated also tells user the score in the series

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
    }

// loop the program for best of 9 series (work in progress)

    function logSeries() {
        startRound();
        if (userScore === 5) {
            console.log('Congrats you have defeated the computers and have saved us all!!');
            computerScore = 0;
            userScore = 0;
        } else if (computerScore === 5) {
            console.log('You have been defeated by the computers, now compute pi for the next 2000 years!')
            computerScore = 0;
            userScore = 0;
        } else {
            console.log('Click an option to continue')
        }
    };

     

// This function in use for now until I can learn to loop the startRound() function for a full series where the end result is either the computer or user winning 5 total games; 

    // function startSeries() {
    //     userScore = 0;
    //     computerScore = 0;
    //     startRound();
    //     startRound();
    //     startRound();
    //     startRound();
    //     startRound();
    //     startRound();
    //     startRound();
    //     startRound();
    //     startRound();

    // after condition of user or computer winning five rounds of the loop user to be met with statement of winning or losing the series (just currently set to who has a greater score until I can figure out how to loop the function until someone wins 5 games)

    //     if (userScore > computerScore) {
    //         console.log('Congrats you have defeated the computer!');
    //     } else {
    //         console.log('The computers are taking over and you have failed us!');
    //     }
    // }

// prompt for user to start another series is given (also should be able to pick this option in the middle of a already running series to start a new series before the current is done)

