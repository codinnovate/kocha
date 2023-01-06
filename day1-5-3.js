// This function takes an array of numbers and returns a new array with those numbers sorted in ascending order.
function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b); // The sort() method is used with a comparator function for numerical sorting
}

// Example usage:
const unsortedNumbers = [42, 23, 16, 15, 8, 4];
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log(sortedNumbers); // Output: [4, 8, 15, 16, 23, 42]