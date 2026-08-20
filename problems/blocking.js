// blocking code 

// const fs = require('fs');
// const data = fs.readFileSync('./problems/largeFile.txt');

// console.log(data);
// console.log("done");

//non blocking code

const fs = require("fs");

fs.readFile("./problems/largeFile.txt", (err, data) => {
  console.log(data);
});

console.log("Done");


