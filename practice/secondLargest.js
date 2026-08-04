const arr = [1,2,3,4,5];

let largest = -Infinity;
let secondLargest = -Infinity;

for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        secondLargest= largest;
        largest=arr[i];
    }else if(arr[i]>secondLargest){
        secondLargest=arr[i];
    }
}
console.log(secondLargest);


const array = [11,22,33,44,55];
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i=0; i<array.length; i++){
    if(array[i]>largest){
        secondLargest= largest;
        largest= array[i];
    }else if(array[i]>secondLargest){
        secondLargest= array[i];
    }
}
console.log(secondLargest)






// largest

const arr = [1,2,3,4,5,8,7,6];
let lar = -Infinity;
let sec = -Infinity;
let thi = -Infinity
for (let i=0; i<arr.length; i++){
    if(arr[i]> lar){
        sec= lar;
        lar = arr[i]
    }else if(arr[i]>sec){
        thi = sec;
        sec = arr[i];
    }else if(arr[i]>thi){
        thi= arr[i]
    }
}
console.log(thi);




const arr = [1,2,3,45,67,67,68];
let great = arr[0];

for (let i=1; i<arr.length; i++){
    if(arr[i]>great){
        great = arr[i];
    }
}
console.log(great);

let lar = -Infinity;
let sec = -Infinity;

for (let i=0; i<arr.length; i++){
    if(arr[i]>lar){
        sec=lar;
        lar=arr[i];
    }else if(arr[i]>sec){
        sec=arr[i];
    }
}
console.log(sec);



const vs = 'subbu';
let rev = '';

for (let i=vs.length-1; i>=0; i--){
    rev += vs[i];
}
console.log(rev);


function pal(str){
    let left = 0;
    let right = str.length-1;

    while(right > left){
        if(str[left] !== str[right]){
            return false;
        }
        left ++;
        right --;
    }
    return true;
}
console.log(pal('madamf'));


const yy = [1,2,3,4,5,5,6,6,7];
let lar = -Infinity;
let sec = -Infinity;

for (let i=0 ; i<yy.length; i++){
    if(yy[i]>lar){
        sec=lar;
        lar = yy[i];
    }else if(yy[i]>sec){
        sec = yy[i];
    }
}
console.log(sec);