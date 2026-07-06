function sayMyName(){
console.log("u");
console.log("l");
console.log("l");
console.log("a");
console.log("s");
}

// sayMyName();

// function add(number1, number2){
//     console.log(number1 + number2);
// }
function add(number1, number2){
   
    let result = number1 + number2;
    return result;
}

const result = add(2,"5");
// console.log(result);

function loginUserMessage(userName = "sam"){
    if(userName === undefined){
        console.log("please ennter username");
        return;
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("ullas"));
// console.log(loginUserMessage("ullas"));

function calculateCartPrice(var1,var2,...num1){
    return num1;
}

// console.log(calculateCartPrice(2,4,5,6,7));

const user ={
    userName:"ullas",
    price:77,
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} price is ${anyObject.price}`)
}

handleObject(user);


