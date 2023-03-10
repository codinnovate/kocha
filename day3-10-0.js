// This function sorts an array of numbers in ascending order using the bubble sort algorithm.
function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            // Compare adjacent elements and swap them if they are in the wrong order.
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // Reduce the range of the next pass as the last element is in the correct position.
        len--;
    } while (swapped);
    return arr;
}

// Example usage:
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 4, 5, 8]