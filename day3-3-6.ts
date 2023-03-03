// This function takes an array of numbers and returns a new array sorted in ascending order.
function sortNumbers(numbers: number[]): number[] {
    return numbers.sort((a, b) => a - b);
}

// Example usage of the sortNumbers function
const unsortedArray = [5, 3, 8, 1, 2];
const sortedArray = sortNumbers(unsortedArray);

console.log('Unsorted:', unsortedArray); // Output: Unsorted: [5, 3, 8, 1, 2]
console.log('Sorted:', sortedArray);     // Output: Sorted: [1, 2, 3, 5, 8]