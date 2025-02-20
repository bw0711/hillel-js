const removeElement = (array, item) => {
    return array.filter(element => element !== item);
}

const array = [1, 2, 3, 4, 5];
console.log(removeElement(array, 4));