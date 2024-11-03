function findSecondHighest(arr) {
    const sortedArr = arr.sort((a, b) => b - a);
    return sortedArr[1];
  }
  
  // Example usage:
  const numbers = [10, 5, 20, 15, 8];
  console.log(findSecondHighest(numbers)); // Output: 15
  

//   Explanation - This function sorts an array in descending order and returns the second item, which is the second-highest number.

