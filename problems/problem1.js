
Promise.resolve(1)
.then((res)=>{
    console.log(res)
    return res * 2
})
.then((res)=>{
    console.log(res)
    return res * 2
})
.then((res)=>{
    return res * 2
})
.finally((res)=>{
    console.log(res)
})