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