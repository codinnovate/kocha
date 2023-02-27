// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// It uses the built-in JavaScript Array sort method with a comparison function.

function sortNumbers(numbers: number[]): number[] {
    return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log(sortedNumbers); // Output: [5, 7, 23, 32, 34, 62]