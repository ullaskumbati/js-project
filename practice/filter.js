const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Expected output: [2, 4, 6, 8]

const result = numbers.filter( i =>i % 2 === 0)
console.log(result);

numbers.filter(i => i%2 ===0)

const result2 = numbers.map(i =>i*2);

console.log(result2)

const numberse = [5, 12, 8, 20, 3, 15];

// Expected output: [12, 20, 15]

const res = numberse.filter(i => i>10);

console.log(res);

const users = [
  { name: "Rahul", age: 17 },
  { name: "Priya", age: 25 },
  { name: "Amit", age: 16 },
  { name: "Sneha", age: 30 }
];

// Expected output: Priya and Sneha objects
// Condition: age >= 18

const userRes = users.filter(i => i.age>=18);
console.log(userRes);


//common elements in 2 array

const ar1 = [1,2,3,4];
const ar2 = [3,4,5,6];

const arr3 = ar1.filter(i =>ar2.includes(i));
console.log(arr3);

//exists in first array but not in second

const a = [1,2,3,4,5,6];
const b = [3,4,5];

const c= a.filter(i=>!b.includes(i));
console.log(c);

const t = [20,40,50,60];
const y = t.shift();
console.log(y); //20
console.log(t);// [40,50,60]
const i = t.unshift(10);
console.log(i);// 4
console.log(t);// [10,40,50,60]

const o = [2,3,4,5,6,7];
 const p = o.pop();
 console.log(p);// 7
 console.log(o); // [2,3,4,5,6]
const l = o.push(8);
console.log(l);// 6
console.log(o);// [2,3,4,5,6,8]