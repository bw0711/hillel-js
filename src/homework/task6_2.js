const findAverage = (arrayOfElements) => {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arrayOfElements.length; i++) {
        if (typeof mixedArray[i] === 'number') {
            count++;
            sum += mixedArray[i];
        };

        return console.log(`Result average is: ${sum / count}`);
    }
};


const mixedArray = [0, "hello", "", null, undefined, 42, false, "world", 13, "1443"];
findAverage(mixedArray);