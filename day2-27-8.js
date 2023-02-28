// This JavaScript function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// It uses the built-in Array.prototype.sort() method for sorting.

function sortNumbersAscending(numbers) {
  return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbersAscending(unsortedNumbers);

console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]