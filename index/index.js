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


const buttons = document.querySelector("#buttons");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => receiveChoice("rock"));
paperButton.addEventListener("click", () => receiveChoice("paper"));
scissorsButton.addEventListener("click", () => receiveChoice ("scissors"));



function receiveChoice(humanChoice) {
    let computerScore = 0;
    let humanScore = 0;

    while(humanScore < rounds && computerScore < rounds) {
        let computerChoice = getComputerChoice();
        let humanChoice= getHumanChoice();
        console.log(typeof (computerChoice), typeof (humanChoice));
        if (computerChoice === humanChoice) {
            console.log("You both selected " + computerChoice + ". It's a draw!");
        } else if (computerChoice === "rock" && humanChoice === "scissors" ||
                   computerChoice === "paper" && humanChoice === "rock"    ||
                   computerChoice === "scissors" && humanChoice === "paper") {
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
        updateScore();

}

function updateScore(){
    document.getElementById("#human-score").textContent ="Your score is ${humanScore}";
    document.getElementById("#computer-score").textContent="The computer's score is ${computerScore}";
}
