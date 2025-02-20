const findAverage = (arrayOfElements) => {
    return arrayOfElements
        .map(item => Number(item))
        .filter(item => !isNaN(item))
        .reduce((acc, number) => acc + number, 0) / digits.length;

};

const mixedArray = [0, "hello", "", null, undefined, 42, false, "world", 13, "1443"];
console.log(findAverage(mixedArray));