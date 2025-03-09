// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

// In Roman numerals:

// 1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.
// Example:

//    1 -->       "I"
// 1000 -->       "M"
// 1666 --> "MDCLXVI"

function solution(number) {
  if (number >= 1000) {
    return "M" + solution(number - 1000);
  }
  if (number >= 900) {
    return "CM" + solution(number - 900);
  }
  if (number >= 500) {
    return "D" + solution(number - 500);
  }
  if (number >= 400) {
    return "CD" + solution(number - 400);
  }
  if (number >= 100) {
    return "C" + solution(number - 100);
  }
  if (number >= 90) {
    return "XC" + solution(number - 90);
  }
  if (number >= 50) {
    return "L" + solution(number - 50);
  }
  if (number >= 40) {
    return "XL" + solution(number - 40);
  }
  if (number >= 10) {
    return "X" + solution(number - 10);
  }
  if (number >= 9) {
    return "IX" + solution(number - 9);
  }
  if (number >= 5) {
    return "V" + solution(number - 5);
  }
  if (number >= 4) {
    return "IV" + solution(number - 4);
  }
  if (number >= 1) {
    return "I" + solution(number - 1);
  }
  return "";
}
