// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// It uses the built-in JavaScript array sort method, which is type-safe in TypeScript.

function sortNumbers(numbers: number[]): number[] {
  return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]