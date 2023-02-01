// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbers(arr) {
    // The built-in sort() method is used with a compare function to sort numbers correctly.
    return arr.sort((a, b) => a - b);
}

// Example usage:
const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]