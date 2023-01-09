// This code snippet demonstrates how to filter an array of numbers to only include even numbers

// Sample array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Using the filter() method to create a new array with only even numbers
const evenNumbers = numbers.filter(isEven);

// Output the result
console.log(evenNumbers); // [2, 4, 6, 8, 10]