// A debounce function limits the rate at which a function
// can fire. This is especially useful for optimizing
// performance in events like window resizing, scrolling, or
// keystroke events.

function debounce(func,delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(this,args),delay)
    }
}    
function log(){
    console.log("debounce")
}
window.addEventListener("resize",debounce(log,1000))