const mynums = [1,2,3];

const  myTotal = mynums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval ${currval}`);
    return acc + currval
},0);
// console.log(myTotal);
// const myTotal2 = mynums.

const myTotal2 = mynums.reduce((acc,currval)=>{
    return acc + currval;
},0);
// console.log(myTotal2);

const shoppingCart = [
    {
        itemName:"js course",
        price:299
    },
        {
        itemName:"python",
        price:3299
    },
        {
        itemName:"mobile course",
        price:99
    },
        {
        itemName:"data science course",
        price:1299
    },
        {
        itemName:"llm course",
        price:8299
    },
]

const priceToPay = shoppingCart.reduce((acc, item)=>{return acc + item.price},0);
console.log(priceToPay);