//ДЗ 3.1. Перелік типів
console.log("undefined: typeof =>", typeof undefined);
console.log("null: typeof =>", typeof null);
console.log("boolean: typeof =>", typeof true);
console.log("number: typeof =>", typeof 42);
console.log("bigint: typeof =>", typeof 42n);
console.log("string: typeof =>", typeof "Hello");
console.log("symbol: typeof =>", typeof Symbol("symbol"));
console.log("object: typeof =>", typeof {});
console.log("array: typeof =>", typeof []);
console.log("function: typeof =>", typeof function() {});
console.log("date: typeof =>", typeof new Date());
console.log("regexp: typeof =>", typeof /regex/);
console.log("map: typeof =>", typeof new Map());
console.log("set: typeof =>", typeof new Set());
console.log("weakmap: typeof =>", typeof new WeakMap());
console.log("weakset: typeof =>", typeof new WeakSet());
console.log("error: typeof =>", typeof new Error("error"));

// ДЗ 3.2. Числа та рядки
const str1 = prompt("Введіть перший рядок:");
const str2 = prompt("Введіть другий рядок:");
const str3 = prompt("Введіть третій рядок:");

console.log(`${str3}, ${str1}, ${str2}`);

// ДЗ 3.3. Розкласти п'ятизначне число
const number = prompt("Введіть п'ятизначне число:");
if (number.length === 5 && !isNaN(number)) {
    console.log(number.split('').join(' '));
} else {
    console.log("Будь ласка, введіть коректне п'ятизначне число.");
}