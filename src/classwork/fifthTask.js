const userInput = parseInt(prompt("Enter your 2-digit number"));
const firstDigit = parseInt(userInput / 10);
const secondNumber = userInput % 10;

firstDigit > secondNumber
  ? alert(`${firstDigit} is greater then ${secondNumber}`)
  : alert(`${secondNumber} is greater then ${firstDigit}`);
