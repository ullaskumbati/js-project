const arr = [1, 2, [3, 2, 3], 5, 6, [8, 2, 5]];

let result = [];

function flaternArray(array){
    for(let i=0; i<array.length; i++){
      if(Array.isArray(array[i])){
        flaternArray(array[i])
      }else{
        result[result.length]=array[i];
      }
    }
}
flaternArray(arr);
console.log(result);