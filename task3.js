const LIMIT = 10;
const minUserInput = 100;

const checkUserInput = () => {
    for (let i = 0; i < LIMIT; i++) {
        const userInput = parseInt(prompt('Please, enter a digit that is greater than 100:'));

        if (!isNaN(userInput) && userInput > minUserInput) {
            return console.log(`Your digit is ${userInput}`);
        } else {
            alert('Please, enter a number greater than 100!');
        }
    }
};

checkUserInput();