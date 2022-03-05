// // Please refrain from tampering with the setup code provided here,
// // as the index.html and test files rely on this setup to work properly.
// // Only add code (helper methods, variables, etc.) within the scope
// // of the anonymous function on line 6

// // It returns false if the given alphabet isn't exactly 26 characters long.
// // It correctly translates the given phrase, based on the alphabet given to the function.
// // It returns false if there are any duplicate characters in the given alphabet.
// // It maintains spaces in the message, before and after encoding or decoding.
// // It ignores capital letters. (For example, the results of A Message and a message should be the same.)

// const substitutionModule = (function () {
//   const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
  

  
//   function substitution(input, alphabet, encode = true) {
//   }

//   return {
//     substitution,
//   };
// })();

// module.exports = { substitution: substitutionModule.substitution };

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {

    if(!alphabet || alphabet.length !== 26){
      return false;
    }

    for(let i = 0; i < alphabet.length - 1; i++){
      for(let j = i + 1; j < alphabet.length; j++){
        if(alphabet[i] === alphabet[j]){
          return false;
        }
      }
    }

    const alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
    "r","s","t","u","v","w","x","y","z"];

    const cypherArray = [...alphabet];


    let result = "";
    input = input.toLowerCase();
    for(let i = 0; i < input.length; i++){

      if(encode === false){

        if(input[i] === " "){
          result += " ";
        }
        else if(input[i] !== " "){
        const currLetter = cypherArray.find((letter) => letter === input[i]);
        result += alphabetArray[cypherArray.indexOf(currLetter)];
        }
      }
      
      if(!alphabetArray.includes(input[i]) && encode === true){
        result += input[i];
      }

      if(alphabetArray.includes(input[i]) && encode === true){
        const currLetter = alphabetArray.find((letter) => letter === input[i]);
        result += alphabet[alphabetArray.indexOf(currLetter)];
      }
    }
    return result;
  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };