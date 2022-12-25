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
  } else if (x == 2) {
      computerSelection = "Scissors"
  } else if (x == 3) {
      computerSelection = "Paper"
  } else {
      console.log("Computer choice broke")
  }
  return computerSelection
}

//PLAYER CHOICE FUNCTIONS




const pageTitle = document.createElement('h1');
pageTitle.textContent = "Rock, Paper, Scissors";
pageTitle.style.color = "#f0ebdd";

const wrapperDiv = document.createElement('div');
wrapperDiv.classList.add('wrap-all');

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

const footer = document.createElement('div');
footer.textContent = "© GBaughman, 2022";
footer.style.color = "#f0ebdd";
footer.style.textAlign = "center"

document.body.appendChild(wrapperDiv);
wrapperDiv.appendChild(pageTitle);
wrapperDiv.appendChild(playerUI);
playerUI.appendChild(rockButton);
playerUI.appendChild(paperButton);
playerUI.appendChild(scissorsButton);
rockButton.appendChild(rockPicture);
scissorsButton.appendChild(scissorsPicture);
paperButton.appendChild(paperPicture);
wrapperDiv.appendChild(footer);

const buttons = document.querySelectorAll('.buttons');

/*buttons.forEach(buttons => {
  buttons.addEventListener('click', function handleClick(event) {
    alert('box clliked', event);
    buttons.setAttribute('class', 'clicked');
  });
});*/

let playerInput = ""

/*rockButton.addEventListener('click', () => {
  
});*/

rockButton.addEventListener('click', () => {
  rockButton.setAttribute('class', 'clicked');
  playerInput = "Rock";
  playRound();
  //console.log(playerChoice)
});

paperButton.addEventListener('click', () => {
  paperButton.setAttribute('class', 'paperclicked');
  playerInput  = "Paper";
  playRound();
  //playerChoice = "Paper";
  //console.log(playerChoice)
});

scissorsButton.addEventListener('click', () => {
  scissorsButton.setAttribute('class', 'clicked');
  playerInput = "Scissors";
  playRound();
 // playerChoice = "Scissors";
  //console.log(playerChoice)
});

// Gets player choiice for round of rps 
/*function getPlayerChoice() {
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id == "rock") {
      let playerChoice = "Rock";
      console.log(playerChoice);
    } else if (button.id == "paper") {
      let playerChoice = "Paper";
      console.log(playerChoice);
    } else {
      let playerChoice = "Scissors";
      console.log(playerChoice);
    }
    return playerChoice;
  });
});
}*/

//ROUND AND GAME FUNCTIONS

//playRound: Plays one round of Rock Paper Scissors



function playRound () {
  let playerChoice = playerInput;
  let computerChoice = getComputerChoice();
  console.log("Player " + playerChoice)
  console.log("Computer " + computerChoice)
  if (computerChoice == playerChoice) {
    console.log("You both chose " + playerChoice + "!")
    return "tie"
  } else if (computerChoice == "Paper" && playerChoice == "Rock" || computerChoice == "Rock" && playerChoice == "Scissors" || computerChoice == "Scissors" && playerChoice == "Paper")  {
    console.log(computerChoice + " beats " + playerChoice + "!! You lose!")
    return "compWin";
  } else if (playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Scissors" && computerChoice == "Paper") {
    console.log(playerChoice + " beats " + computerChoice + "!! You win!!!")
    return "playerWin";
  } else {
    console.log("round broke")
  }
};

//playGame: Plays a game for five rounds
let playerScore = 0
let compScore = 0

function playGame () {
for (let i = 0; i < 1; i++) {     //CHANGE THIS BACK!! CHANGED TO ONE ROUND FOR UI WORK
  round = playRound()
  console.log(round)
      if (round == "playerWin") {
        playerScore += 1;
        console.log("Round " + (i +1));
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
      } else if (round == "compWin") {
        compScore += 1;
        console.log("Round " + (i + 1));
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
      } else if (round == "tie") {
        compScore += 1, playerScore += 1;
        console.log("Round " + (i + 1));
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
      } else {
        console.log("something broke")
      }
  }
  if (compScore > playerScore) {
    console.log("Computer Wins!!");
  } else if (playerScore > compScore) {
    console.log("Player Wins!!");
  } else {
    console.log("Looks Like a Tie!!")
  }
}

