// This function sorts an array of numbers in ascending order using the built-in sort method.
function sortNumbersAscending(numbersArray) {
    return numbersArray.sort((a, b) => a - b);
}

// Example usage:
const unsortedArray = [5, 3, 8, 1, 2];
const sortedArray = sortNumbersAscending(unsortedArray);

console.log(sortedArray); // Output: [1, 2, 3, 5, 8]
```