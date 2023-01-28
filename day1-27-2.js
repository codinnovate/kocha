// This function sorts an array of numbers in ascending order using the Bubble Sort algorithm.
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            // Compare adjacent elements and swap them if they are in the wrong order.
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// Example usage:
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", numbers);
const sortedNumbers = bubbleSort(numbers);
console.log("Sorted array:", sortedNumbers);
```