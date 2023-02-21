// This code snippet defines a function to sort an array of numbers in ascending order using TypeScript.
function sortNumbers(numbers: number[]): number[] {
  // The sort method is called on the array, and a comparison function is provided.
  return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers: number[] = [34, 7, 23, 32, 5, 62];
const sortedNumbers: number[] = sortNumbers(unsortedNumbers);

console.log(sortedNumbers); // Output: [5, 7, 23, 32, 34, 62]