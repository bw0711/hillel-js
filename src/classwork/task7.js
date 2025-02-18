let sum = 0;
for (let i = 30; i <= 80; i++) {
    // i % 2 === 0 ? sum + i : continue;
    if (i % 2 === 0) {
        sum += i;
    }
};

document.write(`<p> Sum = ${sum} </p>`);