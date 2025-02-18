let userInput = parseInt(prompt('Input your number:'));
let isPrime = true;

if (userInput === 1) {
    document.write(`${userInput} is not a prime number`);
} else {
    for (let i = 2; i <= Math.sqrt(userInput); i++) {
        if (userInput % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.write(`${userInput} is a prime number`);
    } else {
        document.write(`${userInput} is not a prime number`);
    }
}