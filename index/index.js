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


let computerScore = 0;
let humanScore = 0;


function receiveChoice(humanChoice) {
    eraseGameOverHeader()
    let computerChoice = getComputerChoice();
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
    updateScore()
    determineWinner()
}

function updateScore() {
    document.querySelector("#human-score").textContent ="Your score is " + humanScore;
    document.querySelector("#computer-score").textContent="The computer's score is " +computerScore;
}

const scoringArea = document.querySelector(".scoring-area");
const gameOverHeader = scoringArea.appendChild(document.createElement("h3"));

function determineWinner() {
    if (humanScore ===5) {
            gameOverHeader.textContent = "You have reached 5 points! You've won this match!" ;
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore ===5) {
            gameOverHeader.textContent = "The computer has reached 5 points! You've lost this match.";
            humanScore = 0;
            computerScore = 0;
        }
}

function eraseGameOverHeader() {
    if (humanScore ===0 && computerScore ===0) {
        gameOverHeader.textContent ="";
    }
}

