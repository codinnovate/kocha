// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbersAscending(numbers: number[]): number[] {
    return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbersAscending(unsortedNumbers);
console.log(sortedNumbers); // Output: [5, 7, 23, 32, 34, 62]

// Note: The sort() method in JavaScript modifies the original array and sorts it in place.
// This function, however, returns a new sorted array for clarity and immutability.