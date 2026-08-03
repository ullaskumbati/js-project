// reverse a given string

const arr = 'ullas kumbati';

let result = '';

for (let i=arr.length-1; i>=0; i--){
    result += arr[i];
}
console.log(result);