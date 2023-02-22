// This code snippet demonstrates how to filter an array of numbers to get only the even numbers

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the filter method to create a new array with only even numbers
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0; // Check if the number is even
});

// Log the array of even numbers
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]