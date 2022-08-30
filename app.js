const answer = ["rock", "paper", "scissors"]
const btn = document.querySelectorAll('button');
const scoreboard = document.querySelector('.scoreboard');
const winner = document.querySelector('.winner');
let playerOne = 0;
let computerOne = 0;

function getComputerChoice(){
    return answer[Math.floor(Math.random()*answer.length)];
};

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    //playerSelection = getComputerChoice();
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock'))
        {
        playerOne++;
        winner.textContent= `Player One Wins!`
        } else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
            (computerSelection == 'scissors' && playerSelection == 'paper') ||
            (computerSelection == 'paper' && playerSelection == 'rock'))
        {
        computerOne++;
        winner.textContent= `Computer One Wins!`
        } else if ((computerSelection == 'rock' && playerSelection == 'rock') ||
        (computerSelection == 'scissors' && playerSelection == 'scissors') ||
        (computerSelection == 'paper' && playerSelection == 'paper'))
        {
        winner.textContent= `It's a tie!`
        } else if (playerSelection == 'reset'){
        return;
        };

    if (computerOne === 5){
            winner.textContent= `Computer One Wins the whole thing!`
    }else if (playerOne === 5){
            winner.textContent= `Player One Wins the whole thing!`
        }
}

btn.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('rock')){
            playerSelection = 'rock';
        } else if (button.classList.contains('scissors')){
            playerSelection = 'scissors';
        } else if (button.classList.contains('paper')){
            playerSelection = 'paper';
        } else if(button.classList.contains('reset')){
            playerOne = 0;
            computerOne = 0;
            playerSelection = 'reset';
        }
       
        playRound(playerSelection)

        scoreboard.textContent = `Score Board: Player Score: ${playerOne} 
        Computer Score: ${computerOne}`;

        if(playerOne === 5){
           winner.textContent= `Player One Wins! Reset to win again.`
        } else if(computerOne === 5) {
            winner.textContent = `Computer Wins! Reset to try again.`
        }
        
        disableButton();
        
        resetGame();    
    })});

function disableButton(){
    btn.forEach((button) => {
        if (playerOne === 5 || computerOne === 5){
            button.disabled = true;
            } else button.disabled = false;

        if (button.classList.contains('reset')){
            button.disabled = false;
        }
    });
};

function resetGame(){
    btn.forEach((button) => {
        button.addEventListener('click', () => {
        if (button.classList.contains('reset')){
            playerOne == 0 && computerOne == 0;
            winner.textContent = ``
    }
})})};




    