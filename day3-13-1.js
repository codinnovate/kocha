// Function to sort an array of numbers in ascending order using the built-in sort method
function sortNumbers(array) {
    return array.sort((a, b) => a - b);
}

// Example usage
const numbers = [5, 3, 8, 1, 2];
// Sorts the numbers array in ascending order and logs it to the console
console.log(sortNumbers(numbers)); // Output: [1, 2, 3, 5, 8]