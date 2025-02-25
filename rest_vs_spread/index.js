var returnedValue = Math.max(2,4,5,6,67)

// console.log(returnedValue)

var myObj = {}

Object.assign(myObj, {a:1,b:2,c:3}, {z:9,y:8,x:7})

// console.log(myObj)


function sumOne(a,b){
    return a + b 
}

var myA = [5,5]
// console.log(sumOne(...myA)) // spread operator

// incase of mutiple args there ? this is how we can tackele it
function sumTwo(...args){
    console.log(args);
    
    let sum = 0
    for(const arg of args){
        sum += arg // sum = sum + arg (in js it is called Short hand notation)
    }
    return sum
}

// console.log(sumTwo(2,3,4,6,7))

// with multi , like how to return sum and multi at a time
function sumOf_Multi(...args){
    console.log(args);
    
    let sum = 0
    for(const arg of args){
        sum = sum + arg
    }
    return sum
}

console.log(sumOf_Multi(2,3,1,1,1,8,7))







