const userInput = parseInt(prompt("Enter your 3-digit number"));

const firstDigit = parseInt(userInput / 100);
const secondNumber = parseInt((userInput % 100) / 10);
const thirdNumber = userInput % 10;

const sum = firstDigit + secondNumber + thirdNumber;

sum % 2 === 0 ? alert("The numbers are even") : alert("The numbers are odd");
sum % 5 === 0
  ? alert("The numbers are multiple of 5")
  : alert("The numbers are multiple of 5");
firstDigit * secondNumber * thirdNumber > 100
  ? alert("The product of the numbers is greater than 100")
  : alert("The product of the numbers is 100 or less");

firstDigit === secondNumber && secondNumber === thirdNumber
  ? alert("All three numbers are equal")
  : alert("Not all numbers are the same");

firstDigit === secondNumber || secondNumber === thirdNumber
  ? alert("At least two numbers are equal")
  : alert("All numbers are different");
