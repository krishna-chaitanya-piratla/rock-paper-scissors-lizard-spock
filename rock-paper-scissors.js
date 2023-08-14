const prompt = require('prompt-sync')();

let wins = 0;
let losses = 0;
let draws = 0;

console.log('Rock Paper Scissors Lizard Spock');
console.log('================================\n');
const userName = prompt('What is your name? : ');
console.log(
  `Hello, ${userName}! Nice to meet you. Let's play Rock Paper Scissors Lizard Spock!`
);

console.log('Here is a quick overview of the rules:\n');
console.log(`
Scissors cuts Paper.\nPaper covers Rock.\nRock crushes Lizard.\nLizard poisons Spock.\nSpock smashes Scissors.\nScissors decapitates Lizard.\nLizard eats Paper.\nPaper disproves Spock.\nSpock vaporizes Rock.\nRock crushes scissors\n`);

while (true) {
  const input = prompt(
    '\nChoose rock, paper, scissors, lizard or spock by entering your choice. If you want to quit, enter quit : '
  );

  const userGuess = input.toLowerCase();

  if (userGuess === 'quit') {
    console.log(`\nScoresheet for the current session`);
    console.log('----------------------------------');
    console.log(
      `User wins: ${wins}\nComputer wins: ${losses}\nDraws: ${draws}\n`
    );
    console.log(
      'Thank you for playing Rock Paper Scissors Lizard Spock with me.'
    );
    break;
  }

  if (
    userGuess !== 'rock' &&
    userGuess !== 'paper' &&
    userGuess !== 'scissors' &&
    userGuess !== 'lizard' &&
    userGuess !== 'spock'
  ) {
    console.log('Please enter a valid choice');
    continue;
  }

  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const randomIndex = Math.round(Math.random() * 2);

  const computerGuess = choices[randomIndex];

  if (userGuess === computerGuess) {
    console.log(`I guessed ${computerGuess}. That's a draw!`);
    draws += 1;
  } else if (
    (userGuess === 'paper' && computerGuess === 'rock') ||
    (userGuess === 'rock' && computerGuess === 'scissors') ||
    (userGuess === 'scissors' && computerGuess === 'paper') ||
    (userGuess === 'rock' && computerGuess === 'lizard') ||
    (userGuess === 'lizard' && computerGuess === 'spock') ||
    (userGuess === 'spock' && computerGuess === 'scissors') ||
    (userGuess === 'scissors' && computerGuess === 'lizard') ||
    (userGuess === 'lizard' && computerGuess === 'paper') ||
    (userGuess === 'paper' && computerGuess === 'spock') ||
    (userGuess === 'spock' && computerGuess === 'rock')
  ) {
    console.log(`I guessed ${computerGuess}. You win!`);
    wins += 1;
  } else {
    console.log(`I guessed ${computerGuess}. You lost!`);
    losses += 1;
  }
}
