//ДЗ 3.1. Перелік типів
console.log("undefined: typeof =>", typeof undefined);
console.log("null: typeof =>", typeof null);
console.log("boolean: typeof =>", typeof true);
console.log("number: typeof =>", typeof 42);
console.log("bigint: typeof =>", typeof 42n);
console.log("string: typeof =>", typeof "Hello");
console.log("object: typeof =>", typeof {});
console.log("array: typeof =>", typeof []);
console.log("function: typeof =>", typeof function() {});

// ДЗ 3.2. Числа та рядки
const str1 = prompt("Введіть перший рядок:");
const str2 = prompt("Введіть другий рядок:");
const str3 = prompt("Введіть третій рядок:");

console.log(`${str3}, ${str1}, ${str2}`);

// ДЗ 3.3. Розкласти п'ятизначне число
const originalNumber = 12345;
const editedNumber = String(originalNumber).split('').join(' ');
console.log(editedNumber);