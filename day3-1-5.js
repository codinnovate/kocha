// This code snippet demonstrates how to sort an array of numbers in ascending order

// Define an array of numbers
let numbers = [34, 7, 23, 32, 5, 62];

// Use the array's sort() method with a compare function
// The compare function decides the order of two elements
numbers.sort(function(a, b) {
  return a - b; // If a is less than b, a comes first (ascending order)
});

// Log the sorted array to the console
console.log(numbers); // Output: [5, 7, 23, 32, 34, 62]