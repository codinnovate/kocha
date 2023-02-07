// This function sorts an array of numbers in ascending order using the bubble sort algorithm.
function bubbleSort(array) {
    let n = array.length;
    // Outer loop for making multiple passes over the array
    for (let i = 0; i < n - 1; i++) {
        // Inner loop for comparing and swapping adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap the elements if they are in the wrong order
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Example usage:
let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log('Sorted array:', bubbleSort(numbers)); // Output: Sorted array: [11, 12, 22, 25, 34, 64, 90]