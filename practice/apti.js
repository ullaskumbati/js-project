//Remove duplicates without changing order
const arr = [1,2,2,3,4,5,6,6,7,7,8];

const result = [...new Set(arr)];
console.log(result);

//dont use set 

const result2 = [];
for(const item of arr){
    if(!result2.includes(item)){
        result2.push(item);
    }
}

console.log(result2);