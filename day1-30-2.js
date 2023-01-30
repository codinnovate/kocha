// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// We use the JavaScript built-in sort() method and provide a compare function to handle numeric sorting correctly.

function sortNumbersAscending(numbersArray) {
    return numbersArray.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbersAscending(unsortedNumbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]