# There is an array with some numbers. All numbers are equal except for one. Try to find it!

# find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
# find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55
# It’s guaranteed that array contains at least 3 numbers.

# The tests contain some very huge arrays, so think about performance.

def find_uniq(arr):
    common = None
    
    if arr[0] == arr[1]:
        common = arr[0]
    else:
        common = arr[2]

    for num in arr:
        if num != common:
            return num