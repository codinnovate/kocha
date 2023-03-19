// This function sorts an array of numbers in ascending order using the built-in JavaScript sort method.
function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

// Example usage
const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbers(numbers);

console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]