// Function to sort an array of numbers in ascending order
function sortNumbers(numbersArray) {
    return numbersArray.sort((a, b) => a - b);
}

// Example usage
const unsortedArray = [34, 7, 23, 32, 5, 62];
const sortedArray = sortNumbers(unsortedArray);

console.log("Unsorted Array:", unsortedArray); // Original array (note: sort modifies the array in place)
console.log("Sorted Array:", sortedArray);     // Sorted array output
```