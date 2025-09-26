// Exercise 4: Recursion
// Instructions: Write a recursive function named `sumOfDigits` that calculates the sum of the elements of a given array. 
// Test your function by calculating the sum of the array and logging the result to the console.

let count = 0

function sumOfDigits(number) {
  if (number.length > 0) {
    count += number.pop();
    sumOfDigits(number)
  } 
  return count;
}

console.log(sumOfDigits([1, 3, 7, 1, 8])); // 20
