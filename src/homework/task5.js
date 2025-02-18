const multiplier = 3;

const userInput = parseInt(prompt('Please, input your number:'));
let currentValue = multiplier;
let exponent = 1;
const message = `The multipliers for your value are: `;

while (currentValue < userInput) {
    exponent++;
    currentValue = Math.pow(multiplier, exponent);
}

if (currentValue === userInput) {
    document.write(message + userInput);
} else {
    document.write(`${userInput} is not a power of 3.`);
}