// This TypeScript function sorts an array of numbers in ascending order using the built-in sort method.
function sortNumbers(numbers: number[]): number[] {
    // The sort method compares each pair of numbers using a comparison function.
    return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log(sortedNumbers); // Output: [5, 7, 23, 32, 34, 62]