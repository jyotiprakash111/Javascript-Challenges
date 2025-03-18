// fibonachii using iteration

function fibonachii(n) {
    let fib = [0,1] // starting values

    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }

    return fib
}

//  example uses 
console.log(fibonachii(10)) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonachii(5)) // [0, 1, 1, 2, 3]
console.log(fibonachii(15)) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377] 


// Fibonacci Using Recursion

function fibonacciRecursive(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Print first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
    console.log(fibonacciRecursive(i));
}
