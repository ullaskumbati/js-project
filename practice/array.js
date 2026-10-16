const arr = [12,34,5,6,778,9];

const sli = arr.slice(1,3);
console.log(sli)// [34,5];
console.log(arr); // [original array]


const spli = [2,5,6,7,8,9];
const spli2 = spli.splice(1,4);
console.log(spli2); //[5,6,7,8];
console.log(spli); // [2,9];
console.log(spli.splice(1,0,3)); // [2,3,9]
console.log(spli);

const fi = spli.splice(1,1,88);
console.log(spli);//[2,88,9]