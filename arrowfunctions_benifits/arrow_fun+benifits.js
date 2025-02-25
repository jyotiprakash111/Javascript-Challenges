//  Benifits of using arrow functions


// 1.  lexical binding
// arrow function do nt have their own this, they inherit this from their enclosing lexical scope.

function TraditionalFunction() {
    this.value = 10;
    setTimeout(function() {
        console.log(this.value); // `this` is not the instance, it's `window` (or `undefined` in strict mode)
    }, 1000);
}

function ArrowFunction() {
    this.value = 10;
    setTimeout(() => {
        console.log(this.value); // Correctly refers to `this` of ArrowFunction instance
    }, 1000);
}

new ArrowFunction(); // 10


// 2.  Concise syntax
// Arrow functions reduce boilerplate code, making them more readable.
// Traditional function
function sum(a, b) {
    return a + b;
}

// Arrow function
const sumArrow = (a, b) => a + b;


// 3.  No new keyword
// If a function has a single expression, the result is returned implicitly.
// Traditional function
function square(x) {
    return x * x;
}

// Arrow function with implicit return
const squareArrow = x => x * x;


// 4.  No arguments object

// 5.  No prototype property

// 6.  Can't be used as constructor

// 7.  Can't change this

// 8.  No duplicate named parameters

// 9.  No line break between parameters and arrow

// 10.  No block scope
