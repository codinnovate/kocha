// This TypeScript function takes an array of numbers and returns a new array sorted in ascending order.
// It uses the built-in sort function, with a custom comparator to ensure numerical sorting.

function sortNumbersAscending(numbers: number[]): number[] {
  return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbersAscending(unsortedNumbers);

console.log(sortedNumbers); // Output: [5, 7, 23, 32, 34, 62]