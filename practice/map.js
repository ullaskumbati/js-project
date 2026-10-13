const arr = [1,2,3,4,4,5,5];
//expected output [5,10,15,20,25];

const result = arr.map((i)=>{
    return i*5;
})
const result2 =[...new Set(result)]
console.log(result2);

const result3 = result2.map((i)=>{
    return i/5;
})
console.log(result3);

const numbers = [1,2,3,4,5];

const final = numbers.map((i)=>{
    return i.toString();
})
console.log(final);

const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Priya" },
  { id: 3, name: "Amit" }
];

const data = users.map((i)=>{
    return i.name;
})
console.log(data);

console.log('2'===2);