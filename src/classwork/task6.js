let sum = 0;
let count = 0;

for (let i = 1; i <= 500; i++) {
    sum += i;
    count++;
}

document.write(`<p>${sum / count}</p>`)