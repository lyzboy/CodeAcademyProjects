let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate the target number
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// Determine the winner of the round
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  const humanPoints = Math.abs(humanGuess - targetNumber);
  const computerPoints = Math.abs(computerGuess - targetNumber);
  return humanPoints <= computerPoints ? true : false;
};

// update the score based on the winner
const updateScore = (winner) => {
  if (winner === "human") humanScore++;
  else computerScore++;
};

// advance the round
const advanceRound = () => {
  currentRoundNumber++;
};

// simple test
let testTarget = generateTarget();
console.log(`Human #: 8
Computer #: 3
Target #: ${testTarget}
Human Won?: ${compareGuesses(8, 3, testTarget)}`);
