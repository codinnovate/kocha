// This code snippet demonstrates how to sort an array of numbers in ascending order

// Declare an array of unsorted numbers
let numbers = [34, 7, 23, 32, 5, 62];

// Use the sort() method with a compare function to sort numbers
numbers.sort((a, b) => a - b);

// Output the sorted array to the console
console.log("Sorted numbers:", numbers); // Output: Sorted numbers: [5, 7, 23, 32, 34, 62]