// This code snippet demonstrates how to sort an array of numbers in ascending order.

function sortNumbers(numbersArray) {
  // The sort method with a comparison function sorts numbers numerically.
  return numbersArray.sort((a, b) => a - b);
}

const numbers = [5, 3, 8, 1, 2, 7];
const sortedNumbers = sortNumbers(numbers);

console.log(sortedNumbers); // Output: [1, 2, 3, 5, 7, 8]