// Q. Return the number (count) of vowels (a, e, i, o, u) in the given string.
// The input string will only consist of lower case letters and/or spaces.

const getCount = (str) => {
  // check if str is not null or undefind
  if (str === null || str === undefined) {
    return 0 //or handle as per your requirement
  }
  // use try catch block to handle potential error
  try {
    // use to find all vowel and return the count
    const matches = str.match(/[aeiou]/gi)
    if (matches) {
      return matches.length 
    } else {
      return 0 // if no matches found
    }
  } catch (error) {
    console.error("Error: " + error)
    return 0
  }
}

console.log(getCount("i love u a lot")) // 0
//   console.log(getCount('pear tree')); // 4
//   console.log(getCount('abracadabra')); // 5
//   console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13
