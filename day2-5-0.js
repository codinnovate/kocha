// Function to sort an array of numbers in ascending order using the built-in sort() method
function sortNumbersArray(numbers) {
    return numbers.sort((a, b) => a - b);
}

// Example usage:
const unsortedNumbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortNumbersArray(unsortedNumbers);

// Display the sorted array
console.log("Sorted Numbers:", sortedNumbers); // Output: Sorted Numbers: [5, 7, 23, 32, 34, 62]