// Primitive

// 7 types : String, Number , Boolean , null , undefined, Symbol, BigInt


const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  // undefined


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 345649305953234n




// Reference (Non primitive)

// Array , Objects, Functions


const heros = ["shaktimaan" , "naagraj" , "doga"];
let myObj ={
    name: "hitest",
    age:22,
}


const myFunction = function(){
    console.log("Hello world!");
    
}

// console.log(typeof heros);



// ***********************************************


// Stack(primitive) , Heap(Non- primitive)

let myYoutubename = "hiteshChoudharydotcom"

let anotherName = myYoutubename
anotherName = "chaiaurCode"

console.log(anotherName);
console.log(myYoutubename);

let userOne ={
    email: " user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne


userTwo.email ="vikas@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

