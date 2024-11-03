// we can override the default arguments by using usestrict

function sum(num1,num2){
    "use strict"
    num1 = 100
    num2 = 200
    return arguments[0] + arguments[1]
  }
  
  console.log(sum(10,10))