// Function to filter an array of numbers, returning only even numbers
function filterEvenNumbers(numbers) {
    return numbers.filter(function(number) {
        // The modulo operator (%) returns the remainder of a division
        return number % 2 === 0;
    });
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);
console.log('Even Numbers:', evenNumbers); // Output: Even Numbers: [2, 4, 6, 8, 10]