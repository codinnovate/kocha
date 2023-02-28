// This TypeScript function filters and sorts an array of numbers.
// It demonstrates basic usage of TypeScript types and array methods.

function filterAndSortNumbers(numbers: number[], min: number): number[] {
  // Filter out numbers less than the specified minimum value
  const filteredNumbers = numbers.filter(num => num >= min);
  
  // Sort the filtered numbers in ascending order
  const sortedNumbers = filteredNumbers.sort((a, b) => a - b);

  return sortedNumbers;
}

// Example usage
const randomNumbers = [5, 3, 8, 1, 10, 6];
const result = filterAndSortNumbers(randomNumbers, 4);
console.log(result); // Output: [5, 6, 8, 10]