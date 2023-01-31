// This TypeScript code snippet demonstrates a simple function to sort an array of numbers in ascending order.
// It uses the built-in array sort method with a custom comparator function.

function sortNumbers(numbers: number[]): number[] {
    return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log("Unsorted Numbers:", unsortedNumbers);
console.log("Sorted Numbers:", sortedNumbers);
```