// This code snippet demonstrates how to sort an array of numbers in ascending and descending order.

// Sample array of numbers
let numbers = [34, 7, 23, 32, 5, 62];

// Function to sort numbers in ascending order
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

// Function to sort numbers in descending order
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

// Sorting the array in ascending order
let sortedAscending = sortAscending([...numbers]);
console.log("Sorted in Ascending Order:", sortedAscending);

// Sorting the array in descending order
let sortedDescending = sortDescending([...numbers]);
console.log("Sorted in Descending Order:", sortedDescending);