// Define a function that takes in two non-negative integers
// a
// a and
// b
// b and returns the last decimal digit of
// a
// b
// a
// b
//  . Note that
// a
// a and
// b
// b may be very large!

// For example, the last decimal digit of
// 9
// 7
// 9
// 7
//   is
// 9
// 9, since
// 9
// 7
// =
// 4782969
// 9
// 7
//  =4782969. The last decimal digit of
// (
// 2
// 200
// )
// 2
// 300
// (2
// 200
//  )
// 2
// 300

//  , which has over
// 1
// 0
// 92
// 10
// 92
//   decimal digits, is
// 6
// 6. Also, please take
// 0
// 0
// 0
// 0
//   to be
// 1
// 1.

// You may assume that the input will always be valid.

// Examples
// lastDigit(4n, 1n)            // returns 4n
// lastDigit(4n, 2n)            // returns 6n
// lastDigit(9n, 7n)            // returns 9n
// lastDigit(10n,10000000000n)  // returns 0n

function lastDigit(n, m) {
  if (m === 0n) return 1n;

  let base = n % 10n; // only need the last digit of n
  let exp = m;
  let result = 1n;

  while (exp > 0n) {
    if (exp % 2n === 1n) {
      result = (result * base) % 10n; // multiply when expo is odd
    }
    base = (base * base) % 10n; // square the base
    exp /= 2n; // divide expo by 2
  }

  return result;
}
