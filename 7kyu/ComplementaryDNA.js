// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function dnaStrand(dna) {
  const complementsKey = {
    a: "T",
    t: "A",
    c: "G",
    g: "C",
  };

  const complements = dna.split("").map((letter) => {
    return complementsKey[letter.toLowerCase()];
  });

  return complements.join("");
}
