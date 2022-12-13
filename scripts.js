//test console
console.log("Hello World");

//COMPUTER CHOICE FUNCTIONS

//define random number to use for computerSelection
function random() {
  random = Math.floor(Math.random() * 3) +1;
  return random
}
console.log(random());

// Gets computer choice for round of RPS
function getComputerChoice (random) {
  if (random == 1) {
    computerSelection = "Rock"
  } else if (random == 2) {
      computerSelection = "Scissors"
  } else
      computerSelection = "Paper"
  return computerSelection
}

//console.log("Computer " + getComputerChoice(random));

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

//console.log("Player " + getPlayerChoice(playerSelection(validatePlayerSelection)));

//ROUND AND GAME FUNCTIONS

//playRound: Plays one round of Rock Paper Scissors
function playRound () {
  let playerChoice = getPlayerChoice(playerSelection(validatePlayerSelection))
  let computerChoice = getComputerChoice(random)
  console.log("Player " + playerChoice)
  console.log("Computer " + computerChoice)
  if (computerChoice == playerChoice) {
    return "You both chose " + playerChoice + ". It's a tie!!"
  } else if (computerChoice == "Paper" && playerChoice == "Rock" || computerChoice == "Rock" && playerChoice == "Scissors" || computerChoice == "Scissors" && playerChoice == "Paper")  {
    return computerChoice + " beats " + playerChoice + "! Computer wins!!";
  } else {
    return playerChoice + " beats " + computerChoice + "! You win!!";
  }
}

console.log(playRound());

//playGame: Plays a game for five rounds

/*
function playGame () {
  for (let i=0, compScore = 0, playerScore = 0; i < 5; i++) {
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
      return "Player Score = " + playerScore + " Computer Score = " + compScore;
      /*"Player score: " + playerScore);
      console.log("Computer score: " + compScore);*/
 //   }
    /*const result = playerScore - compScore;
    console.log(result);
    return result;*/
  //  return winner (playerScore, compScore);
//  }

/*


function playRound: Plays one round of Rock Paper Scissors
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



/* function winner (playerScore, compScore) {
  if (playerScore > compScore) {
    console.log("Player Wins!!!! Contratulations!!");
  } else if (compScore > playerScore) {
    console.log("Sorry, you lose!! Please try agian.");
  } else {
    console.log("Looks like it's a tie! Care to try again?");
  }
}
console.log(playGame());
//console.log(result);

//function computerWins

// function playerWins 

PRETTY SURE THIS STUFF IS REDUNDENT:

//assign computerChoice
function computerChoice() {
  let computerChoice = getComputerChoice(random);
  return computerChoice;
}
console.log(computerChioce())

let computerChoice = getComputerChoice()

let playerChoice = getPlayerChoice(playerSelection)

//let round = playRound(computerChoice, playerChoice)


*/