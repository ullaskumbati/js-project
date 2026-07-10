const user ={
    userName : "ullas",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.userName} welcome to website`)
        console.log(this);
    }
}
// user.welcomeMessage();
// user.userName = "maltesh";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     console.log(this);
// }

// console.log(chai());

const chai = ()=>{
    let username = "ullas"
    console.log(this.username);
}
// chai();

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }
// const addTwo = (num1, num2)=> num1 + num2
// const addTwo = (num1, num2)=> (num1 + num2)
const addTwo = (num1, num2)=> ({userName:"ullas"})



console.log(addTwo());

// const myArray = [2,5,3,4,6];

