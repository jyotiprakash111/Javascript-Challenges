// convert object to string

const user = {
    name: "Biki",
    age: 23
}

console.log(JSON.stringify(user))


const a = {}
const b = {key: "b"}
const c = {key: "c"}

a[b] = 123;
console.log(a)
a[c] = 456;

console.log(a[b])


// 
const data = {
    a: "one",
    b: "two",
    a: "three"
}

console.log(data)

// create a fnction that multiplies all numbers

let nums = {
    a: 100,
    b: 200,
    title: "my nums"
}

multiplyByTwo(nums)

function multiplyByTwo(data){
    for(key in data){
        if(typeof data[key] === "number"){
            data[key] = data[key] * 2
        }
    }
}

console.log(nums)

// loop through each element using for-in loop
const userData = {
    name: "bikash",
    age: 24,
    isTotallyAwesome: true
}

for(key in userData){
    // console.log(key)
    console.log(key[key])
}