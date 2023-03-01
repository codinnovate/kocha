// This function sorts an array of numbers in ascending order using the JavaScript .sort() method
function sortNumbersAscending(numbersArray) {
    return numbersArray.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbersAscending(unsortedNumbers);
console.log(sortedNumbers); // Output: [5, 7, 23, 32, 34, 62]