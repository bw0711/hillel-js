const number = parseInt(prompt('Input your number: '));
let divisorsCount = 0;
let divisorsSum = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        document.write(`<p>Divisor: ${i}</p>`);
        if (i % 2 === 0) {
            divisorsCount++;
            divisorsSum += i;
        }
    }
}

document.write(`<p>Even divisors count: ${divisorsCount}</p>`);
document.write(`<p>Sum of even divisors: ${divisorsSum}</p>`);