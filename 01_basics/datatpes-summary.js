const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123455563434345545464656645n

const heroes = ["shakthiman","naagraj","doga"]
let var1 ={
    name: "ullas",
    age: 22,
}

const myFunction= function(){
console.log("hello world")
}

const func2=function(){
console.log("kdkadasd");
}

console.log(typeof myFunction )
const bigNumber1 = 123455563434345545464656645n

const heroes2 = ["shakthiman","naagraj","doga"]
let var13 ={
    name: "ullas",
    age: 22,
}

// stack memory: primitive data type
// heap memory : non primitive dtaa type

let myName = "ullas kumbati";

let anotherName = myName;
anotherName = "new name";

console.log(myName);
console.log(anotherName);


let user1 = {
    email:"user@google.com",
    upi:"user@ybl"
}

let user2 =user1;

user2.email = "ullas@google.com";
console.log(user1.email);
console.log(user2.email);