const arr = [0,1,2,3,4,5,6,7];

arr.forEach((num)=>{
    console.log(num)
    if(num === 3){
        // throw "error" 1st unethical way
        arr.length = 0
    }
})

//  1st way - we can not directly break foreach llop, to break foreach loop we have to through error 
//  2nd way - to break foreach loop set arr.length = 0
