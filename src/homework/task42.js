const userInputValue = parseInt(prompt("Please, enter 3-digit number:"));

const firstDigit = Math.floor(userInputValue / 100);
const secondDigit = Math.floor((userInputValue % 100) / 10);
const thirdDigit = userInputValue % 10;

firstDigit === secondDigit && secondDigit === thirdDigit
  ? alert("All digits are equal")
  : alert("Not all digits are equal");

firstDigit === secondDigit ||
secondDigit === thirdDigit ||
firstDigit === thirdDigit
  ? alert("Some digits are equal")
  : alert("No equal digits found");
