const userInput = parseInt(prompt('Enter your 3-digit number'));

const firstDigit = parseInt(userInput / 100);
const secondNumber = parseInt(userInput % 100 / 10)
const thirdNumber = userInput % 10;

const sum = firstDigit + secondNumber + thirdNumber;

sum % 2 === 0 ? alert ('The numbers are even') : alert('The numbers are odd');
sum % 5 === 0 ? alert ('The numbers are multiple of 5') : alert('The numbers are multiple of 5');
firstDigit * secondNumber * thirdNumber > 100 ? alert(true) : alert(false);
firstDigit === secondNumber && secondNumber === thirdNumber ? alert(true) : alert(false);
firstDigit === secondNumber || secondNumber === thirdNumber ? alert(true) : alert(false);