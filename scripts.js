//test console
console.log("Hello World");

//define random number to use for computerSelection
random = Math.floor(Math.random() * 3) + 1;

//check rng
console.log(random)

//requests player input
playerSelection = prompt('Enter "Rock", "Paper", or "Scissors".')

//assign computerChoice
computerChoice = getComputerChoice(random)

//defines playerChoice
playerChoice = getPlayerChoice(playerSelection)

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
    poop = "Rock";
    return poop;
  }
  else if (playerSelection == "Scissors") {
    poop = "Scissors";
    return poop;
  } 
  else if (playerSelection == "Paper") {
    poop = "Paper";
    return poop;
  } else {
    return "Try again";
  }
}

console.log(computerChoice);
console.log(playerChoice);

//function playRound
function playRound (computerChoice, playerChoice) {
  if (computerChoice == playerChoice) {
    return "It's a tie!!"
  } else if (computerChoice == "Paper" && playerChoice == "Rock" || computerChoice == "Rock" && playerChoice == "Scissors" || computerChoice == "Scissors" && playerChoice == "Paper") {
    return "Compuer wins!!"
  } else {
    return "You win!!"
  }
}

console.log(playRound(computerChoice, playerChoice));
//function computerWins

// function playerWins

//function game: keeps track of score 