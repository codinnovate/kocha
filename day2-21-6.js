// This function takes an array of numbers and returns a new array with each number squared.
function squareNumbers(numbers) {
    // Use the map() method to create a new array by applying a function to each element
    return numbers.map(function(number) {
        return number * number;
    });
}

// Example usage:
const originalNumbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(originalNumbers);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]