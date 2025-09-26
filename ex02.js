// Exercise 2: Rest Operator
// Instructions: Write a function named `subtract` that takes any number of arguments and returns their difference. 
// Use the rest operator to handle the variable number of arguments. 
// Test your function with different numbers of arguments.

function subtract(...numbers) {
  return numbers.sort((a, b) => b > a ? 1 : -1).reduce((acc, curr) => acc - curr);
  
}

console.log(subtract(3, 15, 7)); // Example usage
