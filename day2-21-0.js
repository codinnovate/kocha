// This function takes an array of numbers and returns a new array sorted in ascending order.
function sortNumbersAscending(numbers) {
  return numbers.slice().sort((a, b) => a - b); // Use slice() to avoid mutating the original array.
}

// Example usage:
const unsortedNumbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbersAscending(unsortedNumbers);

console.log('Original array:', unsortedNumbers); // Output: Original array: [5, 3, 8, 1, 2]
console.log('Sorted array:', sortedNumbers);     // Output: Sorted array: [1, 2, 3, 5, 8]