// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// It demonstrates how to use TypeScript's type annotations for function parameters and return types.

function sortNumbers(numbers: number[]): number[] {
    // The sort method sorts the array in place. To avoid modifying the original array, we use the spread operator to create a copy.
    return [...numbers].sort((a, b) => a - b);
}

// Sample usage:
const unsortedNumbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log('Unsorted:', unsortedNumbers); // Output: Unsorted: [5, 3, 8, 1, 2]
console.log('Sorted:', sortedNumbers);     // Output: Sorted: [1, 2, 3, 5, 8]