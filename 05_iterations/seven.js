const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNumbers.map((num)=> num + 10)
// console.log(newNums);

const morNum = [];

const newNum = myNumbers.forEach((item)=>{
    morNum.push(item + 10);
})
// console.log(morNum)

