// import {useSelector} from "react-redux";

// const userData = useSelector((state)=> state.user)

// console.log(userData)


var b = 1;

function outer() {
    var b = 2;
    function inner() {
        b++; // This refers to the local `b` inside `inner`, but `var b` is hoisted.
        console.log(b); // `a` is not defined, so this throws a ReferenceError.
        var b = 3; // Local `b` is declared and initialized here.
        console.log(b); // This will log the value of the local `b`.
    }
    inner();
}
outer();
