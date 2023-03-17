// This code snippet demonstrates how to sort an array of numbers in ascending order using the sort() method in JavaScript.

let numbers = [34, 7, 23, 32, 5, 62];

// The sort() method sorts the elements of an array in place and returns the sorted array.
// The compare function (a, b) => a - b ensures numerical sorting in ascending order.
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [5, 7, 23, 32, 34, 62]