
const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    //if length > 26 letters return false (after removed duplicates)
    if (!alphabet) return false
    if (alphabet.length !== 26) return false
    //new set to avoid duplicates for given alphabet parameter
    if (Array.from(new Set (alphabet)).length !==26) return false
    const myAlphabet = "abcdefghijklmnopqrstuvwxyz";
    //split input into string and convert to lowercase
    alphabet = alphabet.split("")
    input = input.toLowerCase()
    //encode object and decode object
    let substitution = {}
    let decode = {}
    let result = ""
    //loop each letter in input
    myAlphabet.split("").forEach((letter, index) => {
      substitution[letter] = alphabet[index]
      decode[alphabet[index]] = letter
    })
    //if decode --> reverse 
    if (!encode) substitution = decode
    input.split("").forEach(input => {
      result += input === " " ? " " : substitution[input]
    })
    return result
  }








  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };