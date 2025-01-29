// example of generator function 


function* numberGenretor(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

const gen = numberGenretor()

console.log(gen.next().value)
console.log(gen.next().value)

// print all yield values using for in loop

for(const value of gen){
    console.log(value)
}