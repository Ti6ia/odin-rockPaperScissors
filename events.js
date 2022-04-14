const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

let playerSelection;

rock.addEventListener('click', () => {
    playerSelection = "rock";
    document.getElementById("result").innerText = "Result: " + playRound(playerSelection, computerSelection);
});

paper.addEventListener('click', () => {
    playerSelection = "paper";
    document.getElementById("result").innerText = "Result: " + playRound(playerSelection, computerSelection);
});

scissor.addEventListener('click', () => {
    playerSelection = "scissor";
    document.getElementById("result").innerText = "Result: " + playRound(playerSelection, computerSelection);
});

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
    //console.log("PC: " + x);
    return x;
}
let computerSelection;

/* giocata turno */
function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    console.log("Player: " + playerSelection);
    document.getElementById("player").innerText = "Player: " + playerSelection;
    console.log("PC: " + computerSelection);
    document.getElementById("PC").innerText = "PC: " + computerSelection;
    if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lost!";
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Won!";
    }else if(playerSelection === "paper" && computerSelection === "scissor"){
        return "You Lost!"; 
    }else if(playerSelection === "scissor" && computerSelection === "paper"){
        return "You Won!";
    }else if(playerSelection === "scissor" && computerSelection === "rock"){
        return "You Lost!";
    }else if(playerSelection === "rock" && computerSelection === "scissor"){
        return "You Won!";
    }else if(playerSelection === "rock" && computerSelection === "rock"){
        return "Equal";
    }else if(playerSelection === "paper" && computerSelection === "paper"){
        return "Equal";
    }else if(playerSelection === "scissor" && computerSelection === "scissor"){
        return "Equal";
    }else{
        return "C'è qualche problema in playRound";
    }
}
