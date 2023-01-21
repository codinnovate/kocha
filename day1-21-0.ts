// This TypeScript function filters an array of numbers, returning only the even numbers
function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(number => number % 2 === 0);
}

// Example usage:
const numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers: number[] = filterEvenNumbers(numbersArray);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]