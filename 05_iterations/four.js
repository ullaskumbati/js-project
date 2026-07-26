const myObject ={
    js:"javscript",
    cpp: "cpp",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject){
    // console.log(myObject[key]);
}

const map = new Map();
map.set('IN',"India");
map.set('usa',"United states of america");

for (const key in map) {
    
    console.log(key);
}