# The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

# max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
# # should be 6: [4, -1, 2, 1]
# Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

# Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

# O(n3) solution:
def max_sequence(arr):
    if not arr:
        return 0

    result = 0
    for i in range(len(arr)):
        for j in range(i + 1, len(arr) + 1):
            result = max(result, sum(arr[i:j]))
    
    return result

# O(n2) solution:
def max_sequence(arr):
    if not arr:
        return 0

    result = 0
    for i in range(len(arr)):
        current = 0
        for j in range(i, len(arr)):
            current += arr[j]
            result = max(result, current)

    return result

# O(n) solution:
def max_sequence(arr):
    max_sum = 0
    current_sum = 0
    for num in arr:
        current_sum += num
        if current_sum < 0:
            current_sum = 0
        if current_sum > max_sum:
            max_sum = current_sum
    return max_sum