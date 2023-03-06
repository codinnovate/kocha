// This code snippet demonstrates a simple function to filter even numbers from an array in TypeScript.
// It uses TypeScript's built-in type annotations for function arguments and return types.

function filterEvenNumbers(numbers: number[]): number[] {
    // The filter method creates a new array with all elements that pass the test implemented by the provided function.
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    return evenNumbers;
}

// Example usage:
const numbersArray: number[] = [1, 2, 3, 4, 5, 6];
const evenNumbersArray: number[] = filterEvenNumbers(numbersArray);
console.log(evenNumbersArray); // Output: [2, 4, 6]