// This TypeScript function sorts an array of numbers in ascending order
// using the built-in array sort method and a custom comparator function.

function sortNumbersAscending(numbers: number[]): number[] {
    return numbers.sort((a, b) => a - b);
}

const unsortedNumbers: number[] = [34, 7, 23, 32, 5, 62];
const sortedNumbers: number[] = sortNumbersAscending(unsortedNumbers);

console.log('Unsorted:', unsortedNumbers);
console.log('Sorted:', sortedNumbers);