// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order
function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
}

const numbers = [5, 3, 8, 1, 2];
// Call the sortNumbers function and store the sorted array
const sortedNumbers = sortNumbers(numbers);

console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]