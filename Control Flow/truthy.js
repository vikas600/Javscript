 const userEmail = "htesh.ai" //Got user email
//  const userEmail = "" // Dont't have user email
// const userEmail = []  // Got user email
 
 if(userEmail){
    console.log("Got user email");

 }else{
     console.log("Dont't have user email")
 }

 // falsy values

//  false , 0 , -0, BigINT 0n , "", null , undefined, NaN


// truthy values
// "0" , 'false; , " " , [] , {} , function(){}


// if (userEmail.length === 0){
//     console.log("array is empty");
    
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// NUllish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 10
val1= null ?? 10 ?? 20

console.log(val1)


// Terniary Operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("more than 80") :console.log("less than 80");


