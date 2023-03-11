// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbers(numbersArray) {
    return numbersArray.sort((a, b) => a - b);
}

// Example usage of the sortNumbers function
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbers(unsortedNumbers);

console.log("Unsorted Numbers:", unsortedNumbers);
console.log("Sorted Numbers:", sortedNumbers);