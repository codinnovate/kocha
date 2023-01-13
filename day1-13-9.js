// This function sorts an array of numbers in ascending order using the built-in sort method
function sortNumbers(numbersArray) {
  // The compare function is used to determine the order of elements
  return numbersArray.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbers(unsortedNumbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]