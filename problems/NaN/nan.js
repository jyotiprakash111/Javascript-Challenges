// The NaN property in JavaScript represents a value that is "Not-aNumber," indicating an illegal or undefined numeric value. When
// checking the type of NaN using the operator, it returns
// "Number."

// To determine if a value is NaN, the function is employed. It
// converts the given value to a Number type and then checks if it
// equals NaN.

const Details = () => {
  console.log(isNaN("hello"))
  console.log(isNaN(2345))
  console.log(isNaN(true))
  console.log(isNaN(false))
  console.log(isNaN("1"))
  console.log(isNaN(undefined))
  console.log(undefind == null)
  console.log(undefind === null)
  console.log(typeof null)
  console.log(typeof undefined)
  console.log(null === undefined)
  console.log(null == undefined)
}

Details()
