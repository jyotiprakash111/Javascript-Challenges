
// map

const arr = [1,2,3,4,5]

const result = arr.map((item) => {
    return item * 2
})

console.log(result)

// filtter

const result2_filter = arr.filter((item)=>{
    return item > 2
})

console.log(result2_filter)

// reduce method sum of all the array elements

const nums = [1,2,4,5,6,8]

const reduce_res = nums.reduce((acc,current)=>{
    return acc + current
},0)

console.log(reduce_res);

// pollyfill for map

// Array.map((num,i,arr)=>{})


Array.prototype.myMap = function(callback){
    let temp = []

    for(let i=0; i< this.length; i++){
        temp.push(callback(this[i],i,this))
    }
    return temp

}

const data = [1,2,3,4,5]

const pollyfillTesting_Map = data.map((item) => {
    return item * 5
})

console.log(pollyfillTesting_Map)

// pollyfill for filter

Array.prototype.myFilter = function(callback){
    let temp = []

    for(let i =0; i< this.length; i++){
        if(callback(this[i],i,this)){
            temp.push(this[i])
        }
    }
    return temp
}


const datasss = [1,2,3,5,6,7,8,9]
const pollyfill_filter = datasss.myFilter((item)=>{
    return item > 2
})

console.log(pollyfill_filter)

// let's write a pollyfill for reduce
// it takes 2 things 1 is a callback , the other is the initial value

// arr.reduce((acc,current,index,arr)=>{},initialValue)

Array.prototype.myReduce = function(callback,initialValue){

}