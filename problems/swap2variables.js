// swap 2 variables without using temporary variable

//  Method 1 (Using Addition and subtraction) 

// The idea is to get a sum in one of the two given numbers. The numbers can then be swapped using the sum and subtraction from the sum. 

let x = 10
let y = 5

// code swap x and y

// x is now become 15
x = x + y

// now y becomes 10
y = x - y 

// x becoms 5
x = x - y


// document.write("After Swapping x =" + x + " , y="  + y);
console.log("After Swapping x = " + x + ", y = " + y);