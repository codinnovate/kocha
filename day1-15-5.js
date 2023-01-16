// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbersAscending(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbersAscending(unsortedNumbers);

console.log('Unsorted:', unsortedNumbers); // Output: Unsorted: [34, 7, 23, 32, 5, 62]
console.log('Sorted:', sortedNumbers);    // Output: Sorted: [5, 7, 23, 32, 34, 62]