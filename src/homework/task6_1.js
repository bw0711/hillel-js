const editArray = (initialString, symbolsToRemove) => {
    return initialString
        .split('')
        .filter(char => !symbolsToRemove.includes(char))
        .join('');
};

const initialString = prompt('Input your string');
const symbolsToRemove = prompt('Input some symbols to be removed').split('');

console.log(editArray(initialString, symbolsToRemove));