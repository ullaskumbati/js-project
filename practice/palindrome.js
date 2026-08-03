// palindrome

const word = "ullas";

let left = 0;
let right = word.length - 1;
console.log(left, right);

function palindrom(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
        console.log(left, right);
    }
}
console.log(palindrom("madam"));

function palin(str) {

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(palin("kanaka"));

const str = "ullas";
let result = '';

for(let i=str.length-1; i>=0; i--){
    result += str[i];
}
console.log(result);


function pal(str){
    let left = 0;
    let right = str.length-1;

    while(left < right){
        if(str[left]!== str[right]){
            return false;
        }
        left ++;
        right --;
        }
        return true;
}
console.log(pal("llal"));