// 1. check if number is even 

const isEven = num => num % 2 === 0 

console.log(isEven(2));

//2. Reverse a sring 

const reversring = str => str.split("").reverse().join("")

console.log(reversring("hello"));

// 3. generate random number between a range

const randomRange = (min,max) => Math.random() * (max-min) + min  

console.log(randomRange(1,10));

// 4. Capitalize first letter of string

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
console.log(capitalize("hello"))

// 5. check is array is empty 
const isArrayEmpty = arr => !arr.length;

console.log(isArrayEmpty([]))

//  6. faltetn a 2d array 
const flatten = arr => arr.reduce((acc,val)=> acc.concat(val),[])

console.log(flatten([[1,2],[3,4]]))

// 7. remove duplicates from an array
const uniqueArray = arr => [...new Set(arr)];
console.log(uniqueArray([1,2,3,3,4,6,6,6,5,8]))