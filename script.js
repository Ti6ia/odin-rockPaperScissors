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
let computerSelection;

/* decisione utente */
let playerSelection; 

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
    for(let i = 1; i < 6; i++){
        if(i<5){
            console.log("Turno: " + i);
        }else{
            console.log("Ultimo turno!");
        }
        
        /** chosing rock/paper/scissor cpu e utente */
        computerSelection = computerPlay();
        /*console.log("scelta pc fatta: " + computerSelection);*/
        playerSelection = prompt('Con cosa giochi?', 'rock/paper/scissor').toLowerCase();
        /*console.log("scelta utente fatta: " + playerSelection);*/

        if(playRound(playerSelection, computerSelection).substring(0,8) == "You Lose"){
            computer++;
            console.log("CPU win");
        }else if(playRound(playerSelection, computerSelection).substring(0,7) == "You Won"){
            player++;
            console.log("Player WIN!");
        }else if(playRound(playerSelection, computerSelection).substring(0,4) == "skip"){
            i--;
        }else{
            console.log("c'è qualcosa che non va in game()");
        }
    }
    if(player > computer){
        return "YOU WIN THE GAME!";
    }else{
        return "You lost the game :(";
    }
}


console.log(game());
