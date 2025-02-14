const userInput = prompt('Enter a 6-digit number');

const firstHalf = userInput.substring(0, 3);
const secondHalf = userInput.substring(3);
if (firstHalf === secondHalf.split('').reverse().join('')) {
    alert('The number is a palindrome')
} else {
    alert('The number is not a palindrome')
};
