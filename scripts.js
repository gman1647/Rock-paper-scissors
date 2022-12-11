//test console
console.log("Hello World");

//define random number to use for computerSelection
random = Math.floor(Math.random() * 3) + 1;

//assign computerSelection
computerSelection = getComputerChoice(random)

//check rng
console.log(random)

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

//requests player input
playerSelection = prompt('Enter "Rock", "Paper", or "Scissors".')

//trims and formats player selection

function capitalize (x) {
    trimmed = x.trim();
    console.log(trimmed);
    firstLetter = trimmed.charAt(0);
    capLetter = firstLetter.toUpperCase(0);
    restWord = trimmed.slice(1,);
    lowLetters = restWord.toLowerCase();
    newWord = capLetter.concat (lowLetters);
    return newWord;
  }

//function validatePlayerSelection ()

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


//function playRound

//function computerWins

// function playerWins

//function game: keeps track of score



