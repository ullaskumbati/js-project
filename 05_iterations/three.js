// for of

const arr = [1,2,3,4,5];

// for (const value of arr) {
//     console.log(value);
// }

const gretings = "hellow world";

for(const greet of gretings){
    if(greet == " "){
        continue;
    }
    console.log(greet);
}