// Write a function in JavaScript that takes an array of numbers and returns the sum of all positive numbers in the array.

function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10. -27];
console.log(sumOfPositiveNumbers(arr));