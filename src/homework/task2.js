const exchangeRate = 42;
const step = 10;
const startValue = 10;
const finishValue = 100;

for (let i = startValue; i <= finishValue; i += step) {
    document.write(`<p>${i} USD = ${i * exchangeRate} UAH</p>`);
}
