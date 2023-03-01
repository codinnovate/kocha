// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbersAscending(numbers) {
    return numbers.sort(function(a, b) {
        return a - b; // Subtraction here helps to sort numbers numerically rather than lexicographically.
    });
}

// Example usage:
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbersAscending(unsortedNumbers);
console.log(sortedNumbers); // Output: [5, 7, 23, 32, 34, 62]