let computerScore = 0;
let humanScore = 0;
const prompt = require("prompt-sync")({sigint:true});

function getComputerChoice(){
    let i = Math.random();
    let computerChoice ="";
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
    let humanChoice = prompt("Give us your choice of rock, paper or scissors in lower case: ")
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        console.log("Your input is wrong. Please try again.");
        humanChoice = prompt("Give us your choice of rock, paper or scissors in lower case.")
    }
    return humanChoice;

}



function bestOf(rounds) {
    for (let i = 1; i <= rounds; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        console.log(typeof (computerChoice), typeof (humanChoice));
        if (computerChoice === humanChoice) {
            console.log("You both selected " + computerChoice + ". It's a draw!");
        } else if (computerChoice === "rock") {
            if (humanChoice === "scissors") {
                ++computerScore;
                console.log("You selected " + humanChoice + " but the computer selected " + computerChoice +
                    ". You've lost this round. Your score is " + humanScore + " and the computer's score is " +
                    computerScore + ".");
            } else {
                ++humanScore;
                console.log("You selected " + humanChoice + " and the computer selected " + computerChoice +
                    ". You've won this round! Your score is " + humanScore + " and the computer's score is " +
                    computerScore + ".");
            }
        } else if (computerChoice === "paper") {
            if (humanChoice === "rock") {
                ++computerScore;
                console.log("You selected " + humanChoice + " but the computer selected " + computerChoice +
                    ". You've lost this round. Your score is " + humanScore + " and the computer's score is " +
                    computerScore + ".");
            } else {
                ++humanScore;
                console.log("You selected " + humanChoice + " and the computer selected " + computerChoice +
                    ". You've won this round! Your score is " + humanScore + " and the computer's score is " +
                    computerScore + ".");
            }
        } else if (computerChoice === "scissors") {
            if (humanChoice === "paper") {
                ++computerScore;
                console.log("You selected " + humanChoice + " but the computer selected " + computerChoice +
                    ". You've lost this round. Your score is " + humanScore + " and the computer's score is " +
                    computerScore + ".");
            } else {
                ++humanScore;
                console.log("You selected " + humanChoice + " and the computer selected " + computerChoice +
                    ". You've won this round! Your score is " + humanScore + " and the computer's score is " +
                    computerScore + ".");
            }
        }
    }

    if (computerScore > humanScore) {
        return console.log("The computer has won. It is ahead of you by " + (computerScore - humanScore) +  " points.");
    } else if (computerScore < humanScore) {
        return console.log("You have won. You are ahead of the computer by " + (humanScore - computerScore) + " points.");
    }


}


bestOf(5);