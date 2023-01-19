// This code snippet demonstrates how to sort an array of numbers in ascending order.

let numbers = [34, 7, 23, 32, 5, 62];

// The sort() method sorts the array elements based on the provided comparator function.
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [5, 7, 23, 32, 34, 62]