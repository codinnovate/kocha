// This function sorts an array of numbers in ascending order using the built-in sort method
function sortNumbersAscending(numbersArray) {
    return numbersArray.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbersAscending(unsortedNumbers);

console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]