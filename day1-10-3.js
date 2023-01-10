// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbers(array) {
  // The sort() method sorts the elements of an array in place and returns the sorted array.
  // By default, sort() converts elements to strings and sorts them lexicographically.
  // Providing a compare function allows sorting numbers numerically.
  return array.sort((a, b) => a - b);
}

// Example usage:
const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbers(numbers);

console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]