// Q. Given an array of integers, find the one that appears an odd number of times. 
// There will always be only one integer that appears an odd number of times.

const findOdd = arr => {
    return arr.reduce((a,b)=> a ^ b)
}
console.log(findOdd)

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); 
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); 
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); 
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); 
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); 
console.log(findOdd([10])); 