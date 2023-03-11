// This code snippet demonstrates how to sort an array of numbers in ascending order using the sort() method in JavaScript.

const numbers = [5, 2, 9, 1, 5, 6];

// The sort() method sorts the elements of an array in place and returns the sorted array. 
// The compare function is used to define the sort order. 
// For numbers, return a - b to sort in ascending order.
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 5, 5, 6, 9]