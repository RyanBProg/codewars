// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
  return input
    .split("\n")
    .map((line) => {
      let markerIndex = markers.reduce((index, marker) => {
        let pos = line.indexOf(marker);
        return pos !== -1 && (pos < index || index === -1) ? pos : index;
      }, -1);

      return markerIndex !== -1
        ? line.slice(0, markerIndex).trimEnd()
        : line.trimEnd();
    })
    .join("\n");
}
