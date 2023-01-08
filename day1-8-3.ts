// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order
function sortNumbers(numbers: number[]): number[] {
    // The sort method is used with a comparison function to ensure numerical sorting
    return numbers.sort((a, b) => a - b);
}

// Example usage of the sortNumbers function
const unsortedArray: number[] = [34, 7, 23, 32, 5, 62];
const sortedArray: number[] = sortNumbers(unsortedArray);

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
```