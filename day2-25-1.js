// This code snippet demonstrates how to sort an array of numbers in ascending order

// Define an array of numbers
let numbers = [5, 3, 8, 1, 2];

// Use the sort() method with a compare function to sort the array in ascending order
// The compare function subtracts a from b, ensuring numbers are sorted correctly
numbers.sort((a, b) => a - b);

// Log the sorted array to the console
console.log(numbers); // Output: [1, 2, 3, 5, 8]