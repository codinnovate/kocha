// This function sorts an array of numbers in ascending order using the bubble sort algorithm
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            // Swap elements if the current element is greater than the next
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(numbers)); // Output: Sorted array: [11, 12, 22, 25, 34, 64, 90]