// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbers(numbers: number[]): number[] {
    return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedNumbers: number[] = sortNumbers(unsortedNumbers);

console.log('Unsorted:', unsortedNumbers);
console.log('Sorted:', sortedNumbers);