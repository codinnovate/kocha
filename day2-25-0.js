// This function takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortNumbers(numbers) {
    // The 'sort' method sorts the elements of an array in place and returns the sorted array.
    // The compare function (a, b) specifies that if a is less than b, it should be placed before b.
    return numbers.sort((a, b) => a - b);
}

// Example use-case:
const unsortedNumbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = sortNumbers(unsortedNumbers);
console.log(sortedNumbers); // Output: [1, 2, 5, 5, 6, 9]