//COMPUTER CHOICE FUNCTIONS

//define random number to use for computerSelection
function random() {
  x = Math.floor(Math.random() * 3) +1;
  return x
}

// Gets computer choice for round of RPS
function getComputerChoice () {
  x = random()
  if (x == 1) {
    computerSelection = "Rock"
    rockButton.appendChild(pcImage);
  } else if (x == 2) {
      computerSelection = "Scissors"
      scissorsButton.appendChild(pcImage);
  } else if (x == 3) {
      computerSelection = "Paper"
      paperButton.appendChild(pcImage);
  } else {
      console.log("Computer choice broke")
  }
  return computerSelection
}

//PLAYER CHOICE FUNCTIONS
let playerScore = 0;
let compScore = 0;
let roundNumber = 1;
let roundChoice = '';
let roundStatus = '';
let gameStarted = 'No';



const pcImage = document.createElement('img');
pcImage.classList.add('compPick')
pcImage.src = './Images/rps_pc_f0ebdd_with_1a1f26_border.png';

const pageTitle = document.createElement('h1');
pageTitle.textContent = "Rock, Paper, Scissors";
pageTitle.style.color = "#f0ebdd";

const startButton = document.createElement('button');
startButton.textContent = "Start Game";
startButton.classList.add('startButton');

const wrapperDiv = document.createElement('div');
wrapperDiv.classList.add('wrap-all');

const scoreBoard = document.createElement('div');
scoreBoard.classList.add('scoreBoard');



const scores = document.createElement('div');




const playerUI = document.createElement('div');
playerUI.classList.add('playerBoard')

const rockButton = document.createElement('button');
const rockPicture = document.createElement('img');
rockButton.classList.add('buttons', 'rock');
rockButton.setAttribute('id', 'rock')
rockPicture.src = './Images/rps_rock.png';


const paperButton = document.createElement('button');
const paperPicture = document.createElement('img');
paperButton.classList.add('buttons', 'paper');
paperButton.setAttribute('id', 'paper');
paperPicture.src = './Images/rps_paper.png'

const scissorsButton = document.createElement('button');
const scissorsPicture = document.createElement('img');
scissorsButton.classList.add('buttons', 'scissors');
scissorsButton.setAttribute('id', 'scissors')
scissorsPicture.src = './Images/rps_scissors_f0ebdd.png';

const resultDisplay = document.createElement('p');

const footer = document.createElement('div');
footer.textContent = "© GBaughman, 2022";
footer.style.color = "#f0ebdd";
footer.style.textAlign = "center"

document.body.appendChild(wrapperDiv);
wrapperDiv.appendChild(pageTitle);
wrapperDiv.appendChild(startButton)
wrapperDiv.appendChild(footer);
/*
function gameStarter () {
  if (gameStarted == "Yes") {
    console.log('game already started')
  } else {
    gameStarted = "Yes";
    playGame()
  };
}
*/
const buttons = document.querySelectorAll('.buttons');

let playerInput = ""

rockButton.addEventListener('click', () => {
  paperButton.removeAttribute('class', 'paperClicked');
  paperButton.setAttribute('class', 'buttons');
  scissorsButton.removeAttribute('class', 'clicked');
  scissorsButton.setAttribute('class', 'buttons');
  rockButton.setAttribute('class', 'clicked');
  playerInput = "Rock"
  playRound();
  roundTracker();
  scoring();


//  rockButton.removeAttribute('class', 'hover');
});


//TO DO Add hover function
/*
rockButton.addEventListener('mouseover',() => {
  rockButton.setAttribute('class', 'hover');
})

rockButton.addEventListener('mouseleave', () => {
  rockButton.removeAttribute('class', 'hover');
})
*/

paperButton.addEventListener('click', () => {
  paperButton.setAttribute('class', 'paperclicked');
  rockButton.removeAttribute('class', 'clicked');
  rockButton.setAttribute('class', 'buttons');
  scissorsButton.removeAttribute('class', 'clicked');
  scissorsButton.setAttribute('class', 'buttons');
  playerInput = "Paper"
  playRound();
  roundTracker();
  scoring();
});

scissorsButton.addEventListener('click', () => {
  scissorsButton.setAttribute('class', 'clicked');
  rockButton.removeAttribute('class', 'clicked');
  rockButton.setAttribute('class', 'buttons');
  paperButton.removeAttribute('class', 'paperClicked');
  paperButton.setAttribute('class', 'buttons');
  playerInput = 'Scissors';
  playRound();
  roundTracker();
  scoring();
});

