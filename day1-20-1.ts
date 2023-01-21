// This TypeScript function takes an array of numbers and returns a new array with the numbers sorted in ascending order.

function sortNumbers(numbers: number[]): number[] {
  // The sort method sorts the array in place, so we use the spread operator to create a copy of the original array
  return [...numbers].sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log('Unsorted:', unsortedNumbers); // Outputs: Unsorted: [34, 7, 23, 32, 5, 62]
console.log('Sorted:', sortedNumbers);     // Outputs: Sorted: [5, 7, 23, 32, 34, 62]