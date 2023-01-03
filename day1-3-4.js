// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// It demonstrates the use of the Array.prototype.sort() method and a custom comparator function.

function sortNumbersAscending(numbersArray) {
  // The sort method by default sorts elements as strings. To sort numbers, a comparator function is provided.
  return numbersArray.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [5, 3, 8, 1, 9, 2];
const sortedNumbers = sortNumbersAscending(unsortedNumbers);

console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8, 9]