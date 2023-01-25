// This function takes an array of numbers and returns a sorted array in ascending order
function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
}

// Example usage of the sortNumbers function
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log("Unsorted Numbers:", unsortedNumbers); // Output: Unsorted Numbers: [34, 7, 23, 32, 5, 62]
console.log("Sorted Numbers:", sortedNumbers); // Output: Sorted Numbers: [5, 7, 23, 32, 34, 62]