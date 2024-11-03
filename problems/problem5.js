var obj = {
    name: "vivek",
    getName: function() {
        console.log(this.name);
    }
}
       
var getName = obj.getName;  // The function is assigned without invoking, losing its original `this` context
       
var obj2 = {name: "akshay", getName };
obj2.getName();  // Calls getName from obj2's context
