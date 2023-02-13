// This code snippet sorts an array of numbers in ascending order using the JavaScript array sort method

// Define an array of unsorted numbers
let numbers = [34, 7, 23, 32, 5, 62];

// Use the sort() method with a compare function to sort numbers in ascending order
numbers.sort((a, b) => a - b);

// Output the sorted array
console.log(numbers); // Result: [5, 7, 23, 32, 34, 62]