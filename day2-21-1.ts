// TypeScript code to filter an array of numbers and return only even numbers

// Function that checks if a number is even
function isEven(num: number): boolean {
    return num % 2 === 0;
}

// Function to filter even numbers from an array
function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(isEven);
}

// Example usage
const numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers: number[] = filterEvenNumbers(numbersArray);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
```