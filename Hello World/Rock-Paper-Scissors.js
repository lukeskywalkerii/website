const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
if (userInput === 'bomb') {
  return userInput;
 } else if (userInput === 'rock') {
    return userInput;
  } else if (userInput === 'paper') {
    return userInput;
  } else if (userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error - Not a valid choice');
  }
}

const getComputerChoice = () => {
  let computerInput = Math.random();
  if (computerInput < 0.34) {
    return 'rock';
  } else if (computerInput < 0.67) {
    return 'paper';
  } else {
    return 'scissors'
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    console.log('You win!')
  } else if (userChoice === computerChoice) {
      return 'A tie.'
  } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins.'
      } else {
          return 'You win!'
      }
  } else if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'You win!'
      } else {
          return 'Computer wins.'
    }
  } else if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return 'You win!'
      } else {
          return 'Computer wins.'
      }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('rock')
  let computerChoice = getComputerChoice()
  console.log(`You play ${userChoice}.`)
  console.log(`Computer plays ${computerChoice}.`)
 console.log(determineWinner(userChoice, computerChoice))
}

playGame()