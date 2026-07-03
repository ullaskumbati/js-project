// const tinderUser = new Object(); single ton Object
const tinderUser = {};

tinderUser.id = "123";
tinderUser.name = "ullas";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email:"sum@gmail.com",
    fullName : {
        userFullname :{
            firstName:"ullas",
            lastName:"kumbati"
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstName);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 ={
    3:"c",
    4:"d"
}

// const obj3 = {obj1,obj2};
const obj4 = Object.assign({},obj1,obj2);
// console.log(obj4);

const obj3 ={...obj1, ...obj2};
// console.log(obj3);

const users = [
    {
       id:1,
       email:"u@gmail.com" 
    },
    {
        id:2,
        email:"d@gmail.com"
    },
    {
        id:3,
        email:"h@gmail.com"
    },
]
// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(users));
// console.log(Object.values(tinderUser));


const course ={
    courseName: "js in hindi",
    price: "999",
    courseInstructor:"hitesh"
}

const {courseInstructor:instructor} = course;
console.log(instructor)

// {
//     "name":"ullas",
//     "courseName":"js in hindi",
//     "price":"free"
// }