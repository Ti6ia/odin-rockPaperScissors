console.log("Rock Paper Scissors");

/* decisione pc*/
function computerPlay(){
    let x = Math.floor(Math.random()*(3-1+1))+1;
    if(x == 1){
        x = "rock";
    }else if(x == 2){
        x = "paper";
    }else if(x == 3){
        x = "scissor";
    }else{
        console.log("qualcosa non va in computerPlay");
    }
    return x;
}

let computerSelection = computerPlay();
console.log(computerSelection);

/* decisione utente */
let playerSelection = prompt('Con cosa giochi?', 'rock/paper/scissor').toLowerCase();
console.log(playerSelection);

/* giocata turno */
function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock";
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Won! Paper beats Rock";
    }else if(playerSelection === "paper" && computerSelection === "scissor"){
        return "You Lose! Scissor beats Paper"; 
    }else if(playerSelection === "scissor" && computerSelection === "paper"){
        return "You Won! Scissor beats Paper";
    }else if(playerSelection === "scissor" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissor";
    }else if(playerSelection === "rock" && computerSelection === "scissor"){
        return "You Won! Rock beats Scissor";
    }else{
        return "C'è qualche problema in playRound";
    }
}
console.log(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection).substring(0,8));

/* game */
function game(){
    let player = 0;
    let computer = 0;
    console.log("game pre ciclo")
    for(let i = 0; i < 5; i++){
        if(playRound.substring(0,8) == "You Lose"){
            computer++;
        }else if(playRound.substring(0,8) == "You Won!"){
            player++;
        }else{
            console.log("c'è qualcosa che non va in game()");
        }
        console.count("Game");
    }
    if(player > computer){
        return "You won the game!";
    }else{
        return "You lost the game :(";
    }
}

