//  Write a function in JavaScript that takes a string as input and returns a new string with all the vowels removed.

function removeVowels(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        newStr += str[i];
      }
    }
    return newStr;
  }
  
  // Example usage:
  const str = "This is a test string with vowels";
  console.log(removeVowels(str)); // Output: Ths s  tst strng wth vwls
  