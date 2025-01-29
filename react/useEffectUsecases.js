// the useEffect hook in React can emulate the behavior of lifecycle methods that are typically found in class components,
//  such as componentDidMount, componentDidUpdate, and componentWillUnmount.
// Here’s how useEffect supports these lifecycle phases:

// import React, {useEffect} from "react"

// scenario 1
function App(){
    useEffect(()=>{
        console.log("component mounted")
    },[])
}

// scenario 2
// run after state and props changes

function App2(){
    count [count, setCount] = useState(0);

    useEffect(()=>{

        console.log(`count updated: ${count}`)
        // perform action when count changes
    },[count]) // runs whenever count changes

    return(
        <div>
            <p>count: {count}</p>
            <button onClick={(()=> setCount(count + 1))}>Increment</button>
        </div>
    )
}

// scenario 3
// componentWillUnmount (Cleanup Before Component Unmounts)
// To mimic componentWillUnmount, return a cleanup function from useEffect. This function is executed when the component is unmounted or before the effect is re-executed.

function App4(){
    useEffect(()=>{
        console.log("component mounted")

        return()=>{
            console.log("Component unmounted")
            
            // cleanup resources, such as event listeners or subscriptions 
        }
    },[])
}



// scenario 4
// Combined Lifecycle (Mount, Update, Unmount)

// If you want to handle all three phases (mount, update, and unmount) in a single useEffect, include dependencies and a cleanup function.

import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect triggered");

    return () => {
      console.log("Cleanup before next effect or unmount");
    };
  }, [count]); // Runs on mount, count updates, and unmount

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