//ROUND AND GAME FUNCTIONS

//playRound: Plays one round of Rock Paper Scissors


const roundResult = document.createElement('p');
roundResult.classList.add('result');

const roundResultChoices = document.createElement('p');
roundResultChoices.classList.add('result');

function playRound () {
  let playerChoice = playerInput;
  let computerChoice = getComputerChoice();
  if (computerChoice == playerChoice) {
    roundResult.textContent ="It was a tie!";
    roundResultChoices.textContent ="You both chose " + playerChoice + "!";
    resultDisplay.appendChild(roundResult);
    resultDisplay.appendChild(roundResultChoices);
    roundStatus = "Tie"
  } else if (computerChoice == "Paper" && playerChoice == "Rock" || computerChoice == "Rock" && playerChoice == "Scissors" || computerChoice == "Scissors" && playerChoice == "Paper")  {
    roundResult.textContent ="Computer Wins!";
    roundResultChoices.textContent = computerChoice + " beats " + playerChoice + "!! You lose!";
    resultDisplay.appendChild(roundResult);
    resultDisplay.appendChild(roundResultChoices);
    roundStatus = 'compWin'
  } else if (playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Scissors" && computerChoice == "Paper") {
    roundResult.textContent ="Player Wins!";
    roundResultChoices.textContent = playerChoice + " beats " + computerChoice + "!! You win!";;
    resultDisplay.appendChild(roundResult);
    roundStatus = 'playerWin'
  } else {
    console.log("round broke")
  } return roundStatus;
};

//playGame: Plays a game for five rounds

function roundTracker () {
  if (roundNumber < 5) {
    roundNumber += 1;
    round.textContent = "Next Round: Round " + roundNumber;
    return roundNumber;
  } else {
    scoring();
    gameOver();
};  
}

let round = document.createElement('p');
round.classList.add('round');
round.textContent = "Next Round: Round " + roundNumber;


function scoring () {
  if (roundStatus == "Tie") {
  } else if (roundStatus == "compWin") {
    compScore += 1;
    compScoreTracker.textContent = 'Computer Score: ' + compScore;
    return compScore
  } else if (roundStatus == "playerWin") {
    playerScore += 1
    playerScoreTracker.textContent = "Player Score: " + playerScore;
    return playerScore;
  }
  }

  const playerScoreTracker = document.createElement('p');
  playerScoreTracker.classList.add('score')
  playerScoreTracker.textContent = "Player Score: " + playerScore;
  
  const compScoreTracker = document.createElement('p');
  compScoreTracker.classList.add('score');
  compScoreTracker.textContent = "Computer Score: " + compScore;

function gameOver () {
  wrapperDiv.removeChild(scoreBoard);
  wrapperDiv.removeChild(resultDisplay);
  const gameOverText = document.createElement('p');
  gameOverText.textContent = 'Game Over';
  wrapperDiv.insertBefore(gameOverText, playerUI);
  gameOverText.classList.add('gameOver');
  console.log("Game Over")
  if (compScore > playerScore) {
    const gameOverResults = document.createElement('p');
    gameOverResults.textContent = 'Computer Wins ' + compScore + " to " + playerScore;
    gameOverResults.classList.add('result');
    wrapperDiv.insertBefore(gameOverResults, footer);
  } else if (playerScore > compScore) {
    const gameOverResults = document.createElement('p');
    gameOverResults.textContent = 'You WIN!! ' + playerScore + " to " + compScore;
    gameOverResults.classList.add('result');
    wrapperDiv.insertBefore(gameOverResults, footer);
  } else {
    const gameOverResults = document.createElement('p');
    gameOverResults.textContent = 'It\'s a tie!';
    gameOverResults.classList.add('result');
    wrapperDiv.insertBefore(gameOverResults, footer);
  }
}

startButton.addEventListener('click', () => {
wrapperDiv.removeChild(startButton);
wrapperDiv.removeChild(footer);
wrapperDiv.appendChild(scoreBoard);
scoreBoard.appendChild(round);
scoreBoard.appendChild(scores);
scores.appendChild(compScoreTracker);
scores.appendChild(playerScoreTracker);
wrapperDiv.appendChild(playerUI);
playerUI.appendChild(rockButton);
playerUI.appendChild(paperButton);
playerUI.appendChild(scissorsButton);
rockButton.appendChild(rockPicture);
scissorsButton.appendChild(scissorsPicture);
paperButton.appendChild(paperPicture);
wrapperDiv.appendChild(resultDisplay);
wrapperDiv.appendChild(footer);
});