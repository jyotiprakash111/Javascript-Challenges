// A polyfill is a piece of code that adds support for a feature in environments where it’s not available. 
// Essentially, it’s a way to ensure that code works across older browsers or environments that don’t natively support newer JavaScript features.
// Let’s create a polyfill for the Array.prototype.map method. The map method was introduced in ECMAScript 5, 
// so older browsers like Internet Explorer 8 don’t support it. If we want map to work in those environments, we can write a polyfill.
// Example: Array.prototype.map Polyfill
// Here's how we can define a polyfill for Array.prototype.map:

if (!Array.prototype.map) {
    Array.prototype.map = function(callback, thisArg) {
        // Check if 'this' is null or undefined
        if (this == null) {
            throw new TypeError('Array.prototype.map called on null or undefined');
        }
        
        // Make sure the callback is a function
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        
        const result = []; // Array to store the results
        const O = Object(this); // Create an object version of 'this'
        const len = O.length >>> 0; // Convert length to a 32-bit unsigned integer

        // Loop through the array and apply the callback
        for (let i = 0; i < len; i++) {
            if (i in O) { // Skip holes in sparse arrays
                result[i] = callback.call(thisArg, O[i], i, O);
            }
        }
        
        return result; // Return the new array
    };
}
