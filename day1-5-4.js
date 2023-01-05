// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbers(arr) {
    // The built-in sort method is used with a compare function to sort numbers correctly.
    return arr.sort((a, b) => a - b);
}

const numbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbers(numbers);

console.log('Original array:', numbers);
console.log('Sorted array:', sortedNumbers); // Output: [5, 7, 23, 32, 34, 62]