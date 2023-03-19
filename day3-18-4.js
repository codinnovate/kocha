// Function to sort an array of numbers in ascending order
function sortNumbers(numbersArray) {
    return numbersArray.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbers(unsortedNumbers);

// Logs: [5, 7, 23, 32, 34, 62]
console.log(sortedNumbers);

// The sort() function is used with a comparator function (a, b) => a - b
// to sort numbers numerically instead of lexicographically.