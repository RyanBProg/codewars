// An array is circularly sorted if the elements are sorted in ascending order, but displaced, or rotated, by any number of steps.

// Complete the function/method that determines if the given array of integers is circularly sorted.

// Examples
// These arrays are circularly sorted (true):

// [2, 3, 4, 5, 0, 1]       -->  [0, 1] + [2, 3, 4, 5]
// [4, 5, 6, 9, 1]          -->  [1] + [4, 5, 6, 9]
// [10, 11, 6, 7, 9]        -->  [6, 7, 9] + [10, 11]
// [1, 2, 3, 4, 5]          -->  [1, 2, 3, 4, 5]
// [5, 7, 43, 987, -9, 0]   -->  [-9, 0] + [5, 7, 43, 987]
// [1, 2, 3, 4, 1]          -->  [1] + [1, 2, 3, 4]
// While these are not (false):

// [4, 1, 2, 5]
// [8, 7, 6, 5, 4, 3]
// [6, 7, 4, 8]
// [7, 6, 5, 4, 3, 2, 1]

function isCircleSorted(arr) {
  let countBreaks = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[(i + 1) % arr.length]) {
      countBreaks++; // count each time order breaks
    }

    if (countBreaks > 1) return false; // more than one break means its not circularly sorted
  }

  return true; // if only one break or none, it's circularly sorted
}
