// const data = [
//   { user: 'Alice', item: 'Book' },
//   { user: 'Bob', item: 'Pen' },
//   { user: 'Alice', item: 'Laptop' }
// ];
// let result = {};

// for (let i=0; i<data.length; i++){
//     // console.log(data[i]);
//     const user = data[i].user;
//     const item = data[i].item;
//     console.log(user,item);

//     if(!result[user]){
//         result[user] = [];
//             console.log(result[user]);
//     }
//     result[user].push(item);
// }
// console.log(result);


// const data = [
//   { user: 'Alice', item: 'Book' },
//   { user: 'Bob', item: 'Pen' },
//   { user: 'Alice', item: 'Laptop' }
// ];

// let result = {};

// for (let i=0; i<data.length; i++){
//     const user = data[i].user;
//     const item = data[i].item;

//     if(!result[user]){
//         result[user] = [];
//     }
//     result[user].push(item);
// }
// console.log(result);


const data = [
  { user: 'Alice', item: 'Book' },
  { user: 'Bob', item: 'Pen' },
  { user: 'Alice', item: 'Laptop' }
];

let result = {};

for (let i=0; i<data.length; i++){
    const user = data[i].user;
    const item = data[i].item;

    if(!result[user]){
        result[user] = [];
    }
    result[user].push(item);

}
console.log(result);