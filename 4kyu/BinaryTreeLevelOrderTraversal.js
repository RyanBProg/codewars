// You are given a binary tree:

// class Node {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left  = left;
//     this.right = right;
//   }
// }
// Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children (from left to right) are second and third, and so on.

// Return empty array if root is null.

// Example 1 - following tree:

//                  2
//             8        9
//           1  3     4   5
// Should return following list:

// [2,8,9,1,3,4,5]

function treeByLevels(rootNode) {
  if (!rootNode) {
    return [];
  }

  const queue = [rootNode];
  const result = [];

  while (queue.length > 0) {
    let currentNode = queue.shift();
    result.push(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return result;
}
