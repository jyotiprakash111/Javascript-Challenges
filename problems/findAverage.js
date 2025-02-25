// asked in public sapient 

// Find the average of all the numbers in an array

const objdummy = [
    {name: "bikash", age: "23"},
    {name: "vinay", age: "65"},
    {name: "rakesh", age: "55"},
    {name: "arpita", age: "89"},
    {name: "amresh", age: "45"},
];

const totalAge = objdummy.reduce((sum, item) => sum + Number(item.age), 0);
const averageAge = totalAge / objdummy.length;

console.log("Average Age:", averageAge);

// find the highest age along with the corresponding name, you can use the .reduce() method:

const objdummy2 = [
    { name: "bikash", age: "23" },
    { name: "vinay", age: "65" },
    { name: "rakesh", age: "55" },
    { name: "arpita", age: "89" },
    { name: "amresh", age: "45" },
];

const highest = objdummy2.reduce((acc,item)=>{
    return Number
})