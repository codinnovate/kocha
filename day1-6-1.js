// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbersAscending(numbersArray) {
    return numbersArray.sort(function(a, b) {
        return a - b; // Compare function to sort numbers numerically
    });
}

// Example usage:
const unsortedNumbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbersAscending(unsortedNumbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]