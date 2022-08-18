const answer = ["rock", "paper", "scissors"]
let playerOne = 0;
let computerOne = 0;



function getComputerChoice(){
    return answer[Math.floor(Math.random()*answer.length)];
};

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = getComputerChoice();
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock'))
        {
        playerOne++;
        return "Player 1 wins";}

    else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
            (computerSelection == 'scissors' && playerSelection == 'paper') ||
            (computerSelection == 'paper' && playerSelection == 'rock'))
        {;
        computerOne++;
        return "Computer Wins";}
    else ((computerSelection == 'rock' && playerSelection == 'rock') ||
        (computerSelection == 'scissors' && playerSelection == 'scissors') ||
        (computerSelection == 'paper' && playerSelection == 'paper'))
        {return "It's a tie";}
}

function game(){
    for (let i = 0; i < 99; i++){
    let playerChoice = prompt("Rock, Paper, scissors?").toLowerCase;
    computerSelection = getComputerChoice();
    let result = playRound(playerChoice, computerSelection);
    console.log(`Your points ${playerOne}`);
    console.log(`Computer points ${computerOne}`);
    if (computerOne === 5 || playerOne === 5) {
        break;
    };
}
}
    