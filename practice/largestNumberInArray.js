const arr = [1,22,99,121,88,111];

let largest = arr[0];

for (let i=1; i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
}
console.log(largest);

const arr = [22,55,66,1,2,344];

let largest = arr[0];

for (let i=1; i<= arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
}
console.log(largest)

// reverse string

const arr = 'ullas';
let result = '';

for (let i=arr.length-1; i>=0; i--){
    result += arr[i];
}
console.log(result);

// palindrom

function pal(str){
    let left = 0;
    let right = str.length-1;

    while (left<right){
        if(str[left]!==str[right]){
            return false;
        }
        left ++;
        right --;
    }
    return true;
}
console.log(pal('ullsllu'));


largest in array

let arr = [1,55,66,3333,45566,678856,3433,2312.213,21321,232132312334,324,234,234,23,,213123123213];

let largest = arr[0];

for (let i=1; i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
}
console.log(largest);

// reverse string 

const arr = 'malatesh';

let result = '';

for (let i=arr.length-1; i>=0; i--){
    result += arr[i];
}
console.log(result);

palindrom

function pal(str){
    let left = 0;
    let right = str.length-1;

    while (left < right){
        if(str[left]!==str[right]){
            return false;
        }
        left ++;
        right --;
    }
    return true;
}
console.log(pal('madam'))


largest in array

const arr = [1,3,3,556,77,8889,5,53435345,45345324];

let largest = arr[0];

for (let i=1 ; i <= arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
}
console.log(largest);