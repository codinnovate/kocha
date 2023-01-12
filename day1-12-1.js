// This function takes an array of numbers and returns a new array with only the even numbers.
function filterEvenNumbers(numbers) {
    // The filter method creates a new array with all elements that pass the test implemented by the provided function.
    return numbers.filter(function(number) {
        return number % 2 === 0;
    });
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbersArray);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]