// prompt user to begin game/round with enter click (for later!)
// For now will keep in browser as a prompt to being to start game

// computer rando picks one of the three options

function getComputerChoice() {
    let result = Math.random();
    console.log(result);
    if (result <= 0.33) {
        result = "rock";
        console.log(result);
    } else if (result >0.33 && result <= 0.66) {
        result = "paper";
        console.log(result);
    } else {
        result = "scissors";
        console.log(result);
    }
    return result;
}
    

// user is prompted to type (make it not case sensitive) one of the three options

// program compares the two chosen values made by computer and user and a winner is chosen (implied this is where we tell the program conditions of victory [rock beats scissor, scissors beats paper, paper beats rock], no points awarded for a tie).
      
// user is met with a statement of winning or losing the round

// running total of the series updated

// loop the program for best of 9 series

// after condition of user or computer winning five rounds of the loop user to be met with statement of winning or losing the series

// prompt for user to start another series is given (also should be able to pick this option in the middle of a already running series to start a new series before the current is done)

