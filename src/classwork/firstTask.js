const firstInput = parseInt(prompt('Enter first digit'));
const secondInput = parseInt(prompt('Enter first digit'));

if (firstInput > secondInput) {
    alert(`${firstInput} is greater than ${secondInput}`)
} else if (firstInput < secondInput) {
    alert(`${firstInput} is less than ${secondInput}`)
} else {
    alert('The numbers are equeal')
};