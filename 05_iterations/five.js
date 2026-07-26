const coding = ["js","ruby","java","python"];

coding.forEach((item)=>{
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe);

const myCoding =[
    {
        languageName : 'javascript',
        languageFileName: 'js'
},
    {
  languageName : 'java',
        languageFileName: 'jv'
},
    {
  languageName : 'python',
        languageFileName: 'py'
}
]

myCoding.forEach((item, index, arr)=>{
    console.log(item.languageFileName);
})