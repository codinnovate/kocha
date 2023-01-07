// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbers(numbers: number[]): number[] {
  return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]

// This function demonstrates sorting strings in alphabetical order.
function sortStrings(strings: string[]): string[] {
  return strings.sort();
}

// Example usage:
const unsortedStrings = ['banana', 'apple', 'grape', 'cherry'];
const sortedStrings = sortStrings(unsortedStrings);

console.log(sortedStrings); // Output: ['apple', 'banana', 'cherry', 'grape']