// This code snippet demonstrates how to define and use a simple generic function in TypeScript
// to find the first element in an array that satisfies a given condition.

function findFirst<T>(arr: T[], predicate: (value: T) => boolean): T | undefined {
    for (let item of arr) {
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
}

// Example use-case: Finding the first even number in an array of numbers
const numbers = [1, 3, 5, 8, 9, 10];
const firstEven = findFirst(numbers, num => num % 2 === 0);

console.log(firstEven); // Output: 8