// This code snippet demonstrates how to sort an array of numbers in ascending order using JavaScript

// Define an array of numbers
let numbers = [34, 7, 23, 32, 5, 62];

// Sort the array using the sort() method with a compare function
numbers.sort((a, b) => a - b);

// Log the sorted array to the console
console.log(numbers); // Output: [5, 7, 23, 32, 34, 62]