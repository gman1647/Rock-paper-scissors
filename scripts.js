//test console
console.log("Hello World");

//define random number to use for computerSelection
//let random = Math.floor(Math.random() * 3) + 1;

//check rng
//console.log(random)

//requests player input
let playerSelection = prompt('Enter "Rock", "Paper", or "Scissors".')

//assign computerChoice
let computerChoice = getComputerChoice()

//defines playerChoice
let playerChoice = getPlayerChoice(playerSelection)

//let round = playRound(computerChoice, playerChoice)

//creates computer's random rock paper or scissor choice
function getComputerChoice (random) {
    if (random == 1) {
      computerSelection = "Rock"
    } else if (random == 2) {
        computerSelection = "Scissors"
    } else
        computerSelection = "Paper"
    return computerSelection
}

// gets player's selection and formats it
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
  }
  else if (playerSelection == "Scissors") {
    playerSelection = "Scissors";
    return playerSelection;
  } 
  else if (playerSelection == "Paper") {
    playerSelection = "Paper";
    return playerSelection;
  } else {
    return "Try again";
//logic bug. this causes player to show as winning
  }
}

//console.log(computerChoice);
//console.log(playerChoice);
//console.log(playRound(computerChoice, playerChoice));
//console.log(whoWon);

//function playRound: Plays one round of Rock Paper Scissors
function playRound (computerChoice, playerChoice) {
  if (computerChoice == playerChoice) {
    return "It's a tie!!"
  } else if (computerChoice == "Paper" && playerChoice == "Rock" || computerChoice == "Rock" && playerChoice == "Scissors" || computerChoice == "Scissors" && playerChoice == "Paper")  {
    return computerChoice + " beats " + playerChoice + "! Computer wins!!";
  } else {
    return playerChoice + " beats " + computerChoice + "! You win!!";
  }
}

//function game: keeps track of score 

function playGame () {
  for (let i=0, compScore = 0, playerScore = 0; i < 5; i++) {
    let random = Math.floor(Math.random() * 3) + 1;
    let computerChoice = getComputerChoice(random);
    let playerSelection = prompt('Enter "Rock", "Paper", or "Scissors".');
    let playerChoice = getPlayerChoice(playerSelection);
    let round = playRound(computerChoice, playerChoice);
      if (round.slice(-3)== "n!!") {
        playerScore += 1;
        console.log(playerScore);
        console.log("test 2");
      } else {
        compScore += 1;
        console.log(compScore);
        console.log("test 1");
      }  
     // return "Player Score = " + playerScore + " Computer Score = " + compScore;
     console.log("Player score: " + playerScore);
     console.log("Computer score: " + compScore);
    }
  }

//function computerWins

// function playerWins

