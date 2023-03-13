// This TypeScript function takes an array of numbers and a target sum as input.
// It returns an array of pairs of numbers that add up to the target sum.

function findPairsWithSum(numbers: number[], targetSum: number): [number, number][] {
    const pairs: [number, number][] = [];
    const seenNumbers = new Set<number>();

    for (const number of numbers) {
        const complement = targetSum - number;
        if (seenNumbers.has(complement)) {
            pairs.push([complement, number]);
        }
        seenNumbers.add(number);
    }

    return pairs;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
const targetSum = 7;
const result = findPairsWithSum(numbers, targetSum);
console.log(result); // Output: [ [ 3, 4 ], [ 2, 5 ], [ 1, 6 ] ]
```