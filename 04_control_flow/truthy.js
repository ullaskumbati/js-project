const userEmail =[]


// if(userEmail){
//     console.log("email found");
// }else{
//     console.log("no user email")
//     }


// if(userEmail.length === 0){
// console.log("empty array")
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("emptyobject")
}

// null coalescing operator

let val1;
// val1 = 5??10;
val1 = null??10;
console.log(val1);

// ternary operator

const icetea = 100;
icetea <=80? console.log('less than 80 '): console.log("more than 80")