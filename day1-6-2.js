// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbers(numbersArray) {
    return numbersArray.sort(function(a, b) {
        return a - b; // Subtracting 'b' from 'a' allows the sort method to order numbers correctly.
    });
}

// Example usage:
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = sortNumbers(unsortedArray);

console.log(sortedArray); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]