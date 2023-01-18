// This JavaScript code snippet demonstrates how to filter an array of numbers to get only the even numbers.

// Define an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the filter method to create a new array with only even numbers
let evenNumbers = numbers.filter(function(number) {
    // Check if the number is even by using the modulus operator
    return number % 2 === 0;
});

// Log the resulting array of even numbers to the console
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]