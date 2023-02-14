# This function takes a list of numbers and returns a new list with the numbers sorted in ascending order.
def bubble_sort(numbers):
    n = len(numbers)
    for i in range(n):
        # Traverse through all elements up to the last sorted element
        for j in range(0, n-i-1):
            # Swap if the element found is greater than the next element
            if numbers[j] > numbers[j+1]:
                numbers[j], numbers[j+1] = numbers[j+1], numbers[j]
    return numbers

# Example usage
unsorted_list = [64, 34, 25, 12, 22, 11, 90]
sorted_list = bubble_sort(unsorted_list)
print("Sorted list:", sorted_list)