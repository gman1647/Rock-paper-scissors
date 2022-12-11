console.log("Hello World");
random = Math.floor(Math.random() * 3) + 1;
computerSelection = randomJunken(random)

console.log(random)

function randomJunken (random) {
    if (random == 1) {
      computerSelection = "Rock"
    } else if (random == 2) {
        computerSelection = "Scissors"
    } else
        computerSelection = "Paper"
    return computerSelection
}

console.log(computerSelection)