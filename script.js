const rounds = 3;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

console.log(rock);
console.log(paper);
console.log(scissor);


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
    console.log("PC: " + x);
    return x;
}
let computerSelection;

/* decisione utente */
let playerSelection; 

/* giocata turno */
function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lost! Paper beats Rock";
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Won! Paper beats Rock";
    }else if(playerSelection === "paper" && computerSelection === "scissor"){
        return "You Lost! Scissor beats Paper"; 
    }else if(playerSelection === "scissor" && computerSelection === "paper"){
        return "You Won! Scissor beats Paper";
    }else if(playerSelection === "scissor" && computerSelection === "rock"){
        return "You Lost! Rock beats Scissor";
    }else if(playerSelection === "rock" && computerSelection === "scissor"){
        return "You Won! Rock beats Scissor";
    }else if(playerSelection === "rock" && computerSelection === "rock"){
        return "skip";
    }else if(playerSelection === "paper" && computerSelection === "paper"){
        return "skip";
    }else if(playerSelection === "scissor" && computerSelection === "scissor"){
        return "skip";
    }else{
        return "C'è qualche problema in playRound";
    }
}

/* game */
function game(){
    let player = 0;
    let computer = 0;
    console.log("Inizio partita: ")
    /** inizio partita */
    for(let i = 1; i < rounds+1; i++){
        if(i<rounds){
            console.log("Turno: " + i);
        }else{
            console.log("Ultimo turno!");
        }
        
        /** chosing rock/paper/scissor cpu e utente */
        computerSelection = computerPlay();
        /*console.log("scelta pc fatta: " + computerSelection);*/
        playerSelection = prompt('Con cosa giochi?', 'rock/paper/scissor')?.toLowerCase();
        /*console.log("scelta utente fatta: " + playerSelection);*/

        if(playRound(playerSelection, computerSelection).substring(0,8) == "You Lost"){
            computer++;
            console.log(playRound(playerSelection, computerSelection));
        }else if(playRound(playerSelection, computerSelection).substring(0,7) == "You Won"){
            player++;
            console.log(playRound(playerSelection, computerSelection));
        }else if(playRound(playerSelection, computerSelection).substring(0,4) == "skip"){
            i--;
            console.log("Equal");
        }else{
            console.log("c'è qualcosa che non va in game()");
        }
    } 
    if(player > computer){
        return "YOU WON THE GAME!";
    }else{
        return "You lost the game :(";
    }
}


//console.log(game());