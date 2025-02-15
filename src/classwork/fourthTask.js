const userInput = parseInt(prompt("Enter first digit"));
(userInput % 10) % 2 === 0
  ? alert("The last digit is even")
  : alert("The last digit is odd");
