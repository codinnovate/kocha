// This function sorts an array of numbers in ascending order using the built-in sort method.
function sortNumbers(numbers: number[]): number[] {
  return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log('Unsorted:', unsortedNumbers);
console.log('Sorted:', sortedNumbers);

// Output:
// Unsorted: [34, 7, 23, 32, 5, 62]
// Sorted: [5, 7, 23, 32, 34, 62]
```