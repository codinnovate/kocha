// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbers(numbersArray) {
  // The sort() method sorts the elements of an array in place and returns the sorted array.
  // The compare function is used to determine the order of the elements.
  return numbersArray.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log('Unsorted:', unsortedNumbers); // Output: Unsorted: [5, 3, 8, 1, 2]
console.log('Sorted:', sortedNumbers);     // Output: Sorted: [1, 2, 3, 5, 8]