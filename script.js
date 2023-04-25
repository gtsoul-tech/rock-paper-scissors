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

function playRound(playerSelection,computerSelection){
    let playerSelectionInsesitive = playerSelection.toLowerCase();
    //0 tie, -1 player lose, 1 player win 
    if(playerSelectionInsesitive === computerSelection){
        return 0;
    }else if(playerSelectionInsesitive === "rock" && computerSelection === "paper"){
        return -1;
    }else if(playerSelectionInsesitive === "rock" && computerSelection === "scissors"){
        return 1;
    }else if(playerSelectionInsesitive === "paper" && computerSelection === "scissors"){
        return -1;
    }else if(playerSelectionInsesitive === "paper" && computerSelection === "rock"){
        return 1;
    }else if(playerSelectionInsesitive === "scissors" && computerSelection === "rock"){
        return -1;
    }else if(playerSelectionInsesitive === "scissors" && computerSelection === "paper"){
        return 1;
    }
}
function game(){
    let player=0;
    let computer=0;
    for(let i=0;i<5;i++){
        let playerSelection = prompt("Do you want to play Rock,Paper or Scissors?");
        let result = playRound(playerSelection,getComputerChoice());
        if(result == -1){
            computer++;
        }else if (result == 0){
            //tie
        }else if(result == 1){
            player++;
        }
    }
    if(player > computer){
        return "Player wins!";
    }else if(computer> player){
        return "Computer wins!";
    }else {
        return "Its a tie";
    }

}
