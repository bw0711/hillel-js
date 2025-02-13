//1 

// const firstInput = parseInt(prompt('Enter first digit'));
// const secondInput = parseInt(prompt('Enter first digit'));

// if (firstInput > secondInput) {
//     alert(`${firstInput} is greater than ${secondInput}`)
// } else if (firstInput < secondInput) {
//     alert(`${firstInput} is less than ${secondInput}`)
// } else {
//     alert('The numbers are equeal')
// };

//2
// const metersDistance = parseInt(prompt('Enter distance in Meters')) * 1000;
// const feetDistance = parseInt(prompt('Enter distance in Foots')) * 0.305;

// metersDistance > feetDistance ? alert('Kilometers are greater then feet') : alert('Feet are greater then kilometers');

//3
// const firstInput = parseInt(prompt('Enter first digit'));
// const secondInput = parseInt(prompt('Enter first digit'));
// if (secondInput > firstInput) {
//     if (secondInput % firstInput === 0) {
//         alert(`${firstInput} is a divisor for ${secondInput}`)
//     }
// } else if (firstInput % secondInput === 0) {
//     alert (`${secondInput} is a divisior for ${firstInput}`)
// } else {
//     alert('No divisors found')
// };

//4
// const userInput = parseInt(prompt('Enter first digit'));
// (userInput % 10) % 2 === 0 ? alert('The last digit is even') : alert('The last digit is odd');

//5
// const userInput = parseInt(prompt('Enter your 2-digit number'));
// const firstDigit = parseInt(userInput / 10);
// const secondNumber = userInput % 10;
// firstDigit > secondNumber ? alert(`${firstDigit} is greater then ${secondNumber}`) 
// : alert(`${secondNumber} is greater then ${firstDigit}`);

//6
// const userInput = parseInt(prompt('Enter your 3-digit number'));
// const firstDigit = parseInt(userInput / 100);
// const secondNumber = parseInt(userInput % 100 / 10)
// const thirdNumber = userInput % 10;

// console.log(firstDigit, secondNumber, thirdNumber);

// sum = firstDigit + secondNumber + thirdNumber;
// console.log('sum', sum);

// sum % 2 === 0 ? alert ('The numbers are even') : alert('The numbers are odd');
// sum % 5 === 0 ? alert ('The numbers are multiple of 5') : alert('The numbers are multiple of 5');
// firstDigit * secondNumber * thirdNumber > 100 ? alert(true) : alert(false);
// firstDigit === secondNumber && secondNumber === thirdNumber ? alert(true) : alert(false);

// firstDigit === secondNumber || secondNumber === thirdNumber ? alert(true) : alert(false);

//7
const userInput = prompt('Enter a 6-digit number');

const firstHalf = userInput.substring(0, 3);  // Первые 3 цифры
const secondHalf = userInput.substring(3);   // Последние 3 цифры
if (firstHalf === secondHalf.split('').reverse().join('')) {
    alert('The number is a palindrome')
} else {
    alert('The number is not a palindrome')
};
