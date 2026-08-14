const data = [
  { user: "Alice", item: "Book" },
  { user: "Bob", item: "Pen" },
  { user: "Alice", item: "Laptop" },
  { user: "Alice", item: "Phone" },
  { user: "Bob", item: "Bag" }
];

let result ={};

for(let i=0; i<data.length; i++){
    let user = data[i].user;
    let item = data[i].item;
    let count = 0;
    if(!result[user]){
        result[user] = [];
    }
    count ++
    result[user].push(count);
}

console.log(result);