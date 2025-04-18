// How many ways can you make the sum of a number?
// From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)

// In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

// 4
// 3 + 1
// 2 + 2
// 2 + 1 + 1
// 1 + 1 + 1 + 1

function sum(num) {
  let partitions = Array(num + 1).fill(0);
  partitions[0] = 1;

  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      partitions[j] += partitions[j - i];
    }
  }

  return partitions[num];
}
