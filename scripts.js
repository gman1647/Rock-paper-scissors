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
let gameStarted = 'No'



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

const round = document.createElement('p');
round.classList.add('round');
round.textContent = "Round Number " + roundNumber;

const scores = document.createElement('div');


const playerScoreTracker = document.createElement('p');
playerScoreTracker.classList.add('score')
playerScoreTracker.textContent = "Player Score: " + playerScore;

const compScoreTracker = document.createElement('p');
compScoreTracker.classList.add('score');
compScoreTracker.textContent = "Computer Score: " + compScore;

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

function gameStarter () {
  if (gameStarted == "Yes") {
    console.log('game already started')
  } else {
    gameStarted = "Yes";
    playGame()
  };
}

const buttons = document.querySelectorAll('.buttons');

let playerInput = ""

rockButton.addEventListener('click', () => {
  console.log(roundNumber)
  paperButton.removeAttribute('class', 'paperClicked');
  paperButton.setAttribute('class', 'buttons');
  scissorsButton.removeAttribute('class', 'clicked');
  scissorsButton.setAttribute('class', 'buttons');
  rockButton.setAttribute('class', 'clicked');
  playerInput = "Rock"
  playRound()
  gameStarter()

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
});

scissorsButton.addEventListener('click', () => {
  scissorsButton.setAttribute('class', 'clicked');
  rockButton.removeAttribute('class', 'clicked');
  rockButton.setAttribute('class', 'buttons');
  paperButton.removeAttribute('class', 'paperClicked');
  paperButton.setAttribute('class', 'buttons');
  playerInput = 'Scissors';
  playRound();
});

//ROUND AND GAME FUNCTIONS

//playRound: Plays one round of Rock Paper Scissors
let roundStatus ='';

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

function playGame () {
  console.log("Game Started")
  roundNumber += 1;
  console.log(roundNumber)
  return roundNumber;
  //something like this while it waits, I think, then each round can increment the round number and keep score from there. 
  // didn't work. Made an infinte loop. Need to add an event listener, maybe?
}

/*
  if (compScore > playerScore) {
    console.log("Computer Wins!!");
  } else if (playerScore > compScore) {
    console.log("Player Wins!!");
  } else {
    console.log("Looks Like a Tie!!")
  }*/


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
console.log(gameStarted)
});