// singleton 
// object.create

//object literals
const mySym = Symbol("key1");
const JsUser = {
    name: "ullas",
    age:18,
    location:"banglore",
[mySym]:"myKey1",
    email:"ullas@googles.com",
    isLoggedIn:false,
    lastLoggidIn : ["Monday","tuesday"]
};

// console.log(JsUser.lastLoggidIn);
// console.log(JsUser["lastLoggidIn"]);
// console.log(JsUser[mySym]);
// console.log(JsUser.name);
// JsUser.name = "sharath";
// console.log(JsUser.name);
// console.log(JsUser);
// Object.freeze(JsUser);
JsUser.name= "malatesh";

JsUser.greeting = function(){
    console.log("hello user ");
}
JsUser.greeting2 = function(){
    console.log(`hlo user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
