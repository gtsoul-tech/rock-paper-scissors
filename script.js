function getComputerChoice(){
    let choice= Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if(choice == 1){
        return "rock";
    }else if(choice == 2){
        return "paper";
    }else if(choice == 3){
        return "scissors";
    }else{
        return undefined;
    }
}

function round(playerSelection,computerSelection){
    let playerSelectionInsesitive = playerSelection.toLowerCase();
    if(playerSelectionInsesitive === computerSelection){
        return `Its a tie, You both played ${playerSelectionInsesitive}`;
    }else if(playerSelectionInsesitive === "rock" && computerSelection === "paper"){
        return `You lose! Paper beats ${playerSelectionInsesitive}`;
    }else if(playerSelectionInsesitive === "rock" && computerSelection === "scissors"){
        return `You Win! Rock beats ${computerSelection}`;
    }else if(playerSelectionInsesitive === "paper" && computerSelection === "scissors"){
        return `You lose! Scissors beats ${playerSelectionInsesitive}`;
    }else if(playerSelectionInsesitive === "paper" && computerSelection === "rock"){
        return `You Win! Paper beats ${computerSelection}`;
    }else if(playerSelectionInsesitive === "scissors" && computerSelection === "rock"){
        return `You Lose! Rock beats ${playerSelectionInsesitive}`;
    }else if(playerSelectionInsesitive === "scissors" && computerSelection === "paper"){
        return `You Win! Scissors beats ${computerSelection}`;
    }
}


console.log(round(getComputerChoice(),getComputerChoice()));