const name = "ullas";
const repoCount = 30;

// console.log(name + repoCount + " value"); dont use it 

console.log(`hellow my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("ullas kumbati");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)

console.log(gameName.charAt(3));
console.log(gameName.indexOf(' '));

const newString =gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-12,4);
console.log(anotherString);

const newStringOne = "  ullas   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ullas.com/ullas%28kumbati"

console.log(url.replace('%28','-'));

console.log(url.includes('ullas'));



