// This code snippet demonstrates how to sort an array of numbers in ascending order.

const numbers = [34, 7, 23, 32, 5, 62];

// The sort() method sorts the elements of an array in place and returns the sorted array.
// The compare function is used here to sort numbers numerically.
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [5, 7, 23, 32, 34, 62]