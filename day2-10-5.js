// Simple JavaScript code to filter an array of numbers to get only even numbers
function filterEvenNumbers(numbers) {
    // Use the filter() method to create a new array with only even numbers
    return numbers.filter(function(number) {
        return number % 2 === 0;  // Check if the number is even
    });
}

// Example usage
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbersArray);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]