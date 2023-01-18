// This function sorts an array of numbers in ascending order using the built-in sort method.
function sortNumbers(numbersArray) {
  return numbersArray.sort((a, b) => a - b);
}

// Example usage: Sorting an array of numbers
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log('Unsorted Numbers:', unsortedNumbers); // [34, 7, 23, 32, 5, 62]
console.log('Sorted Numbers:', sortedNumbers);     // [5, 7, 23, 32, 34, 62]