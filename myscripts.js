function computerPlay(){
    let ranNum = Math.floor(Math.random() * Math.floor(3));
    if(ranNum === 0){
        return "rock";
    }
    else if(ranNum === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === "rock" && computerSelection === "rock"){
        return "Tie! Rock can't beat rock!";
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats rock!";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats Scissors!";
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats rock!";
    }
    else if(playerSelection === "paper" && computerSelection === "paper"){
        return "Tie! Paper can't beat paper!";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beats paper!";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! Rock beats scissors!";
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beats paper!";
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors"){
        return "Tie! Scissors can't beat scissors!";
    }
}
function game(){
    let win = 0;
    for(i = 1; i < 6; i++){
        let playerSelection = window.prompt("rock, paper, or scissors?");
        let computerSelection = computerPlay();
        let answer = playRound(playerSelection, computerSelection);
        if(answer.search("win") != -1){
            win++;
        }
        console.log(answer);
        
    }
    //template literals
    console.log(`You have won ${ win } games`);
}