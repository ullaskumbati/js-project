const arr= [1,1,2,3,4,5,6,5,6];
let result = [];

for(let i=0; i<arr.length; i++){
    let found = false;
    for(let j=0; j<result.length; j++){
        if(arr[i]===result[j]){
            found = true;
            break;
        }
    }
    if(!found){
        result.push(arr[i]);
    }
    
}
console.log(result);
















const arr = [1,1,34,3,2,3,2,1,2,23,3,4,56,7,8,9,0,8,8,85,4,4];
let result = [];

for (let i=0; i<arr.length; i++){
    let found = false;
    for(let j=0; j<result.length; j++){
        if(arr[i]===result[j]){
            found = true;
        }
    }
    if(!found){
        result.push(arr[i]);
    }
}

console.log(result);


// reverse string

const arr = "ullas";
let res = '';

for(let i=arr.length-1; i>=0; i--){
    res += arr[i];
}
console.log(res)

largest in array

const arr = [1,2,3,45,6,7,88,75,4,33];
let largest = arr[0];

for (let i=1; i<arr.length; i++){
    if(arr[i]> largest){
        largest = arr[i]
    }
}

console.log(largest);


// palindrome

function pal(str){
    let left = 0;
    let right = str.length-1;

    while(right>left){
        if(str[left]!==str[right]){
            return false;
        }
        left ++;
        right --;
    }
    return true;
}
console.log(pal('madams'));

// second largest

const arr = [1,2,3,4,5,6,7,7];
let strict = new Set(arr);
let largest = -Infinity;
let secLar = -Infinity;

for (let val of strict){
    if(val> largest){
        secLar= largest;
        largest = val;

    }else if(val>secLar){
        secLar = val;
    }
}
console.log(secLar);

// flattern array 

const arr = [1,2,3,[4,2,4],5,6,[2,4]];
let result = [];
function flat(arr){
for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
        flat(arr[i]);
    }else{
        result.push(arr[i]);
    }
}
}

flat(arr);
console.log(result);

duplicate

let result = [];

for(let i=0; i<arr.length; i++){
    let found = false;
    for(let j=0; j<result.length; j++){
        if(arr[i]===result[j]){
            found = true;
            break;
        }
    }
    if(!found){

    
    result.push(arr[i]);
    }
}
console.log(result);



let arr=[1,2,3,2,3,4,5,3,4,5,6,7,7,6,8];

let result = [];

for(let i=0; i<arr.length; i++){
    let found = false;
    for(let j=0; j<result.length; j++){
        if(arr[i]===result[j]){
            found = true;
            break;
        }
        
    }
    if(!found){
            result.push(arr[i]);
        }
}
console.log(result);