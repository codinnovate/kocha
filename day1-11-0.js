// This function sorts an array of numbers in ascending order using the built-in sort method
function sortNumbersAscending(arr) {
    // The compare function ensures numerical sorting by comparing two numbers directly
    return arr.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbersAscending(unsortedNumbers);

console.log('Unsorted Numbers:', unsortedNumbers);
console.log('Sorted Numbers:', sortedNumbers);