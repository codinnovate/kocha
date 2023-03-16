// This function sorts an array of numbers in ascending order using the built-in sort method
function sortNumbersAscending(numbersArray) {
    // The sort function uses a comparison function to determine the order
    return numbersArray.sort((a, b) => a - b);
}

// Example usage
const unsortedNumbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = sortNumbersAscending(unsortedNumbers);

console.log(sortedNumbers); // Output: [1, 2, 5, 5, 6, 9]