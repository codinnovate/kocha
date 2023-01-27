// This TypeScript function sorts an array of numbers in ascending order using the Bubble Sort algorithm
function bubbleSort(numbers: number[]): number[] {
    const arr = [...numbers]; // Create a copy of the input array to prevent mutating the original array
    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements if they are in the wrong order
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped); // Repeat the process until no swaps are needed
    return arr;
}

// Example usage of the bubbleSort function
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = bubbleSort(unsortedArray);
console.log('Sorted Array:', sortedArray); // Output: Sorted Array: [2, 3, 4, 5, 8]