// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbers(numbersArray) {
    return numbersArray.sort(function(a, b) {
        return a - b; // Comparator function that defines the order of sorting
    });
}

// Example usage:
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log(sortedNumbers); // Output: [5, 7, 23, 32, 34, 62]