// A debounce function limits the rate at which a function
// can fire. This is especially useful for optimizing
// performance in events like window resizing, scrolling, or
// keystroke events.

function debounce(func,delay){
    let timeout;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context,args),delay);
    }
}

// example -2 

function debounce(func,delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(this,args),delay)
    }
}

const log = debounce(()=>{
    console.log("debounce")
},1000)
window.addEventListener("resize",log)