// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbers(array) {
    // Using the JavaScript built-in sort function with a compare function to ensure numerical sorting.
    return array.sort((a, b) => a - b);
}

// Example usage:
const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = sortNumbers(numbers);

console.log(sortedNumbers); // Output: [1, 2, 5, 5, 6, 9]