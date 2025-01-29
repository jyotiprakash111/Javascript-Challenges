// 1

function fruit(){
    console.log(name1);
    console.log(price);

    var name1 = "Bikash"
    let price = 23

}

// fruit();

//  2

// for(var i =0; i<3; i++){
//     setTimeout(()=>{
//         console.log(i),1
//     })
// }

// 3 

// for(let i =0; i<3; i++){
//     setTimeout(()=>{
//         console.log(i),1
//     })
// }

// 4

// console.warn(+true)
// console.log(typeof +true)

// 5 

// console.warn(!"anil")
// console.warn(typeof("anil"))

//  6

let data = "size"
const bird = {
    size: "Small"
}

// console.warn(bird[data]) 
// console.warn(bird["size"]) 
// console.warn(bird.size) 
// console.warn(bird.data) 

let c = {name: "peter"}
let d;

d = c;

c.name = " peter"

console.log(d.name)


// 7 

var x;
var x = "10"
console.log(x)

let a = 3
let b = new Number(3)

console.log(a == b)
console.log(a === b)

// 8
const arr = [1,2,3]
arr[10] =10 
console.log(arr.length)

// 9

function fruit(){
    console.log("Woof!")
}

fruit.name = "Apple"
fruit()

// 10

function sum(a,b){
    return a + b
}

console.log(sum(1,"2", 23))


// 11

let number = 0;

console.log(number ++) //0 initially then 1
console.log(++number) // 1 ++ becomes 2
console.log(number) // print the prebious value in line no 102

// 12
function getAge(...args){
console.log(typeof args)
}

getAge(21)

// 14

function getAge(){
    // "use strict";
    age = 21
    console.log(age)
}

getAge()

//15 

const summ = eval('10*10+5')
console.warn(summ)

// 16

// ** how long is cool_secret accesable ?
if (typeof sessionStorage !== 'undefined') {
    sessionStorage.setItem("Cool_secret", JSON.stringify(123));
  } else {
    console.log('sessionStorage is not available');
  }
  

// 17 

const obj = {a: "one", b:"two", c:"Three", a:"Repeat"}
console.log(obj)

// 18 

for (let i = 1; i< 5; i++){
    if(i === 3) continue
    console.log(i)
}

const foo = () => console.log("First")
const bar = () => setTimeout(() => {
 console.log("Second")   
}, 1000);

const baz = () => console.log("Third")

// bar();
// foo();
// baz();

// 19 

const person = {name: "Lydia"}

// function sayHi(age){
//  return `${this.name} is ${age}`;
// }
console.log(sayHi.call(person, 21))
console.log(sayHi.bind(person, 21))


// 20

function sayHi(){
    return(()=> "bhfhf")
}
// console.log(typeof sayHi());

// 21
