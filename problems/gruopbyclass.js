const data = [
  { name: "Alice", class: "10A" },
  { name: "Bob", class: "10B" },
  { name: "Charlie", class: "10A" },
  { name: "David", class: "10B" }
];

let result = {};

for (let i=0; i<data.length; i++){
    let name = data[i].name;
    let clas = data[i].class;

    if(!result[clas]){
        result[clas] = []
    }
    result[clas].push(name);

}
console.log(result);