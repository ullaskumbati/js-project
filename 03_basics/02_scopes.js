let a = 300;

if(true){
let a= 10;
const b = 20;
var c = 30;
// console.log(a);
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const userName = "ullas";
    function two(){
        const website = "youtube";
        console.log(userName);
    }
    two();
    console.log(website);
}
// one();

if(true){
    const userName = "ullas";
    if(userName==="ullas"){
        const website = " youtube";
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);

// ++++++++++++++++++++ interesting  ++++++++++++++++

function addone (num){
    return num +1;
}
console.log(addone(5));

const addTwo = function(num){
    return num + 2
}
addTwo(5);