// This code snippet sorts an array of numbers in ascending order using the built-in JavaScript sort function.

// Sample array of numbers
let numbers = [34, 7, 23, 32, 5, 62];

// The sort() method sorts the elements of an array in place and returns the sorted array.
// A compare function is provided to ensure numerical sorting, as the default is lexicographical.
numbers.sort((a, b) => a - b);

console.log("Sorted numbers:", numbers);
// Output: Sorted numbers: [5, 7, 23, 32, 34, 62]