//  currying 
// simple functions that adds numbers

function add(x,y,z){
    return x + y + z
}
// console.log(add(1,2,3))

// actual currying function

function add(x){
    return function(y){
        return function(z){
            return x + y + z
        }
    }
}

// uses 
const add1 = add(1)
const add1add2 = add1(2)
const result = add1add2(3)

console.log(result)

// currying using arrow functins

const addddd = x => y => z => x + y + z 
console.log(addddd(1)(2)(3))


//  add sum of Sno1 

let obj = [
    { Sno: 1, score: 20 },
    { Sno: 2, score: 30 },
    { Sno: 1, score: 50 }
  ];
  
  let resultt = obj.reduce((acc, current) => {
    // Check if the Sno already exists in the accumulator
    if (acc[current.Sno]) {
      // If it exists, add the current score to the existing score
      acc[current.Sno] += current.score;
    } else {
      // If it does not exist, initialize it with the current score
      acc[current.Sno] = current.score;
    }
    return acc;
  }, {});
  
  // Print the sum of scores for Sno 1
  let sumSno1 = resultt[1] || 0;
  
  console.log({ Sno: 2, score: sumSno1 }); // Output: { Sno: 1, score: 70 }
  

//   add sum of nums using reduce method

// using for loop
const numbers = [1,-1,2,3]

let sum = 0 
for (let n of numbers)
    sum += n

console.log(sum)

// using the reduce method
const numberss = [1,-1,2,3]

// a = 0, c = 1 a => 1
// a = 1, c = -1 a=> 0
// a = 0, c = 2 a=> 2
// a = 2, c =3 a=> 5

const resultSum = numberss.reduce((accume, currentValue) =>{
    return accume + currentValue
},0)

console.log(resultSum)

const resultData = numberss


// falten an array not using inbuilt method

function flattenArray(arr) {
    return arr.reduce((acc, cval) => {
      return Array.isArray(cval) ? acc.concat(flattenArray(cval)) : acc.concat(cval);
    }, []);
  }
  
  // Example usage
  let nestedArray = [1, [2, [3, 4], 5], 6];
  let flatArray = flattenArray(nestedArray);
  console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]
  