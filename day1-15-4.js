// Function to sort an array of numbers in ascending order
function sortNumbersAscending(numbersArray) {
    // The 'sort' method sorts the elements of an array. 
    // The compare function is used to define the sort order.
    return numbersArray.sort((a, b) => a - b);
}

// Example use-case
let unsortedNumbers = [5, 3, 8, 1, 2];
let sortedNumbers = sortNumbersAscending(unsortedNumbers);

console.log("Unsorted Numbers:", unsortedNumbers); // Output: Unsorted Numbers: [5, 3, 8, 1, 2]
console.log("Sorted Numbers:", sortedNumbers);     // Output: Sorted Numbers: [1, 2, 3, 5, 8]