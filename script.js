let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const userPoint = document.querySelector("#userr");
const computerPoint = document.querySelector("#computerr");
const winnerText = document.querySelector("#winner");
const resetBtn = document.querySelector("#reset");
const compMove = document.querySelector("#compmov");

// Which move beats which
const beats = {
    rock: "scissor",
    paper: "rock",
    scissor: "paper"
};

// Computer choice
function getComputerChoice() {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Update computer image
function updateComputerMove(move) {
    compMove.innerHTML = `<img src="${move}.png" alt="${move}">`;
}

// Check winner
function checkWinner(userChoice, computerChoice) {

    updateComputerMove(computerChoice);

    if (userChoice === computerChoice) {
        winnerText.innerText = "It's a Draw!";
        return;
    }

    if (beats[userChoice] === computerChoice) {
        userScore++;
        userPoint.innerText = userScore;
        winnerText.innerText = "You Win!";
    } else {
        computerScore++;
        computerPoint.innerText = computerScore;
        winnerText.innerText = "Computer Wins!";
    }
}

// User choice
choices.forEach(choice => {

    choice.addEventListener("click", () => {

        const userChoice = choice.id;
        const computerChoice = getComputerChoice();

        console.log("User:", userChoice);
        console.log("Computer:", computerChoice);

        checkWinner(userChoice, computerChoice);

    });

});

// Reset
resetBtn.addEventListener("click", () => {

    userScore = 0;
    computerScore = 0;

    userPoint.innerText = 0;
    computerPoint.innerText = 0;

    winnerText.innerText = "Who is winner?";
    compMove.innerHTML = `<img src="mark.png" alt="Question Mark">`;

});