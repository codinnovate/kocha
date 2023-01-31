// This TypeScript function sorts an array of numbers in ascending order using the built-in sort method.
function sortNumbers(numbers: number[]): number[] {
    // The sort method is called with a comparator function,
    // which ensures that numbers are sorted correctly by comparing two values at a time.
    return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers: number[] = [34, 7, 23, 32, 5, 62];
const sortedNumbers: number[] = sortNumbers(unsortedNumbers);

console.log(sortedNumbers); // Output: [5, 7, 23, 32, 34, 62]