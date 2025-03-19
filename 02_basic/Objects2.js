//  const tinderUser = new Object()   // singleton object
const tinderUser= {}  // non singleton object


tinderUser.id= "123abc"
tinderUser.name= "sammy"
tinderUser.isLoggedIn = false

//  console.log(tinderUser);


const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
 
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 ={1:"a" , 2:"b"}
const obj2 ={3:"c" , 4:"b"}

// const obj3 = {obj1 ,obj2}    // output:  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'b' } }
// const obj3 = Object.assign({} ,obj1, obj2)      // output: { '1': 'a', '2': 'b', '3': 'c', '4': 'b' }  convert two objects into single object
const obj3 = {...obj1 , ...obj2}
// console.log(obj3);


const users =[
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
]

// console.log(users[1].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));





