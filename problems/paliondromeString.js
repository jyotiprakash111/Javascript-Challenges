function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }
  
  // Example usage:
  console.log(isPalindrome("racecar")); 
  console.log(isPalindrome("hello")); 

  // Output: true
  // Output: false
  