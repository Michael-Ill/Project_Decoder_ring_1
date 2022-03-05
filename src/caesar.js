// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //return false if shift is null, equal to 0, less than -25, or grater than 25.
    if (shift === null || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    //if encode is false, reverse shift
    if (encode === false) {
      shift = shift * -1;
    }

    //convert input into lowercase
    input = input.toLowerCase();
    //declare a variable that contains and array of the alphabet
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let encodedInput = [];
    //breakdown the input to be able to deal with the individual characters (for loop?)
    //leave spaces and special characters alone
    //compare our input to the alphabet array to find the corresponding letter/index
    for (let i = 0; i < input.length; i++) {
      if (!alphabet.indexOf(input[i])) {
        encodedInput.push(input[i]);
      } else {
        let newIndex = alphabet.indexOf(input[i] + shift);
        if ((newIndex) > 0 && (newIndex) < 25) {
          encodedInput.push(alphabet[newIndex]);
        } 
      }
    }
    console.log({encodedInput});
    //increasing(positive number to the right) or decreasing(negative number to the left) the index of each letter
    //if at the end of the alphabet, shift to the beginning of the alphabet
    //return new array and convert to a string
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

