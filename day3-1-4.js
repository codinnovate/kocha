// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbers(numbersArray) {
    return numbersArray.sort((a, b) => a - b);
}

// Example use-case: Sorting an array of numbers
let unsortedNumbers = [34, 7, 23, 32, 5, 62];
let sortedNumbers = sortNumbers(unsortedNumbers);

console.log("Unsorted Numbers: ", unsortedNumbers);
console.log("Sorted Numbers: ", sortedNumbers);