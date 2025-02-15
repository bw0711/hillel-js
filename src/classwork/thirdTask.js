const firstInput = parseInt(prompt("Enter first digit"));
const secondInput = parseInt(prompt("Enter first digit"));
if (secondInput > firstInput) {
  if (secondInput % firstInput === 0) {
    alert(`${firstInput} is a divisor for ${secondInput}`);
  }
} else if (firstInput % secondInput === 0) {
  alert(`${secondInput} is a divisior for ${firstInput}`);
} else {
  alert("No divisors found");
}
