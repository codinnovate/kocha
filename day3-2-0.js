// Function to sort an array of numbers in ascending order using the built-in sort method
function sortNumbersAscending(numbersArray) {
  return numbersArray.sort((a, b) => a - b);
}

// Example usage: sorting an array of numbers
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbersAscending(unsortedNumbers);

// Log the sorted array to the console
console.log(sortedNumbers); // Output: [5, 7, 23, 32, 34, 62]
```