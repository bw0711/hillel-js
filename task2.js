const findProduct = (firstValue) => {
    return (secondValue) => firstValue * secondValue;
};

const product = findProduct(5)(2);
console.log(product);