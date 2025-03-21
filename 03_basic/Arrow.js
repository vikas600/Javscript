const user ={
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`) // this current context ko refer krta hai
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username= "hitesh"
//     // console.log(this)
//     console.log(this.username)  // this will give undefined
// }
// chai()

// const chai = function(){
//     let username ="hitesh"
//     console.log(this.username);
    
// }

// chai()

const chai= () => {
    let username= "hitesh"
    console.log(this);
    
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return 
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) => ( {username: "hitesh"})

console.log(addTwo(3,4));

