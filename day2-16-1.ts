// A simple TypeScript function to sort an array of numbers in ascending order

// Define a function that takes an array of numbers as input
function sortNumbers(numbers: number[]): number[] {
  // Use the built-in sort method, providing a comparator to sort numbers correctly
  return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers: number[] = [5, 3, 8, 1, 2];
const sortedNumbers: number[] = sortNumbers(unsortedNumbers);

console.log("Unsorted Numbers:", unsortedNumbers);
console.log("Sorted Numbers:", sortedNumbers);