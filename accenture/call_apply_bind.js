// call
// The call method calls a function with a specified this value and arguments provided one by one.

// The first argument (age) specifies what this refers to inside the function.
// Additional arguments are passed individually.

const obj = {name: "Bikash"}

function sayHello(age){
    if(typeof age !== "number"){
        return "Error: Age must be a number"
    }
    return "hello" +  " " +  this.name + age
}

console.log(sayHello.call(obj, 23));

let age = 24

console.log(typeof age);

// apply 

const obj2 = {age: "piyush"}

function sayHello2(agee, sex, dob){
    if(typeof agee !== "number" && typeof sex && dob !== "string"){
        return "Error Variable type is not Valid"
    }
    return "Heloo" + this.age + " " + agee + " "  + sex  + " " + dob
}

console.log(sayHello2.apply(obj2,[ "ewe" , "true", "12-02-1996"]))


// bind
// The bind method creates a new function that, when called,
//  has its this keyword set to the provided value, 
// with a given sequence of arguments preceding any provided when the new function is called.

function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

let person = { name: 'Alice' };

let boundGreet = greet.bind(person, 'Hello');
boundGreet('!');  // Output: Hello, Alice!


// confusion question 

const ageeee = 10

var person2 = {
    name: "ayush",
    ageData: 20,
    getAge: function(){
        return this.ageData
    }
}

var person2 = {age: 28}

console.log(person2.name)


const obj222 = {
    number: 10,
    add: ((x, y) => {
      const self = { number: 20 }; // Custom ⁠ this ⁠ for demonstration
      return self.number + x + y;
    })(5, 5), // Directly invoking the function
  };
  
  console.log(obj222.add); // 30