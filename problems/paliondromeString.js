function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }
  
  // Example usage:
  console.log(isPalindrome("racecar")); // Output: true
  console.log(isPalindrome("hello")); // Output: false
  