function getComputerChoice() {
    const rps = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    return rps[choice];
}

function playRps(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == "rock" && computerSelection == "Paper" ) {
        return "You Lose!!";
    } else if(playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        return "You Win!!";
    } else if(playerSelection.toLowerCase() == "rock" && computerSelection == "Rock") {
        return "Draw !!";
    } else if(playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        return "You Win!!";
    } else if(playerSelection.toLowerCase() == "paper" && computerSelection == "Paper") {
        return "Draw !!";
    } else if(playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        return "You lose!";
    } else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        return "You lose!!";
    } else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        return "You Win!!";
    } else {
        return "Draw!!";
    }
}




function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Pick between rock, paper, scissors", "rock");
        const computerSelection = getComputerChoice();
        console.log(playRps(playerSelection, computerSelection));
    }
}