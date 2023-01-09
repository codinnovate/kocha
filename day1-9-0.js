// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbersAscending(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [5, 3, 8, 1, 2];
// Calling the function with an unsorted array
const sortedNumbers = sortNumbersAscending(unsortedNumbers);

console.log('Unsorted:', unsortedNumbers); // Output: Unsorted: [5, 3, 8, 1, 2]
console.log('Sorted:', sortedNumbers); // Output: Sorted: [1, 2, 3, 5, 8]
```