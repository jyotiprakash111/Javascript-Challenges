// immediately Invoked Function Expressionvar 

variable = 10;

(()=>{

    const data = variable
    console.log(data);

    variable = 20

    console.log(variable);
})(); //iife

// console.log(variable);

// var variable = 30