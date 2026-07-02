const marvel_heros = ["thor",true,1,"ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[5][1]);

// const allHeros= marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(1);

// console.log(real_another_array);

console.log(Array.isArray([1,2]));
console.log(Array.from("ullas"));
console.log(Array.from("ullas"));


