let player=0;
let computer=0;

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
function game(playerSelection){
    //for(let i=0;i<5;i++){
        //let playerSelection = prompt("Do you want to play Rock,Paper or Scissors?");
        let result = playRound(playerSelection,getComputerChoice());
        if(result == -1){
            computer++;
        }else if (result == 0){
            //tie
        }else if(result == 1){
            player++;
        }
    //}
    if(player == 5 || computer ==5){
        if(player > computer){
            player=0;
            computer=0;
            return "Player wins!";
        }else if(computer> player){
            player=0;
            computer=0;
            return "Computer wins!";
        }else {
            player=0;
            computer=0;
            return "Its a tie";
        }
    }else{
        return "Player: " + player + "| Computer: " + computer;
    }

}
const resultDiv= document.querySelector("#results");
const buttons = document.querySelectorAll('button');
const arrayButtons = Array.prototype.slice.call(buttons);
for(let i=0;i<arrayButtons.length;i++){
    arrayButtons[i].addEventListener("click",() => {resultDiv.textContent =game(arrayButtons[i].value);});
}

