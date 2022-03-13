// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //input checks
    if (!shift || shift < -25 || shift > 25) return false;
    
    //decode shift
    if (!encode) shift *= -1;
    

    let result = input
      .toLowerCase()
      .split("")
      .map((letter) => {
        if (letter.charCodeAt(0) < 97) return letter;
        let shiftNum = letter.charCodeAt(0) + parseInt(shift);
        if (shiftNum > 122) {
          shiftNum = 96 + (shiftNum - 122);
        }
        return String.fromCharCode(shiftNum);
      })
      .join("");
      return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
