// Source = https://www.codinn.dev/tricky-javascript/es6789-code-snippets-interview-questions



// Scenario -1 
let x = 5;
{
  let x = 10;
  console.log(x);
}
console.log(x);


// Scenario -2
const obj = { a: 1, b: 2, c: 3 };
const { a, b } = obj;
console.log(a, b);

// Scenario -3

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// scenario -4

const arry1 = [1, 2, 3];
const arry2 = [...arr1];

arry2.push(4);

console.log(arry1);
console.log(arry2);


// scenario -5
const xjp = 10;

function foo() {
  console.log(xjp);
  const xjp = 20;
}

// foo();


// scenario -6

const kuchbhi = [1, 2, 3,"a", "ter"];
const kuchbhi2 = kuchbhi;

kuchbhi2.push(4);

console.log(kuchbhi);
console.log(kuchbhi2);

// scenario -7

const companies = [
    { id: "1", name: "Facebook" },
    { id: "2", name: "Apple" },
    { id: "3", name: "Google" },
  ];
  
  companies.sort((a, b) => (a.name > b.name ? -1 : 1));
  console.log(companies);
  

//   Scenario -8

console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof [1, 2, 3]);
console.log(typeof { name: "John", age: 25 });
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof function () {});

// scenario -9
//  Which of the following options accurately describes the output or error thrown by the code above?

function calculateSum() {
    console.log(result);
    var num1 = 5;
    let num2 = 10;
    const num3 = 15;
    var result = num1 + num2 + num3;
  }
  
  calculateSum();
  

//   scenario -10

let h = 1000
function updateX() {
    let h = 10;
  if (true) {
    let h = 20;
    console.log(h);
  }
  console.log(h);
}

updateX();


// scenario -11

// const objj = {
//   i: 1,
//   j: 2,
//   k: {
//     i: 3,
//     j: 4,
//   },
// };

// const {
//   i,
//   j,
//   k: { i: nestedA },
// } = obj;

// console.log(i, j, nestedA);


const obj3 = {
  d: 1,
  e: 2,
  f: {
    a: 3,
    b: 4,
  },
};
const {
  d,
  e,
  f: { a: nestedA },
} = obj3;

console.log(d, e, nestedA);