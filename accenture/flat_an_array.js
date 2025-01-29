const arr = [1, 3, 2, [7, 6, [8, 9]]];
const flattenedArr = [];

function flattenArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenArray(array[i]);
    } else {
      flattenedArr.push(array[i]);
    }
  }
}

flattenArray(arr);
console.log(flattenedArr); // Output: [1, 3, 2, 7, 6, 8, 9]



console.log(  true && []  && "string")

// -2  

// -1 && 0


console.log(typeof typeof true) 

"boolean"