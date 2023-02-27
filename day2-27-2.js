// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [5, 3, 8, 1, 2, 7];
// Calling sortNumbers will sort the array from smallest to largest.
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log(sortedNumbers); // Output: [1, 2, 3, 5, 7, 8]