const data = [
  { product: "iPhone", category: "Electronics" },
  { product: "Shirt", category: "Clothing" },
  { product: "Laptop", category: "Electronics" },
  { product: "Jeans", category: "Clothing" }
];

let result = {};

for(let i=0; i<data.length; i++){
    let product = data[i].product;
    let category = data[i].category;

    if(!result[category]){
        result[category] = [];
    }
    result[category].push(product);
}
console.log(result);