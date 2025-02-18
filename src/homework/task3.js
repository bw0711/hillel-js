const maxValue = 100;
const userInput = parseInt(prompt('Please, input your number'));

for (let i = 1; i <= maxValue; i++) {
    if (Math.pow(i, 2) <= userInput) {
        document.write(`<p>${i}</p>`);
    }
}