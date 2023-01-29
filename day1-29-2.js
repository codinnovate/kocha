// A simple function to filter out odd numbers from an array
function filterOddNumbers(numbersArray) {
  // Use the Array.prototype.filter method to create a new array with only even numbers
  return numbersArray.filter(function(number) {
    return number % 2 === 0; // Check if the number is even
  });
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterOddNumbers(numbers);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]