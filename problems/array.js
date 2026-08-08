// 


// reverse string 

// const str = "kumbati";
// let result = '';

// for(let i=str.length-1; i>=0; i--){
//   result += str[i];
// }
// console.log(result);

// largest number in array

// const arr = [1,2,33,44,33,556,22,7777,22222,33,44,5567,11];

// let largest = arr[0];

// for(let i=0; i<arr.length; i++){
//   if(arr[i]> largest){
//     largest=arr[i];
//   }
// }
// console.log(largest);

//palindrom

// function pal(str){
//   let left = 0;
//   let right = str.length-1;
//   while(right>left){
//     if(str[left]!== str[right]){
//       return false;
//     }
//     left ++;
//     right --;
//   }
//   return true;
// }
// console.log(pal("adam"));

// second largest 

// const arr = [1,2,3,4,5,5,5,3,2,3];
// let map = new Set(arr);
// console.log(map);
// let largest = -Infinity;
// let secLargest = -Infinity;

// for (let value of map){
//   if(value>largest){
//     secLargest=largest;
//     largest = value;

//   }else if(value>secLargest){
//     secLargest=value;
//   }
// }
// console.log(secLargest);

// let largest = -Infinity;
// let secLar = -Infinity;
// let newValue = new Set(arr);
// for(let val of newValue){
//   if(val> largest){
//     secLar=largest;
//     largest = val;
//   }else if(val> secLar){
//     secLar =val;
//   }
// }

// console.log(secLar);

// const arr = [1,2,3,[1,2,3],4,5,[6,5],8];

// let final = [];
// function rev(arr){
// for (let i=0; i<arr.length; i++){
//   if(Array.isArray(arr[i])){
//     rev(arr[i])
//   }else{
//     // final.push(arr[i]);
//     final[final.length]=arr[i];
//   }
// }
// }

// rev(arr);
// console.log(final);

// vowel

const val = 'ullas kumbati';
let vowels = 'aeiou';
let count = 0;
for(let i=0; i<val.length-1; i++){
  if(vowels.includes(val[i])){
    count ++;
  }
}
console.log(count);