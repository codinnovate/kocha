// This function takes an array of numbers and returns a new array sorted in ascending order.
function sortNumbersAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
}

const numbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbersAscending(numbers);

console.log('Original Array:', numbers); // Outputs the original array
console.log('Sorted Array:', sortedNumbers); // Outputs the new sorted array