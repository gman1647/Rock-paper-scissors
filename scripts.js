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

//requests player input

function playerSelection(){
  let playerSelection = prompt('Enter "Rock", "Paper", or "Scissors".')
  return playerSelection;
}

// gets player's selection and formats it using capitalize function

function getPlayerChoice(x) {
  z = capitalize(x);
  y = validatePlayerSelection(z);
  return y;
  }

//trims and formats player selection

function capitalize (x) {
  trimmed = x.trim();
  firstLetter = trimmed.charAt(0);
  capLetter = firstLetter.toUpperCase(0);
  restWord = trimmed.slice(1,);
  lowLetters = restWord.toLowerCase();
  newWord = capLetter.concat (lowLetters);
  return newWord;
}

//function validates that players input is entered correclty to compair with computer's choice

function validatePlayerSelection (playerSelection) {
    if (playerSelection == "Rock") {
    playerSelection = "Rock";
    return playerSelection;
  } else if (playerSelection == "Scissors") {
    playerSelection = "Scissors";
    return playerSelection;
  } else if (playerSelection == "Paper") {
    playerSelection = "Paper";
    return playerSelection;
  } else {
    return "Error. Please refresh the page and try again.";
//Possible logic bug. This appears to cause player to show as winning
  }
}

//To get properly formated player selection: getPlayerChoice(playerSelection(validatePlayerSelection))

//ROUND AND GAME FUNCTIONS

//playRound: Plays one round of Rock Paper Scissors
function playRound () {
  let playerChoice = getPlayerChoice(playerSelection(validatePlayerSelection))
  let computerChoice = getComputerChoice()
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
}

//playGame: Plays a game for five rounds
let playerScore = 0
let compScore = 0

function playGame () {
for (let i = 0; i < 5; i++) {
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

console.log(playGame());