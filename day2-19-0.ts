// This TypeScript function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// It demonstrates the use of generics and TypeScript's type annotations.

function sortNumbers<T extends number>(numbers: T[]): T[] {
    return numbers.sort((a, b) => a - b);
}

// Example usage of the sortNumbers function
const unsortedNumbers: number[] = [42, 23, 16, 15, 8, 4];
const sortedNumbers: number[] = sortNumbers(unsortedNumbers);

console.log(sortedNumbers); // Output: [4, 8, 15, 16, 23, 42]