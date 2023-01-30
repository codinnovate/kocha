// This code snippet demonstrates how to sort an array of numbers in ascending order.

// Define an array of numbers
let numbers = [5, 3, 8, 1, 2, 7];

// Use the sort() method with a compare function
numbers.sort((a, b) => a - b);

// Log the sorted array to the console
console.log("Sorted numbers:", numbers);
// Output will be: Sorted numbers: [1, 2, 3, 5, 7, 8]