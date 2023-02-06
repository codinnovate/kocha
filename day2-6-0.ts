// This function sorts an array of numbers in ascending order using a simple bubble sort algorithm.
// Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

function bubbleSort(numbers: number[]): number[] {
    let n = numbers.length;
    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (numbers[i] > numbers[i + 1]) {
                // Swap numbers[i] and numbers[i + 1]
                [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
                swapped = true;
            }
        }
        n--; // Reduce the range of elements to check as the largest element is already in place
    } while (swapped);
    return numbers;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log('Sorted Array:', sortedArray);