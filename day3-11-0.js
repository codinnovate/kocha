// This function takes an array of numbers and returns a new array with those numbers sorted in ascending order.
function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log(sortedNumbers); // Output: [1, 2, 5, 5, 6, 9]