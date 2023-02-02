// This function takes an array of numbers and returns a new array sorted in ascending order.
function sortNumbers(numbers: number[]): number[] {
    return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers: number[] = [34, 7, 23, 32, 5, 62];
const sortedNumbers: number[] = sortNumbers(unsortedNumbers);

console.log('Unsorted:', unsortedNumbers);
console.log('Sorted:', sortedNumbers);

// Output:
// Unsorted: [34, 7, 23, 32, 5, 62]
// Sorted: [5, 7, 23, 32, 34, 62]