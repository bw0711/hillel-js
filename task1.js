const findSum = () => {
    let total = 0;
    return (num) => total += num;
};

const sum = findSum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));