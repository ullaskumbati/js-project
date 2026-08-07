// reverse string

const str = 'ullas';
let result = '';

for(let i=str.length-1; i>=0; i-- ){
    result += str[i];
}
console.log(result);


const str = 'azar sameeulla';
let vowels = "aeiou";
let count = 0;

for(let i=0; i<str.length; i++){
    if(vowels.includes(str[i].toLowerCase())) count ++;
}
console.log(count);