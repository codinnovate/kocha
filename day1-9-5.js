// This function sorts an array of numbers in ascending order using the bubble sort algorithm.
// Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements if they are in the wrong order
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // Reduce the range of the next loop iteration since the last element is already sorted
        n--;
    } while (swapped);
    return arr;
}

// Example usage:
let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(numbers)); // Output: Sorted array: [ 11, 12, 22, 25, 34, 64, 90 ]