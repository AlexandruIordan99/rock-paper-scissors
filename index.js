console.log("Hello World!");

let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let i = Math.random();
    let computerChoice;
    if (i < 0.33) {
        computerChoice = "rock";
    } else if (i > 0.33 && i < 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice(){
    return "rock"
}



function compareChoices(computerChoice, HumanChoice){
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    if (computerChoice === HumanChoice){
        return "You both selected " + computerChoice + ". It's a draw!";
    }
    else if (computerChoice === "rock"){
        if (HumanChoice === "scissors"){
            ++computerScore;
            return "You selected " + humanChoice + " but the computer selected " + computerChoice +
                ". You've lost this round. Your score is " + humanScore + " and the computer's score is " +
            computerScore + ".";
        } else{
            ++humanScore;
            return "You selected " + humanChoice + " and the computer selected " + computerChoice +
                ". You've won this round! Your score is " + humanScore + " and the computer's score is " +
            computerScore + ".";
        }
    }
    else if (computerChoice === "paper"){
        if (HumanChoice === "rock"){
            ++computerScore;
            return "You selected " + humanChoice + " but the computer selected " + computerChoice +
                ". You've lost this round. Your score is " + humanScore + " and the computer's score is " +
            computerScore + ".";
        } else{
            ++humanScore;
            return "You selected " + humanChoice + " and the computer selected " + computerChoice +
                ". You've won this round! Your score is " + humanScore + " and the computer's score is " +
            computerScore + ".";
        }
    }
    else if (computerChoice === "scissors"){
        if (HumanChoice === "paper"){
            ++computerScore;
            return "You selected " + humanChoice + " but the computer selected " + computerChoice +
                ". You've lost this round. Your score is " + humanScore + " and the computer's score is " +
            computerScore + ".";
        } else{
            ++humanScore;
            return "You selected " + humanChoice + " and the computer selected " + computerChoice +
                ". You've won this round! Your score is " + humanScore + " and the computer's score is " +
                computerScore + ".";
        }
    }
}

function playForSomeRounds(rounds){
    for (let i =1; i <rounds; i++){
        console.log(compareChoices());
    }
}

console.log(getComputerChoice());

console.log(compareChoices(getComputerChoice(), getHumanChoice()));

playForSomeRounds(3);