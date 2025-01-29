//  reverse an array bu not using inbuild method

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap the elements
        [arr[left], arr[right]] = [arr[right], arr[left]];

        // Move the pointers
        left++;
        right--;
    }

    return arr;
}

// Example usage
const array = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(array);
console.log(reversedArray);  // Output: [5, 4, 3, 2, 1]


// adding values to an array 

let array2 = [1, 2, 3];
array.push(4);  // Adds 4 to the end of the array
console.log(array2);  // Output: [1, 2, 3, 4]

// Removing Values from an Array: You can use the pop method to remove the last value from the array.

array.pop();  // Removes the last element
console.log(array);  // Output: [1, 2, 3]

// For removing a specific value, you can use the splice method:
array.splice(1, 1);  // Removes 1 element at index 1
console.log(array);  // Output: [1, 3]


// Getting a Unique Array: To get an array of unique values, you can use the Set object along with the Array.from method.

let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = Array.from(new Set(arrayWithDuplicates));
console.log(uniqueArray);  // Output: [1, 2, 3, 4, 5]


// Reversing a String: You can reverse a string by converting it to an array, using the reverse method, and then joining it back into a string.

let string = "Hello, World!";
let reversedString = string.split('').reverse().join('');
console.log(reversedString);  // Output: "!dlroW ,olleH"


// 6 months old interview experience
// Round -1 

// 1. Es 6 features

// 2. call, apply, bind

// 3. Hoisting in js in depth

// 4. Closure

//  pollyfills

// how js code get excuted in js

// event loop

// 5. callBack Functions

// 6. Javascript asynchronous behavior with example

// 7. Reactjs

// 8. Use of redux  without redux if we will use what will happen ?

// 9. package.json explanation , what used to store inside it

// 10. diff between virtual dom and real dom

// 11. React Hooks

// 12. increament counter in react with example


// rotate the matrix

const data = [ 
     [0,1,2],
     [3,4,5],
     [6,7,8]
]

// eexpected output 

[

    [6,3,0],
    [7,4,1],
    [8,5,2]
]

function rotateMatrix(matrix) {
    let n = matrix.length;
    let result = [];

    for (let i = 0; i < n; i++) {
        result[i] = [];
        for (let j = 0; j < n; j++) {
            result[i][j] = matrix[n - j - 1][i];
        }
    }

    return result;
}

const rotatedData = rotateMatrix(data);
console.log(rotatedData);

// Expected output:
// [
//     [6,3,0],
//     [7,4,1],
//     [8,5,2]
// ]
