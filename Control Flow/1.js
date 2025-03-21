// // if

// if(true){
// // yeh execute hoga
// }

// if(false){
// // yeh execute nhi hoga
// }


const isUserLogginIn =true
const temperature =41

// if(temperature === 41){
//     console.log("less than 50");
    
// }
// else{

//     console.log("temperature is greater than 50");
// }


// if(2 === "2"){
//     console.log("executed");
    

// }
// <, >, <=, >=, ==, !=, === , !== // === also check tyep  2=== "2"

// const score = 200
// if( score > 100){
//     // var power = "fly"
//     const power = "fly"
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)  // power is only access in scope (const )

// // var is accessible outside scope bcz it is global

// const balance = 1000
// // if(balance > 500) console.log("test");


// if(balance <500){

//     console.log("less than 500");
    

// }else if(balance <750){
//     console.log("less than 500");
    
// }
// else if (balance < 900) {
//     console.log("less than 900");
    
// }
// else{
//     console.log("less than 1200")
// }


const userLoggedIn =true
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail= true;
if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
    
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged In");
    
}