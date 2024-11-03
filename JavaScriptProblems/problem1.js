const p1 = new Promise((res,rej)=>{
    setTimeout(() => rej("one"),timeout);
})

const p2 = new Promise((res,rej)=>{
    setTimeout(() => res("two"),timeout);
})

const p3 = new Promise((res,rej)=>{
    setTimeout(() => res("three"),timeout);
})


Promise.any([p1,p2,p3])
.then((result)=>  console.log(result))
.catch((error)=> console.error(error))

