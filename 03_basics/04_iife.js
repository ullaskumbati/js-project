// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB connected`);
})();

((name)=>{
    console.log(`DB connected two ${name}`);
})("ullas");
